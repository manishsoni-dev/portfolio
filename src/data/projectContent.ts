import { existsSync, readdirSync, type Dirent } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectContentDirectory = fileURLToPath(
  new URL("../content/projects", import.meta.url),
);

export function hasProjectContentFiles(directory = projectContentDirectory): boolean {
  if (!existsSync(directory)) {
    return false;
  }

  return readdirSync(directory, { withFileTypes: true }).some((entry: Dirent) => {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return hasProjectContentFiles(entryPath);
    }

    return [".md", ".mdx"].includes(extname(entry.name));
  });
}
