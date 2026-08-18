"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function TextReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      gsap.set(ref.current, { autoAlpha: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline();
    tl.fromTo(
      ref.current,
      { autoAlpha: 0, y: 36 },
      { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
    );

    return () => {
      tl.kill();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
