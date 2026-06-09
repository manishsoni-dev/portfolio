import { getAbsoluteUrl } from "../data/site";

export function GET() {
  const sitemapUrl = getAbsoluteUrl("/sitemap-index.xml");
  const lines = ["User-agent: *", "Allow: /"];

  if (sitemapUrl) {
    lines.push(`Sitemap: ${sitemapUrl}`);
  }

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
