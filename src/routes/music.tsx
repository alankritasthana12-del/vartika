import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import music from "@/assets/scene-music.jpg";
import { Scene, FadeText } from "@/components/Scene";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "Music World — Vartika" },
      { name: "description", content: "Where her feelings turn into melody. A glowing piano in a starlit dream." },
    ],
  }),
  component: Page,
});

function Page() {
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPulse((p) => (p + 1) % 4), 900);
    return () => clearInterval(t);
  }, []);

  const bars = Array.from({ length: 24 });

  return (
    <Scene image={music} overlay="linear-gradient(180deg, oklch(0 0 0 / 0.35), oklch(0 0 0 / 0.7))">
      <Particles count={60} color="oklch(0.88 0.14 80 / 0.7)" />
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <FadeText delay={0.3} as="span" className="serif text-xs uppercase tracking-[0.5em] text-amber-glow/90">
          Scene V
        </FadeText>
        <FadeText delay={0.7} as="h2" className="serif text-glow mt-4 text-5xl md:text-7xl">
          Music is where<br />she breathes.
        </FadeText>
        <FadeText delay={1.8} className="serif mt-6 max-w-xl text-lg italic text-foreground/80">
          Only instrumentals — no words can hold what she feels. The sky listens, the stars hum back.
        </FadeText>

        {/* visualizer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1.6 }}
          className="mt-14 flex h-32 items-end gap-1.5"
          aria-hidden
        >
          {bars.map((_, i) => {
            const h = 20 + Math.abs(Math.sin((i + pulse) * 0.7)) * 90;
            return (
              <span
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-primary via-accent to-amber-glow shadow-[0_0_18px_var(--primary)] transition-all duration-700"
                style={{ height: `${h}%` }}
              />
            );
          })}
        </motion.div>

        <FadeText delay={3.2} className="script mt-10 text-2xl text-primary md:text-3xl">
          Some songs feel like her silence.
        </FadeText>
      </div>
    </Scene>
  );
}
