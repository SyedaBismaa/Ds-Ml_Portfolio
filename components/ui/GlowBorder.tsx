"use client";

import { ReactNode } from "react";

type GlowBorderProps = {
  children: ReactNode;
  className?: string;
};

export function GlowBorder({
  children,
  className = "",
}: GlowBorderProps) {
  return (
    <div
      className={`
        group
        relative
        rounded-2xl
        border
        border-white/[0.10]
        bg-[#080a0d]
        transition-all
        duration-500
        hover:border-cyan-400/30
        hover:shadow-[0_0_35px_rgba(34,211,238,0.06)]
        ${className}
      `}
    >
      {/* Subtle cyan glow that appears only on hover */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_45%)]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}