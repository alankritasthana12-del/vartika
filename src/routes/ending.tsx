import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import sunrise from "@/assets/scene-sunrise.jpg";
import { Scene, FadeText } from "@/components/Scene";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/ending")({
  head: () => ({
    meta: [
      { title: "Ending — Vartika" },
      { name: "description", content: "You don't have to stay forever to become unforgettable. Thank you for existing." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Scene image={sunrise} overlay="linear-gradient(180deg, oklch(0 0 0 / 0.2), oklch(0 0 0 / 0.7))">
      <Particles count={45} color="oklch(0.92 0.13 70 / 0.7)" />
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <FadeText delay={0.4} as="span" className="serif text-xs uppercase tracking-[0.5em] text-amber-glow/90">
          Scene IX — Sunrise
        </FadeText>

        <FadeText
          delay={1}
          as="h2"
          className="serif text-glow mt-8 text-4xl leading-tight md:text-6xl"
        >
          You don't have to stay forever…
        </FadeText>
        <FadeText
          delay={2.4}
          className="script mt-6 text-3xl text-primary md:text-5xl"
        >
          to become unforgettable.
        </FadeText>

        <FadeText delay={4} className="serif mt-16 text-2xl italic text-foreground/85 md:text-3xl">
          Thank you for existing.
        </FadeText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.2, duration: 1.4 }}
          className="mt-14 flex flex-col items-center gap-6"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-8 py-3.5 text-sm tracking-[0.45em] text-foreground backdrop-blur-md transition hover:bg-primary/20"
          >
            <span>GOODBYE FOR NOW</span>
            <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <p className="script text-base text-foreground/60">
            some souls are written beautifully by the universe ✦
          </p>
        </motion.div>
      </div>
    </Scene>
  );
}
