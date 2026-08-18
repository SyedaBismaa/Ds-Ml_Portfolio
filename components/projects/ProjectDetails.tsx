import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { GlowBorder } from "@/components/ui/GlowBorder";
import type { Project } from "@/types/project";

export function ProjectDetails({
  project,
}: {
  project: Project;
}) {
  const sections: Array<{
    title: string;
    body: {
      title: string;
      content: string[];
    }[];
  }> = [
    {
      title: "Overview",
      body: project.overview,
    },
    {
      title: "Problem Statement",
      body: project.problemStatement,
    },
    {
      title: "Business Context",
      body: project.businessContextDetails,
    },
    {
      title: "Dataset",
      body: project.dataset,
    },
    {
      title: "Data Cleaning",
      body: project.dataCleaning,
    },
    {
      title: "Exploratory Data Analysis",
      body: project.exploratoryDataAnalysis,
    },
    {
      title: "Feature Engineering",
      body: project.featureEngineering,
    },
    {
      title: "Model Selection",
      body: project.modelSelection,
    },
    {
      title: "Evaluation",
      body: project.evaluation,
    },
    {
      title: "Explainability",
      body: project.explainability,
    },
    {
      title: "Deployment",
      body: project.deployment,
    },
    {
      title: "Learnings",
      body: project.learnings,
    },
  ];

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 md:px-8">
      {/* Back button */}
      <Link
        href="/#projects"
        className="
          mb-8
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
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      {/* Project header */}
      <div className="mb-10 border-b border-white/[0.08] pb-8">
        <div className="flex flex-col gap-6">
          {/* Project number */}
          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.24em]
              text-cyan-300/70
            "
          >
            {project.number}
          </span>

          {/* Title */}
          <h1
            className="
              text-4xl
              font-semibold
              tracking-[-0.07em]
              text-white
              md:text-6xl
            "
          >
            {project.title}
          </h1>

          {/* Description */}
          <p
            className="
              max-w-3xl
              text-base
              leading-8
              text-slate-400
              md:text-lg
            "
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((item) => (
              <span
                key={item}
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
                  transition-colors
                  duration-300
                  hover:border-cyan-400/30
                  hover:text-cyan-200
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Case study sections */}
      <div className="grid gap-8">
        {sections.map((section) => (
          <GlowBorder
            key={section.title}
            className="rounded-[1.5rem] p-6 md:p-7"
          >
            {/* Section heading */}
            <div className="mb-5 flex items-center justify-between">
              <h2
                className="
                  text-xl
                  font-semibold
                  tracking-[-0.03em]
                  text-white
                  md:text-2xl
                "
              >
                {section.title}
              </h2>

              {/* Small cyan indicator */}
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_10px_rgba(34,211,238,0.55)]
                "
              />
            </div>

            <div className="space-y-6">
              {section.body.map((item) => (
                <div
                  key={item.title}
                  className="space-y-3"
                >
                  <h3
                    className="
                      text-sm
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-cyan-300/80
                    "
                  >
                    {item.title}
                  </h3>

                  {item.content.length ? (
                    <ul
                      className="
                        space-y-2
                        text-sm
                        leading-7
                        text-slate-400
                        md:text-base
                      "
                    >
                      {item.content.map((entry) => (
                        <li
                          key={entry}
                          className="flex gap-3"
                        >
                          <span
                            className="
                              mt-2
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-cyan-300/80
                            "
                          />

                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-500 md:text-base">
                      Details coming soon
                    </p>
                  )}
                </div>
              ))}
            </div>
          </GlowBorder>
        ))}
      </div>
    </article>
  );
}