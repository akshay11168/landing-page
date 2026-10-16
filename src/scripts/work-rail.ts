/** Move the project row by one card when either arrow is clicked. */
export function bindWorkRail(): void {
  const scroller = document.querySelector<HTMLElement>(".work-scroller");
  const rail = scroller?.closest(".work-rail");
  const prev = rail?.querySelector<HTMLButtonElement>("[data-work-dir='-1']");
  const next = rail?.querySelector<HTMLButtonElement>("[data-work-dir='1']");
  if (!scroller || !prev || !next) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const distance = () => {
    const card = scroller.querySelector("li");
    if (!card) return scroller.clientWidth;
    const gap = Number.parseFloat(getComputedStyle(scroller).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const update = () => {
    const max = scroller.scrollWidth - scroller.clientWidth;
    prev.hidden = scroller.scrollLeft <= 4;
    next.hidden = max <= 8 || scroller.scrollLeft >= max - 8;
  };

  const move = (direction: number) => {
    scroller.scrollBy({
      left: direction * distance(),
      behavior: motion.matches ? "auto" : "smooth",
    });
  };

  prev.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  scroller.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
