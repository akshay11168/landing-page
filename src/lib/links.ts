/** Return an http(s) URL, or undefined when the value should not be rendered. */
export function externalUrl(value: string | undefined): string | undefined {
  if (!value || !value.trim()) return undefined;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    return url.href;
  } catch {
    return undefined;
  }
}
