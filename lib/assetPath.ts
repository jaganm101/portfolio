/** Prefix public asset paths with Next.js basePath (e.g. /portfolio on GitHub Pages). */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
