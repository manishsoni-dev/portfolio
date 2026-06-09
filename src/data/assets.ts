import { existsSync } from "node:fs";
import { join } from "node:path";

export const resumeAsset = {
  path: "/resume/manish-soni-resume.pdf",
  label: "Resume",
  filename: "manish-soni-resume.pdf",
} as const;

const resumeFilePath = join(process.cwd(), "public/resume/manish-soni-resume.pdf");

export function hasResumeAsset(): boolean {
  return existsSync(resumeFilePath);
}
