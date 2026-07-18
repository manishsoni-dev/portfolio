import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const appScanRoots = ["src", "public", "dist"];
const requiredSnippets = [
  "https://github.com/manishsoni-dev",
  "https://www.linkedin.com/in/manishsoni-dev",
  "mmanishsoni70@gmail.com",
  "India",
  "B.Tech CSE Graduate",
  "Python AI Developer",
  "LLM Applications",
  "Backend APIs",
  "Proof of Work",
  "Recruiter Quick Scan",
  "Available for",
  "Core proof",
  "Strengths",
  "Software Engineering Intern",
  "Currently targeting",
  "Hire me",
  "ArchGuard",
  "Shri AI",
  "Aidssist",
  "Aegis",
];
const forbiddenSnippets = [
  "Bengaluru",
  "final-year CSE student",
  "final-year student",
  "B.Tech CSE 2026 student",
  "B.Tech CSE 2026",
  "graduating in 2026",
  "Ludhiana, Punjab, India",
  "Ludhiana",
  "Punjab",
  "https://linkedin.com/in/manishhhsoni",
  "https://www.linkedin.com/in/manishhhsoni",
  "linkedin.com/in/manishhhsoni",
  "https://github.com/Manisshhhhhh",
  "github.com/Manisshhhhhh",
  "https://instagram.com/manish.soni_",
  "https://facebook.com/manish.soni",
  "https://youtube.com/@manishsoni",
  "AI expert",
  "Senior AI Engineer",
  "Research Scientist",
  "research scientist",
  "senior-level AI engineer",
  "senior AI engineer",
  "trained a model",
  "enterprise production deployment",
  "paid users",
  "full SaaS",
  "senior-level architecture ownership",
  "Shree.ai — LLM Tool Finder",
];
const textExtensions = new Set([
  ".astro",
  ".css",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mdx",
  ".mjs",
  ".svg",
  ".ts",
  ".tsx",
  ".txt",
  ".xml",
]);

const failures = [];
const files = appScanRoots.flatMap((directory) =>
  collectTextFiles(join(root, directory)),
);
const corpus = files
  .map((filePath) => readFileSync(filePath, "utf8"))
  .join("\n");

for (const snippet of requiredSnippets) {
  if (!corpus.includes(snippet)) {
    failures.push(`Missing required profile text/link: ${snippet}`);
  }
}

for (const snippet of forbiddenSnippets) {
  const offenders = files.filter((filePath) =>
    readFileSync(filePath, "utf8").includes(snippet),
  );

  if (offenders.length > 0) {
    failures.push(
      `Forbidden preview/fabricated text "${snippet}" found in ${offenders
        .map((filePath) => filePath.replace(root, ""))
        .join(", ")}`,
    );
  }
}

const resumePath = join(root, "public/resume/manish-soni-resume.pdf");
const resumeExists = existsSync(resumePath);
const resumeIsUsable = resumeExists && statSync(resumePath).size >= 10_000;
const builtIndex = readIfExists(join(root, "dist/index.html"));
const builtHireMe = readIfExists(join(root, "dist/hire-me/index.html"));
const builtProjects = readIfExists(join(root, "dist/projects/index.html"));
const built404 = readIfExists(join(root, "dist/404.html"));
const builtArchGuard = readIfExists(join(root, "dist/projects/archguard/index.html"));
const builtCorpus = collectTextFiles(join(root, "dist"))
  .map((filePath) => readFileSync(filePath, "utf8"))
  .join("\n");
const faviconSvg = readIfExists(join(root, "public/favicon.svg"));
const astroConfig = readIfExists(join(root, "astro.config.mjs"));
const baseLayout = readIfExists(join(root, "src/layouts/BaseLayout.astro"));
const siteData = readIfExists(join(root, "src/data/site.ts"));
const normalizedSiteUrl = normalizeOptionalUrl(process.env.PUBLIC_SITE_URL);
const sitemapIndex = readIfExists(join(root, "dist/sitemap-index.xml"));
const robotsText = readIfExists(join(root, "dist/robots.txt"));

if (resumeExists && !resumeIsUsable) {
  failures.push("Resume PDF exists but is too small to be a usable generated resume.");
}

if (resumeIsUsable && (builtIndex.includes("Resume coming soon") || builtHireMe.includes("Resume coming soon"))) {
  failures.push("Resume coming soon is still rendered even though a usable resume PDF exists.");
}

if (resumeIsUsable && (!builtIndex.includes("/resume/manish-soni-resume.pdf") || !builtHireMe.includes("/resume/manish-soni-resume.pdf"))) {
  failures.push("Built pages do not include the expected resume download link.");
}

if (!resumeExists && (builtIndex.includes("/resume/manish-soni-resume.pdf") || builtHireMe.includes("/resume/manish-soni-resume.pdf"))) {
  failures.push("Resume PDF is absent, but a public resume download link is rendered.");
}

if (!resumeExists && (!builtIndex.includes("Resume coming soon") || !builtHireMe.includes("Resume coming soon"))) {
  failures.push("Resume PDF is absent, but the built pages do not show a safe resume state.");
}

if (!existsSync(join(root, "dist/hire-me/index.html"))) {
  failures.push("/hire-me page was not generated.");
}

if (!existsSync(join(root, "dist/projects/index.html"))) {
  failures.push("/projects page was not generated.");
}

if (!existsSync(join(root, "dist/404.html"))) {
  failures.push("404 page was not generated.");
}

if (!builtHireMe.includes("Hire me") || !builtHireMe.includes("Top projects")) {
  failures.push("/hire-me page did not build with the expected recruiter content.");
}

if (!builtHireMe.includes("Current positioning") || !builtHireMe.includes("Core skills")) {
  failures.push("/hire-me page is missing recruiter scan sections.");
}

if (!builtProjects.includes("View Case Study / Details") || !builtProjects.includes("ArchGuard")) {
  failures.push("/projects page did not build with expected project cards.");
}

if (
  !built404.includes("This page was not found") ||
  !built404.includes("/projects/") ||
  !built404.includes("/hire-me/")
) {
  failures.push("404 page is missing the expected not-found message or routing CTAs.");
}

if (!builtIndex.includes("Recruiter Quick Scan") || !builtIndex.includes("Software Engineering Intern")) {
  failures.push("Built homepage is missing the expected Recruiter Quick Scan content.");
}

verifyMetadata(builtIndex);
verifyArchGuardProofLinks(builtArchGuard);
verifyLaunchConfiguration();

if (!hasProjectContentFile() && builtIndex.includes('id="projects"')) {
  failures.push("Projects section is rendered even though no real project Markdown exists.");
}

if (!faviconSvg.includes("Manish Soni favicon") || !faviconSvg.includes("#121411")) {
  failures.push("SVG favicon does not contain the expected Manish Soni dark mark.");
}

if (faviconSvg.includes("M50.4 78.5")) {
  failures.push("Default Astro favicon SVG path is still present.");
}

if (
  builtCorpus.includes("ADD-AIDSSIST-REPO") ||
  builtCorpus.includes("ADD-AEGIS-REPO") ||
  builtCorpus.includes("[ADD-") ||
  builtCorpus.includes("href=\"\"") ||
  builtCorpus.includes("href=\"undefined\"") ||
  builtCorpus.includes("src=\"undefined\"")
) {
  failures.push("Visible placeholder, empty, or undefined project links are present in built output.");
}

if (builtCorpus.includes("localhost")) {
  failures.push("Built production-facing output contains localhost.");
}

verifyProjectOrder(builtIndex);
verifyMediaAssets();
verifyNoUndefinedUrls();

if (normalizedSiteUrl) {
  if (!sitemapIndex.includes(`${normalizedSiteUrl}sitemap-0.xml`)) {
    failures.push("Production sitemap index is missing the expected site URL.");
  }

  if (!robotsText.includes(`Sitemap: ${normalizedSiteUrl}sitemap-index.xml`)) {
    failures.push("Production robots.txt is missing the sitemap URL.");
  }
} else if (sitemapIndex) {
  failures.push("Sitemap was generated without PUBLIC_SITE_URL.");
} else if (robotsText.includes("Sitemap:")) {
  failures.push("robots.txt includes a sitemap URL without PUBLIC_SITE_URL.");
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Content integrity verified.");

function collectTextFiles(directory) {
  if (!existsSync(directory)) {
    return [];
  }

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return collectTextFiles(entryPath);
    }

    return textExtensions.has(extname(entry.name)) ? [entryPath] : [];
  });
}

function readIfExists(filePath) {
  return existsSync(filePath) ? readFileSync(filePath, "utf8") : "";
}

function hasProjectContentFile() {
  return collectTextFiles(join(root, "src/content/projects")).some(
    (filePath) => [".md", ".mdx"].includes(extname(filePath)),
  );
}

function normalizeOptionalUrl(url) {
  const trimmedUrl = url?.trim();

  if (!trimmedUrl) {
    return undefined;
  }

  return trimmedUrl.endsWith("/") ? trimmedUrl : `${trimmedUrl}/`;
}

function verifyProjectOrder(html) {
  const expectedOrder = [
    "ArchGuard",
    "Shri AI",
    "Aidssist V3",
    "Aegis",
    "AI Fraud Detection System",
  ];
  const positions = expectedOrder.map((title) => ({
    title,
    index: html.indexOf(title),
  }));

  for (const { title, index } of positions) {
    if (index === -1) {
      failures.push(`Expected project title is missing from built homepage: ${title}`);
    }
  }

  for (let index = 1; index < positions.length; index += 1) {
    const previous = positions[index - 1];
    const current = positions[index];

    if (previous.index !== -1 && current.index !== -1 && previous.index > current.index) {
      failures.push(
        `Project order is incorrect: ${previous.title} should appear before ${current.title}.`,
      );
    }
  }
}

function verifyArchGuardProofLinks(html) {
  const requiredLinks = [
    "https://demo-web-delta-five.vercel.app",
    "https://github.com/manishsoni-dev/ArchGuard",
    "https://arch-guard-1--manishsoni-dev.replit.app",
    "https://github.com/manishsoni-dev/ArchGuard/pull/8",
  ];

  for (const link of requiredLinks) {
    if (!html.includes(link)) {
      failures.push(`ArchGuard proof link is missing from built case study: ${link}`);
    }
  }
}

function verifyMetadata(html) {
  const requiredMetadata = [
    '<meta property="og:title"',
    '<meta property="og:description"',
    '<meta property="og:image"',
    '<meta property="og:image:alt"',
    '<meta name="twitter:card" content="summary_large_image"',
    '<meta name="twitter:title"',
    '<meta name="twitter:description"',
    '<meta name="twitter:image"',
    '<meta name="twitter:image:alt"',
    '<link rel="icon" type="image/svg+xml" href="/favicon.svg"',
    '<meta name="theme-color"',
  ];

  for (const marker of requiredMetadata) {
    if (!html.includes(marker)) {
      failures.push(`Homepage metadata is missing: ${marker}`);
    }
  }

  if (!html.includes("Manish Soni | Python AI Developer")) {
    failures.push("Portfolio title metadata does not contain Python AI Developer.");
  }

  if (!html.includes("/images/social-preview.png")) {
    failures.push("Homepage metadata does not reference the PNG social preview image.");
  }

  if (html.includes("/images/social-preview.svg")) {
    failures.push("Homepage metadata still references the SVG social preview image.");
  }

  if (normalizedSiteUrl) {
    const expectedCanonical = `<link rel="canonical" href="${normalizedSiteUrl}"`;
    const expectedOgUrl = `<meta property="og:url" content="${normalizedSiteUrl}"`;
    const expectedOgImage = `${normalizedSiteUrl}images/social-preview.png`;

    if (!html.includes(expectedCanonical)) {
      failures.push("Production homepage is missing the expected canonical URL.");
    }

    if (!html.includes(expectedOgUrl)) {
      failures.push("Production homepage is missing the expected Open Graph URL.");
    }

    if (!html.includes(expectedOgImage)) {
      failures.push("Production homepage is missing the expected absolute social preview URL.");
    }
  }
}

function verifyLaunchConfiguration() {
  if (!astroConfig.includes("PUBLIC_SITE_URL") || !siteData.includes("PUBLIC_SITE_URL")) {
    failures.push("PUBLIC_SITE_URL support is missing from Astro config or site data.");
  }

  if (!astroConfig.includes("@astrojs/sitemap") || !astroConfig.includes("sitemap()")) {
    failures.push("Astro sitemap integration/configuration is missing.");
  }

  if (!existsSync(join(root, "src/pages/robots.txt.ts")) && !existsSync(join(root, "public/robots.txt"))) {
    failures.push("robots.txt source is missing.");
  }

  if (!robotsText.includes("User-agent: *") || !robotsText.includes("Allow: /")) {
    failures.push("Generated robots.txt is missing public crawl rules.");
  }

  if (!baseLayout.includes('rel="canonical"') || !baseLayout.includes('property="og:url"')) {
    failures.push("Base layout is missing canonical or Open Graph URL support.");
  }

  if (!siteData.includes("social-preview.png")) {
    failures.push("Site config does not use the PNG social preview asset.");
  }

  const socialPreviewPath = join(root, "public/images/social-preview.png");

  if (!existsSync(socialPreviewPath) || statSync(socialPreviewPath).size < 10_000) {
    failures.push("PNG social preview image is missing or too small.");
  }
}

function verifyMediaAssets() {
  const requiredMedia = [
    "public/images/projects/archguard/demo-ui.png",
    "public/images/projects/archguard/proof-surface.png",
    "public/images/projects/archguard/proof-pr.png",
    "public/images/projects/aidssist-v3/demo-dashboard.png",
  ];

  for (const mediaPath of requiredMedia) {
    const absolutePath = join(root, mediaPath);

    if (!existsSync(absolutePath) || statSync(absolutePath).size < 10_000) {
      failures.push(`Required proof media is missing or too small: ${mediaPath}`);
    }
  }
}

function verifyNoUndefinedUrls() {
  const patterns = ["href=\"\"", "href=\"undefined\"", "src=\"undefined\"", "undefined project URLs"];

  for (const pattern of patterns) {
    const offenders = files.filter((filePath) =>
      readFileSync(filePath, "utf8").includes(pattern),
    );

    if (offenders.length > 0) {
      failures.push(
        `Undefined URL marker "${pattern}" found in ${offenders
          .map((filePath) => filePath.replace(root, ""))
          .join(", ")}`,
      );
    }
  }
}
