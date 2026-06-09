import { profile } from "./profile";

export const site = {
  title: "Manish Soni | Python AI Developer · LLM Applications · Backend APIs",
  description:
    "B.Tech CSE Graduate from India building AI applications, LLM workflows, backend APIs, developer tools, and ML/data projects.",
  language: "en",
  themeColor: "#F7F4EC",
  socialImage: "/images/social-preview.png",
  socialImageAlt:
    "Manish Soni portfolio preview for Python AI Developer, LLM Applications, and Backend APIs.",
  keywords: [
    "Manish Soni",
    "Python AI Developer",
    "LLM Applications",
    "Backend APIs",
    "AI Engineer Intern",
    "GenAI Intern",
    "Developer Tools Intern",
    "AI/ML Projects",
    "FastAPI",
  ],
} as const;

const rawSiteUrl = import.meta.env.PUBLIC_SITE_URL?.trim();

export const siteUrl = rawSiteUrl ? normalizeSiteUrl(rawSiteUrl) : undefined;

export function getAbsoluteUrl(path: string): string | undefined {
  if (!siteUrl) {
    return undefined;
  }

  return new URL(path, siteUrl).toString();
}

function normalizeSiteUrl(url: string): string {
  return url.endsWith("/") ? url : `${url}/`;
}

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  email: profile.links.emailLabel,
  jobTitle: "Python AI Developer · LLM Applications · Backend APIs",
  ...(siteUrl ? { url: siteUrl } : {}),
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [profile.links.github, profile.links.linkedin],
  knowsAbout: [
    ...profile.roleTags,
    "GitHub Apps",
    "RAG-style Retrieval",
    "Developer Tools",
    "Data Analysis",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "B.Tech CSE Graduate",
  },
} as const;
