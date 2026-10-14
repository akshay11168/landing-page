const allowedEvents = new Set([
  "project_click",
  "cta_click",
  "enquiry_start",
  "enquiry_success",
  "email_click",
]);

const allowedKeys = ["location", "project", "path"] as const;

/** Keep event properties free of enquiry contents and other personal data. */
export function analyticsProps(input: Record<string, string | undefined>): Record<string, string> {
  const props: Record<string, string> = {};
  for (const key of allowedKeys) {
    const value = input[key]?.trim();
    if (!value || value.length > 80) continue;
    if (value.includes("@") || /\d{7,}/.test(value)) continue;
    props[key] = value;
  }
  return props;
}

export function isAnalyticsHost(hostname: string): boolean {
  return hostname !== "localhost" && hostname !== "127.0.0.1" && hostname !== "[::1]" && !hostname.endsWith(".local");
}

type UmamiTracker = {
  track: (event: string, props?: Record<string, string>) => void;
};

export function track(event: string, input: Record<string, string | undefined> = {}): void {
  if (!allowedEvents.has(event)) return;
  if (typeof window === "undefined" || !isAnalyticsHost(window.location.hostname)) return;
  const props = analyticsProps({ ...input, path: window.location.pathname });
  const umami = (window as Window & { umami?: UmamiTracker }).umami;
  umami?.track(event, props);
}
