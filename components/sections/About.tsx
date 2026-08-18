import { Badge } from "@/components/ui/Badge";
import { GlowBorder } from "@/components/ui/GlowBorder";

const focusAreas = [
  "Data Analysis",
  "Machine Learning",
  "Explainable AI",
  "Model Deployment",
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-24 md:px-8"
    >
      {/* Section heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">
          About Me
        </h2>
      </div>

      {/* Main content */}
      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left content */}
        <div className="space-y-6">
          <div className="space-y-5 text-base leading-8 text-slate-300 md:text-lg">
            <p>
              I&apos;m a final-year B.Tech Computer Science student focused on
              Data Science and Machine Learning. I enjoy working with data,
              building predictive models, and turning machine learning
              concepts into practical solutions.
            </p>

            <p>
              My work sits at the intersection of analytical thinking and
              problem solving. I like building systems that not only perform
              well, but also create meaningful insights for real-world
              decision-making.
            </p>
          </div>

          {/* Skill badges */}
          <div className="flex flex-wrap gap-3 pt-1">
            <Badge>Python</Badge>
            <Badge>SQL</Badge>
            <Badge>Machine Learning</Badge>
            <Badge>Data Analytics</Badge>
          </div>
        </div>

        {/* Right focus card */}
        <GlowBorder className="w-full p-6">
          <div className="space-y-4">
            {/* Card header */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Focus Areas
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-cyan-400/25
                  bg-cyan-400/[0.04]
                  px-2
                  py-1
                  text-[0.6rem]
                  uppercase
                  tracking-[0.18em]
                  text-cyan-300
                "
              >
                Active
              </span>
            </div>

            {/* Focus areas */}
            {focusAreas.map((area) => (
              <div
                key={area}
                className="
                  group/item
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-cyan-400/35
                  hover:bg-white/[0.045]
                "
              >
                <span
                  className="
                    text-base
                    font-medium
                    text-slate-200
                    transition-colors
                    duration-300
                    group-hover/item:text-white
                  "
                >
                  {area}
                </span>

                {/* Cyan status dot */}
                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_10px_rgba(34,211,238,0.55)]
                    transition-all
                    duration-300
                    group-hover/item:scale-125
                    group-hover/item:shadow-[0_0_16px_rgba(34,211,238,0.8)]
                  "
                />
              </div>
            ))}
          </div>
        </GlowBorder>
      </div>
    </section>
  );
}