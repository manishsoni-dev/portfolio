import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const mediaItem = z.union([
  z.string(),
  z.object({
    src: z.string(),
    alt: z.string().optional(),
    caption: z.string().optional(),
  }),
]);

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string().optional(),
    problem: z.string().optional(),
    built: z.string().optional(),
    outcome: z.string().optional(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    labels: z.array(z.string()).default([]),
    statusLabels: z.array(z.string()).default([]),
    repository: z.url().optional(),
    demo: z.url().optional(),
    liveApi: z.url().optional(),
    proof: z.url().optional(),
    repoUrl: z.url().optional(),
    liveDemoUrl: z.url().optional(),
    apiUrl: z.url().optional(),
    proofUrl: z.url().optional(),
    videoUrl: z.url().optional(),
    demoVideoUrl: z.url().optional(),
    caseStudyUrl: z.url().optional(),
    screenshotUrls: z.array(mediaItem).default([]),
    proofImageUrls: z.array(mediaItem).default([]),
    screenshots: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string(),
        }),
      )
      .default([]),
    status: z.enum(["live", "in-progress", "planned"]).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().optional(),
    published: z.coerce.date().optional(),
  }),
});

export const collections = { projects };
