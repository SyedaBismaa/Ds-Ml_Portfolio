import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function revealOnScroll(target: string | Element | null, options?: ScrollTrigger.Vars) {
  if (!target) return undefined;

  const element = typeof target === "string" ? document.querySelector(target) : target;

  if (!element) return undefined;

  return gsap.fromTo(
    element,
    { autoAlpha: 0, y: 24 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
        ...options,
      },
    },
  );
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
