"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  GitBranch,
  Globe,
} from "lucide-react";

import { GlowBorder } from "@/components/ui/GlowBorder";
import type { Project } from "@/types/project";

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <GlowBorder
      className="
        group
        h-full
        overflow-hidden
        rounded-[1.75rem]
        p-0
        transition-all
        duration-500
        hover:-translate-y-1
      "
    >
      <div className="p-6 sm:p-7">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.22em]">
          <span className="text-slate-500">
            {project.number}
          </span>

          <span
            className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/[0.04]
              px-2.5
              py-1
              text-cyan-300/80
            "
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            text-2xl
            font-semibold
            tracking-[-0.05em]
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-50
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-2.5
                py-1
                text-[0.65rem]
                uppercase
                tracking-[0.12em]
                text-slate-400
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.04]
                hover:text-cyan-200
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-6 space-y-3">
          {project.highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 text-sm text-slate-300"
            >
              <span
                className="
                  mt-1.5
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_10px_rgba(34,211,238,0.5)]
                "
              />

              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-white/[0.08]
            pt-5
          "
        >
          {/* External links */}
          <div className="flex items-center gap-4">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-400
                  transition-colors
                  duration-300
                  hover:text-cyan-300
                "
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
            ) : null}

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-400
                  transition-colors
                  duration-300
                  hover:text-cyan-300
                "
              >
                <Globe className="h-4 w-4" />
                Live Demo
              </a>
            ) : null}
          </div>

          {/* Case study */}
          <Link
            href={`/projects/${project.slug}`}
            className="
              group/link
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/25
              bg-cyan-400/[0.04]
              px-3.5
              py-2
              text-sm
              text-cyan-200
              transition-all
              duration-300
              hover:border-cyan-300/50
              hover:bg-cyan-400/[0.08]
              hover:shadow-[0_0_20px_rgba(34,211,238,0.06)]
            "
          >
            Case Study

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover/link:-translate-y-0.5
                group-hover/link:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>
    </GlowBorder>
  );
}