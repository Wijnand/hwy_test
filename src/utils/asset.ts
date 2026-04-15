const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const hash = import.meta.env.BUILD_HASH ?? "dev";

/**
 * Returns the full URL for a public asset, with base path and cache-busting
 * query param derived from the git commit SHA at build time.
 *
 * Usage: asset("/uploads/Cindy1.jpg") → "/hwy_test/uploads/Cindy1.jpg?v=abc1234"
 */
export function asset(path: string): string {
  return `${base}${path}?v=${hash}`;
}
