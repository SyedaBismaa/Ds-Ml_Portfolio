"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      gsap.set(ref.current, { autoAlpha: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(
      ref.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.8 },
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
