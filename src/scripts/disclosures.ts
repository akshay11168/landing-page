/** Open the long lists on a wide screen. The text stays in the page either way. */
export function bindDisclosures(): void {
  const wide = window.matchMedia("(min-width: 900px)");
  const items = [...document.querySelectorAll<HTMLDetailsElement>("[data-disclose]")];
  let suppress = 0;

  for (const item of items) {
    item.addEventListener("toggle", () => {
      if (suppress > 0) return;
      item.dataset.userToggled = "true";
    });
  }

  const apply = () => {
    suppress += 1;
    for (const item of items) {
      if (item.dataset.userToggled === "true") continue;
      item.open = wide.matches;
    }
    window.setTimeout(() => {
      suppress -= 1;
    }, 0);
  };

  apply();
  wide.addEventListener("change", apply);
  window.addEventListener("resize", apply);
}
