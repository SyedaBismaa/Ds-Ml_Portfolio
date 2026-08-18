import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
