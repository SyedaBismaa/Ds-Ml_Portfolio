"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const active = navItems
        .map((item) => ({ ...item, element: document.querySelector(item.href) }))
        .filter((item) => item.element)
        .findLast((item) => {
          const rect = item.element!.getBoundingClientRect();
          return rect.top <= 140;
        });

      if (active?.href) {
        setActiveSection(active.href.replace("#", ""));
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled && "border-slate-800/80 bg-[#020817]/15",
      )}
    >
      <div className="mx-auto flex h-20 rounded-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="#home" className="text-[0.72rem] font-medium tracking-[0.24em] text-slate-100 uppercase">
         Portfolio.
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative text-[0.68rem] font-medium tracking-[0.18em] uppercase transition-colors duration-200",
                  isActive ? "text-cyan-200" : "text-slate-300 hover:text-slate-100",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-3 left-0 h-px w-full origin-left transition-transform duration-300",
                    isActive ? "scale-x-100 bg-cyan-300" : "scale-x-0 bg-transparent",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href="https://github.com/SyedaBismaa" target="_blank" rel="noreferrer" className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-slate-300 transition hover:text-slate-100">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/syeda-bisma-29202428a/" target="_blank" rel="noreferrer" className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-slate-300 transition hover:text-slate-100">
            LinkedIn
          </a>
          <a href="/cv.pdf" className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-slate-200 transition hover:text-cyan-200">
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center border border-slate-700 bg-transparent p-2 text-slate-100 md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-800 bg-[#020817] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-[0.7rem] font-medium tracking-[0.18em] uppercase",
                  activeSection === item.href.replace("#", "") ? "text-cyan-200" : "text-slate-300",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-4">
              <a href="https://github.com/SyedaBismaa" className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-slate-300">GitHub</a>
              <a href="https://www.linkedin.com/in/syeda-bisma-29202428a/" className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-slate-300">LinkedIn</a>
              <a href="/cv.pdf" className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-slate-200">Resume</a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
