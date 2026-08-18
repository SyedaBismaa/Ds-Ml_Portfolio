export function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Name */}
          <span className="text-sm font-medium tracking-wide text-slate-300">
            Syeda Bisma
          </span>

          {/* Social links */}
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a
              href="https://github.com/SyedaBismaa"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/syeda-bisma-29202428a/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              LinkedIn
            </a>

            <a
              href="mailto:syedabisma173@gmail.com"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/[0.05] pt-5 text-xs text-slate-600 sm:flex-row">
          <span>© 2026 Syeda Bisma</span>

          <span className="font-mono">
            Data → Models → Insights
          </span>
        </div>
      </div>
    </footer>
  );
}