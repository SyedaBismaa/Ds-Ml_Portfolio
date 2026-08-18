"use client";

import { type MouseEvent, useState } from "react";

export function MagneticButton({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    setPosition({ x: offsetX * 0.15, y: offsetY * 0.15 });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  const commonProps = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
    },
    className,
  };

  if (href) {
    return (
      <a {...commonProps} href={href}>
        {children}
      </a>
    );
  }

  return <button {...commonProps}>{children}</button>;
}
