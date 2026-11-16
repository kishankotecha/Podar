export function scrollToLeadForm(e?: React.MouseEvent) {
  smoothScrollTo("#contact", e);
}

export function smoothScrollTo(targetIdOrHref: string, e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  // Handle Home / Top
  if (!targetIdOrHref || targetIdOrHref === "/" || targetIdOrHref === "#" || targetIdOrHref === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const id = targetIdOrHref.replace(/^#/, "");

  // Special handling for the lead form ("Let's Begin Their Journey!")
  if (
    id === "contact" ||
    id === "enquire" ||
    id === "lead-form" ||
    id === "hero-lead-form-mobile" ||
    id === "hero-lead-form-desktop"
  ) {
    const mobileForm = document.getElementById("hero-lead-form-mobile");
    const desktopForm = document.getElementById("hero-lead-form-desktop");

    const target =
      mobileForm && mobileForm.offsetParent !== null
        ? mobileForm
        : desktopForm && desktopForm.offsetParent !== null
        ? desktopForm
        : mobileForm || desktopForm;

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      const firstInput = target.querySelector<HTMLInputElement>(
        "input:not([type=hidden])"
      );
      if (firstInput) {
        setTimeout(() => {
          firstInput.focus({ preventScroll: true });
        }, 500);
      }
      return;
    }
  }

  // Standard element by ID
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  // Fallback query selector
  try {
    const queryEl = document.querySelector(targetIdOrHref);
    if (queryEl) {
      queryEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } catch {}
}
