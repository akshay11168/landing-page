/** Count the published figures up once. The final number is already in the HTML. */
export function bindStats(): void {
  const nodes = [...document.querySelectorAll<HTMLElement>("[data-count]")];
  if (nodes.length === 0) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const format = (value: number, suffix: string) => value.toLocaleString("en-US") + suffix;

  const animate = (node: HTMLElement) => {
    const target = Number(node.dataset.count);
    const suffix = node.dataset.suffix ?? "";
    if (!Number.isFinite(target)) return;
    const start = performance.now();
    const duration = 2500;

    const frame = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      node.textContent = format(Math.round(target * eased), suffix);
      if (progress < 1) requestAnimationFrame(frame);
    };

    node.textContent = format(0, suffix);
    requestAnimationFrame(frame);
  };

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(animate);
    return;
  }

  const seen = new WeakSet<HTMLElement>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const node = entry.target as HTMLElement;
        if (seen.has(node)) continue;
        seen.add(node);
        observer.unobserve(node);
        animate(node);
      }
    },
    { threshold: 0.6 },
  );

  nodes.forEach((node) => observer.observe(node));
}
