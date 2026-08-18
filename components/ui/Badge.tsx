import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-cyan-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
