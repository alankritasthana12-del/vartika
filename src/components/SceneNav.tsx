import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";

const scenes = [
  { to: "/", label: "I" },
  { to: "/the-girl-i-saw", label: "II" },
  { to: "/her-world", label: "III" },
  { to: "/overthinks", label: "IV" },
  { to: "/music", label: "V" },
  { to: "/parallel-universes", label: "VI" },
  { to: "/things-i-notice", label: "VII" },
  { to: "/letters-unsent", label: "VIII" },
  { to: "/ending", label: "IX" },
] as const;

export function SceneNav() {
  const loc = useLocation();
  const idx = scenes.findIndex((s) => s.to === loc.pathname);
  const current = idx >= 0 ? idx : 0;
  const next = scenes[current + 1];
  const prev = scenes[current - 1];

  return (
    <>
      {/* top minimal brand */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-5 md:px-10"
      >
        <Link
          to="/"
          className="pointer-events-auto serif text-xl tracking-[0.4em] text-foreground/85 hover:text-foreground"
        >
          VARTIKA
        </Link>
        <span className="serif text-xs tracking-[0.4em] text-foreground/55">
          {scenes[current]?.label} / IX
        </span>
      </motion.div>

      {/* side dot rail */}
      <nav className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {scenes.map((s, i) => (
          <Link
            key={s.to}
            to={s.to}
            aria-label={`Scene ${s.label}`}
            className="group relative flex h-3 w-3 items-center justify-center"
          >
            <span
              className={`block rounded-full transition-all ${
                i === current
                  ? "h-2.5 w-2.5 bg-primary shadow-[0_0_12px_var(--primary)]"
                  : "h-1.5 w-1.5 bg-foreground/30 group-hover:bg-foreground/70"
              }`}
            />
          </Link>
        ))}
      </nav>

      {/* bottom prev/next */}
      <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-40 flex justify-between px-6 md:px-10">
        {prev ? (
          <Link
            to={prev.to}
            className="glass pointer-events-auto rounded-full px-5 py-2 text-xs tracking-[0.3em] text-foreground/80 hover:text-foreground"
          >
            ← {prev.label}
          </Link>
        ) : <span />}
        {next ? (
          <Link
            to={next.to}
            className="glass pointer-events-auto rounded-full px-5 py-2 text-xs tracking-[0.3em] text-foreground/80 hover:text-foreground"
          >
            {next.label} →
          </Link>
        ) : <span />}
      </div>
    </>
  );
}
