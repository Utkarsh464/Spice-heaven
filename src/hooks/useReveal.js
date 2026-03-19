import { useEffect } from "react";

/**
 * useReveal
 * Attaches an IntersectionObserver to all elements with
 * .rv, .rv-l, or .rv-r classes and adds .up when they enter the viewport.
 *
 * Call at the top of any page component that uses reveal animations.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv, .rv-l, .rv-r");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("up");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  });
}
