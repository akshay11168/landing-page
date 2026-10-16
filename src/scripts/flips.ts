/** Flip a card on tap when the device has no hover. Pointer devices use CSS :hover. */
export function bindFlips(): void {
  const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)");

  for (const card of document.querySelectorAll<HTMLElement>(".flip")) {
    card.addEventListener("click", (event) => {
      if (fineHover.matches) return;
      if ((event.target as HTMLElement | null)?.closest("a")) return;
      card.classList.toggle("is-flipped");
    });
  }
}
