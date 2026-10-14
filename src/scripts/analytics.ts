import { track } from "../lib/analytics";

export function bindAnalytics(): void {
  const root = document.documentElement;
  if (root.dataset.analyticsBound === "true") return;
  root.dataset.analyticsBound = "true";

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const source = target.closest<HTMLElement>("[data-track]");
    if (!source?.dataset.track) return;
    track(source.dataset.track, {
      location: source.dataset.trackLocation,
      project: source.dataset.trackProject,
    });
  });

  document.querySelector("[data-enquiry]")?.addEventListener(
    "focusin",
    () => {
      track("enquiry_start");
    },
    { once: true },
  );
}
