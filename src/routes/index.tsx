import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import balcony from "@/assets/scene-balcony.jpg";
import { Scene, FadeText } from "@/components/Scene";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vartika — Entry Gate" },
      { name: "description", content: "Some people don't enter our lives loudly. They slowly become a universe." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Scene image={balcony} overlay="linear-gradient(180deg, oklch(0 0 0 / 0.25), oklch(0 0 0 / 0.7))">
      <Particles count={50} />
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <FadeText delay={0.4} as="span" className="serif text-xs uppercase tracking-[0.5em] text-amber-glow/90">
          A cinematic story in nine scenes
        </FadeText>

        <FadeText
          delay={0.9}
          as="h1"
          className="serif text-glow mt-8 text-5xl leading-[1.05] text-foreground md:text-7xl"
        >
          Some people don't enter
          <br />
          our lives <em className="script text-primary">loudly…</em>
        </FadeText>

        <FadeText
          delay={2.1}
          className="serif mt-6 text-2xl italic text-foreground/85 md:text-3xl"
        >
          they slowly become a universe.
        </FadeText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 1.4 }}
          className="mt-14"
        >
          <Link
            to="/the-girl-i-saw"
            className="group relative inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-8 py-3.5 text-sm tracking-[0.45em] text-foreground backdrop-blur-md transition hover:bg-primary/20"
          >
            <span className="relative">ENTER</span>
            <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 -z-10 animate-shimmer rounded-full bg-primary/30 blur-xl" />
          </Link>
          <p className="script mt-6 text-base text-foreground/60">for her ♡</p>
        </motion.div>
      </div>
    </Scene>
  );
}
