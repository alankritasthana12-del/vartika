import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import room from "@/assets/scene-room.jpg";
import { Scene, FadeText } from "@/components/Scene";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/her-world")({
  head: () => ({
    meta: [
      { title: "Her World — Vartika" },
      { name: "description", content: "A dreamy room of small things she loves. Touch each to feel a piece of her." },
    ],
  }),
  component: Page,
});

const objects = [
  { id: "book", emoji: "📖", x: "12%", y: "30%", line: "She reads to feel less alone." },
  { id: "music", emoji: "🎧", x: "78%", y: "26%", line: "Music heals parts of her no one sees." },
  { id: "star", emoji: "✦", x: "30%", y: "18%", line: "She thinks deeply at night." },
  { id: "rain", emoji: "☂", x: "65%", y: "62%", line: "Rainy evenings are her secret therapy." },
  { id: "mic", emoji: "🎤", x: "20%", y: "70%", line: "She sings softly when no one is listening." },
  { id: "glasses", emoji: "👓", x: "85%", y: "78%", line: "Behind those rectangular glasses lives a whole universe." },
  { id: "heart", emoji: "♡", x: "50%", y: "82%", line: "She still has a childish heart, and it's beautiful." },
];

function Page() {
  const [active, setActive] = useState<string | null>(null);
  const item = objects.find((o) => o.id === active);

  return (
    <Scene image={room} overlay="linear-gradient(180deg, oklch(0 0 0 / 0.45), oklch(0 0 0 / 0.7))">
      <Particles count={35} color="oklch(0.85 0.12 340 / 0.6)" />
      <div className="relative mx-auto min-h-screen max-w-6xl px-6 pt-28">
        <FadeText delay={0.3} as="span" className="serif text-xs uppercase tracking-[0.5em] text-amber-glow/90">
          Scene III
        </FadeText>
        <FadeText delay={0.7} as="h2" className="serif text-glow mt-3 text-4xl md:text-6xl">
          Her world,<br />in soft little things.
        </FadeText>
        <FadeText delay={1.6} className="mt-4 max-w-md text-foreground/75">
          Touch the floating things. Each one whispers something about her.
        </FadeText>

        {objects.map((o, i) => (
          <motion.button
            key={o.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 + i * 0.15, duration: 0.8 }}
            onClick={() => setActive(o.id)}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: o.x, top: o.y }}
            aria-label={o.id}
          >
            <span className="animate-slow-float relative flex h-14 w-14 items-center justify-center rounded-full glass text-2xl shadow-[0_0_30px_oklch(0.85_0.13_60/0.4)] transition group-hover:scale-110">
              {o.emoji}
              <span className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            </span>
          </motion.button>
        ))}

        <AnimatePresence>
          {item && (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
              className="fixed bottom-24 left-1/2 z-30 w-[90%] max-w-xl -translate-x-1/2 px-4"
            >
              <div className="glass rounded-2xl px-6 py-5 text-center">
                <p className="script text-2xl text-primary md:text-3xl">{item.line}</p>
                <button
                  onClick={() => setActive(null)}
                  className="mt-3 text-xs uppercase tracking-[0.4em] text-foreground/60 hover:text-foreground"
                >
                  close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Scene>
  );
}
