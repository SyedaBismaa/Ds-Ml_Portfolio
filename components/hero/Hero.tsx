"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  GitBranch,
//   Linkedin,
  Mail,
  Download,
} from "lucide-react";
import gsap from "gsap";

import { MagneticButton } from "@/components/animations/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";

type FloatingElement = {
  type: "circle" | "triangle" | "square" | "symbol" | "binary";
  value?: string;
  className: string;
};

const floatingElements: FloatingElement[] = [
  // Shapes
  {
    type: "circle",
    className:
      "left-[8%] top-[18%] h-3 w-3 border border-cyan-300/40 md:left-[12%]",
  },
  {
    type: "circle",
    className:
      "left-[18%] top-[68%] h-5 w-5 border border-violet-300/30 md:left-[20%]",
  },
  {
    type: "circle",
    className:
      "right-[12%] top-[22%] h-4 w-4 border border-sky-300/30 md:right-[18%]",
  },
  {
    type: "circle",
    className:
      "right-[8%] bottom-[18%] h-6 w-6 border border-cyan-300/20 md:right-[14%]",
  },

  // Triangles
  {
    type: "triangle",
    className: "left-[15%] top-[38%] text-cyan-300/30 md:left-[22%]",
  },
  {
    type: "triangle",
    className: "right-[16%] top-[52%] text-violet-300/30 md:right-[22%]",
  },

  // Squares
  {
    type: "square",
    className:
      "left-[7%] bottom-[25%] h-3 w-3 rotate-45 border border-sky-300/20",
  },
  {
    type: "square",
    className:
      "right-[7%] top-[38%] h-4 w-4 rotate-12 border border-violet-300/20",
  },

  // Mathematical symbols
  {
    type: "symbol",
    value: "+",
    className: "left-[25%] top-[20%] text-cyan-300/30",
  },
  {
    type: "symbol",
    value: "×",
    className: "left-[10%] top-[55%] text-violet-300/30",
  },
  {
    type: "symbol",
    value: "÷",
    className: "right-[25%] top-[18%] text-cyan-300/25",
  },
  {
    type: "symbol",
    value: "=",
    className: "right-[10%] bottom-[30%] text-sky-300/30",
  },
  {
    type: "symbol",
    value: "<",
    className: "left-[30%] bottom-[20%] text-cyan-300/20",
  },
  {
    type: "symbol",
    value: ">",
    className: "right-[30%] bottom-[18%] text-violet-300/20",
  },

  // Binary
  {
    type: "binary",
    value: "01001001",
    className:
      "left-[5%] top-[30%] text-[10px] tracking-[0.3em] text-cyan-300/20",
  },
  {
    type: "binary",
    value: "10110110",
    className:
      "right-[5%] top-[62%] text-[10px] tracking-[0.3em] text-violet-300/20",
  },
  {
    type: "binary",
    value: "11001010",
    className:
      "left-[32%] top-[12%] text-[9px] tracking-[0.25em] text-sky-300/20",
  },
  {
    type: "binary",
    value: "00110101",
    className:
      "right-[32%] bottom-[14%] text-[9px] tracking-[0.25em] text-cyan-300/20",
  },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const floatingRefs = useRef<(HTMLDivElement | null)[]>([]);
  const binaryRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * --------------------------------------------------
       * Floating object animations
       * --------------------------------------------------
       *
       * Each decorative element moves only 1–2px.
       * This keeps the animation alive without distracting
       * the user from the main content.
       */

      floatingRefs.current.forEach((element, index) => {
        if (!element) return;

        const direction = index % 2 === 0 ? 1 : -1;

        gsap.to(element, {
          x: direction * 2,
          y: index % 3 === 0 ? -2 : 2,
          duration: 2.5 + (index % 4) * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.12,
        });

        // Very subtle opacity breathing effect
        gsap.to(element, {
          opacity: 0.45,
          duration: 2 + (index % 3) * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.15,
        });
      });

      /*
       * --------------------------------------------------
       * Binary typing animation
       * --------------------------------------------------
       *
       * The binary strings continuously type and erase
       * themselves, creating a terminal/data-science feel.
       */

      binaryRefs.current.forEach((element, index) => {
        if (!element) return;

        const originalText = element.dataset.text || "";
        let currentLength = 0;
        let deleting = false;

        const timeline = gsap.timeline({
          repeat: -1,
          delay: index * 0.8,
        });

        // Typing
        timeline.to(
          {},
          {
            duration: originalText.length * 0.12,
            ease: "none",
            onUpdate: function () {
              const progress = this.progress();

              currentLength = Math.floor(
                progress * originalText.length
              );

              element.textContent = originalText.slice(0, currentLength);
            },
          }
        );

        // Small pause
        timeline.to({}, { duration: 1.2 });

        // Delete
        timeline.to(
          {},
          {
            duration: originalText.length * 0.08,
            ease: "none",
            onUpdate: function () {
              const progress = this.progress();

              currentLength = Math.floor(
                originalText.length * (1 - progress)
              );

              element.textContent = originalText.slice(0, currentLength);
            },
          }
        );

        // Small pause before restarting
        timeline.to({}, { duration: 0.6 });
      });

      /*
       * --------------------------------------------------
       * Subtle background glow movement
       * --------------------------------------------------
       */

      gsap.to(".hero-glow-one", {
        x: 20,
        y: -10,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow-two", {
        x: -15,
        y: 15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden py-20 md:py-24"
    >
      {/* ==================================================
          BACKGROUND
          ================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[#040709]" />

      {/* Cyan glow */}
      <div
        className="
          hero-glow-one
          pointer-events-none
          absolute
          left-[10%]
          top-[15%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-700/[0.06]
          blur-[100px]
        "
      />

      {/* Violet glow */}
      <div
        className="
          hero-glow-two
          pointer-events-none
          absolute
          right-[10%]
          top-[20%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-violet-500/[0.05]
          blur-[110px]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ==================================================
          FLOATING DATA / ML ELEMENTS
          ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {floatingElements.map((item, index) => (
          <div
            key={`${item.type}-${index}`}
            ref={(element) => {
              floatingRefs.current[index] = element;
            }}
            className={`absolute ${item.className}`}
          >
            {item.type === "triangle" && (
              <span
                className="
                  block
                  h-0
                  w-0
                  border-l-[7px]
                  border-r-[7px]
                  border-b-[12px]
                  border-l-transparent
                  border-r-transparent
                  border-b-current
                "
              />
            )}

            {item.type === "symbol" && (
              <span className="font-mono text-2lg font-light">
                {item.value}
              </span>
            )}

            {item.type === "binary" && (
              <span
                ref={(element) => {
                  binaryRefs.current.push(element);
                }}
                data-text={item.value}
                className="font-mono"
              />
            )}
          </div>
        ))}
      </div>

      {/* ==================================================
          MAIN CONTENT
          ================================================== */}

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-start px-6">
        <TextReveal>
          <p className="mb-4 text-xl font-medium tracking-[0.18em]  uppercase">
            Hi There 👋
          </p>
          <div className="h-0.5 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500" />
        </TextReveal>

        <TextReveal>
          <h1 className="mt-3 mb-2 text-2xl font-medium tracking-[-0.08em] text-white sm:text-4xl md:text-7xl lg:text-[6rem]">
            I&apos;m <span className="bg-gradient-to-r from-gray-300  to-[#1cbdd5] bg-clip-text text-transparent">Syeda Bisma</span>
          </h1>
        </TextReveal>

        <TextReveal>
          <div className="mt-5 inline-flex items-center rounded-full border  bg-cyan-400/5 px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-cyan-200">
            Data Science • Machine Learning • AI
          </div>
        </TextReveal>

        <TextReveal>
          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
            I build data-driven solutions and machine learning systems that turn complex data into meaningful insights and practical business solutions.
          </p>
        </TextReveal>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <MagneticButton
            href="#projects"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-green-500/50
              bg-sky-300/10
              px-7
              py-3.5
              text-sm
              font-medium
              text-cyan-100
              transition
              duration-300
              hover:border-cyan-300
              hover:bg-cyan-400/15
              hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
            "
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>

          <MagneticButton
            href="/resume/SyedaBisma_Resume.pdf"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-7
              py-3.5
              text-sm
              font-medium
              text-slate-100
              transition
              duration-300
              hover:border-violet-300/40
              hover:bg-white/[0.07]
            "
          >
            <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            Download Resume
          </MagneticButton>
        </div>

        <div className="mt-9 flex items-center gap-3">
          <a
            href="https://github.com/SyedaBismaa"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              p-3
              text-slate-400
              transition
              duration-300
              hover:border-cyan-400/40
              hover:bg-cyan-400/5
              hover:text-cyan-300
            "
          >
            <GitBranch className="h-4 w-4" />
          </a>

          <a
            href="mailto:syedabisma173@gmail.com"
            aria-label="Email"
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              p-3
              text-slate-400
              transition
              duration-300
              hover:border-cyan-400/40
              hover:bg-cyan-400/5
              hover:text-cyan-300
            "
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060A0D] to-transparent" />
    </section>
  );
}