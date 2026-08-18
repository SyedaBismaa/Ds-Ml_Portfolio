"use client";

import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import type { ProjectFilter } from "@/types/project";

const filters: ProjectFilter[] = ["All", "Supervised", "Unsupervised", "Data Analysis", "Deployment"];

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const cards = document.querySelectorAll("[data-project-card]");
    if (!cards.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      gsap.set(cards, { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          once: true,
        },
      },
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">Selected Work</h2>
        </div>
        <p className="max-w-xl text-sm text-slate-300 md:text-base">
          A few machine learning projects where I focused on solving practical problems with data.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeFilter === filter
                ? "border-cyan-400/60 bg-cyan-500/10 text-cyan-100"
                : "border-white/10 bg-slate-900/60 text-slate-300 hover:border-cyan-400/30 hover:text-cyan-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <div key={project.slug} data-project-card>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
