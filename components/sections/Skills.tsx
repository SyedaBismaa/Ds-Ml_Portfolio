import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { skillGroups } from "@/data/skills";

const categoryIcons = {
  Programming: Code2,
  "Data Science": BarChart3,
  "Machine Learning": BrainCircuit,
  Explainability: ShieldCheck,
  Deployment: Server,
  Tools: Wrench,
  Databases: Database,
  "Version Control": GitBranch,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-4 py-24 md:px-8"
    >
      {/* Section heading */}
      <div className="mb-14 text-center">


        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">
          Tech Stack
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
          Technologies and tools I use to analyze data, build machine learning
          systems, and turn models into practical solutions.
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon =
            categoryIcons[group.title as keyof typeof categoryIcons] ??
            Code2;

          return (
            <div
              key={group.title}
              className="
                group
                relative
                border-t
                border-white/10
                pt-5
                transition-all
                duration-300
                hover:border-cyan-400/40
              "
            >
              {/* Category header */}
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    border
                    border-white/10
                    text-slate-400
                    transition-all
                    duration-300
                    group-hover:border-cyan-400/40
                    group-hover:text-cyan-300
                    group-hover:shadow-[0_0_18px_rgba(34,211,238,0.08)]
                  "
                >
                  <Icon className="h-4 w-4" />
                </div>

                <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-white">
                  {group.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="
                      cursor-default
                      border
                      border-white/10
                      px-3
                      py-1.5
                      text-[0.68rem]
                      font-medium
                      uppercase
                      tracking-[0.08em]
                      text-slate-400
                      transition-all
                      duration-300
                      hover:border-cyan-400/40
                      hover:bg-cyan-400/[0.04]
                      hover:text-cyan-200
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}