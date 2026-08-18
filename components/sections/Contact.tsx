"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  GitBranch,
  Mail,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    description: "My projects & code",
    href: "https://github.com/SyedaBismaa",
    icon: GitBranch,
  },
  {
    name: "LinkedIn",
    description: "Let’s connect professionally",
    href: "https://www.linkedin.com/in/syeda-bisma-29202428a/",
    icon: BriefcaseBusiness,
  },
  {
    name: "Email",
    description: "Get in touch directly",
    href: "mailto:syedabisma173@gmail.com",
    icon: Mail,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-4 py-28 md:px-8 md:py-36"
    >
      <div className="text-center">
        {/* Small label */}


        {/* Heading */}
        <h2
          className="
            mt-6
            text-4xl
            font-semibold
            tracking-[-0.06em]
            text-white
            md:text-6xl
          "
        >
          Let&apos;s stay in touch.
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-5
            max-w-xl
            text-base
            leading-7
            text-slate-400
            md:text-lg
          "
        >
          Interested in Data Science, Machine Learning, or just want to
          connect? You can find me here.
        </p>
      </div>

      {/* Social links */}
      <div className="mx-auto mt-12 grid max-w-3xl gap-3 md:grid-cols-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                social.href.startsWith("mailto:")
                  ? undefined
                  : "noreferrer"
              }
              className="
                group
                flex
                items-center
                justify-between
                border
                border-white/[0.08]
                bg-white/[0.02]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.03]
              "
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-white/[0.08]
                    text-slate-400
                    transition-all
                    duration-300
                    group-hover:border-cyan-400/30
                    group-hover:text-cyan-300
                  "
                >
                  <Icon className="h-4 w-4" />
                </div>

                {/* Text */}
                <div className="text-left">
                  <p className="text-sm font-medium text-white">
                    {social.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {social.description}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  text-slate-600
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-cyan-300
                "
              />
            </a>
          );
        })}
      </div>

      {/* Bottom divider */}
      <div className="mx-auto mt-20 h-px max-w-3xl bg-white/[0.07]" />
    </section>
  );
}