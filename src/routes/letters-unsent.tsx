import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import letters from "@/assets/scene-letters.jpg";
import { Scene, FadeText } from "@/components/Scene";

export const Route = createFileRoute("/letters-unsent")({
  head: () => ({
    meta: [
      { title: "Letters Unsent — Vartika" },
      { name: "description", content: "Quiet, mature letters that were written for her — but never had to arrive." },
    ],
  }),
  component: Page,
});

const lettersData = [
  {
    title: "On a quiet Tuesday",
    body: "I hope someone makes you tea today, exactly the way you like it. I hope you laugh at something stupid. I hope you remember that you're allowed to rest — even from being strong.",
  },
  {
    title: "When you can't sleep",
    body: "Your mind isn't broken for thinking too much. It's just soft, and the world is too loud. Put the headphones on. Breathe. The night is on your side, I promise.",
  },
  {
    title: "Just so you know",
    body: "You don't have to earn anyone's love by carrying their weight. You're enough as you are — clumsy, dreamy, a little dramatic, endlessly kind. Stay that way.",
  },
  {
    title: "If we ever meet again",
    body: "I won't make it complicated. Tea, a long walk, songs you like, silence when needed. The kind of meeting that doesn't need a reason to happen.",
  },
];

function Page() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Scene image={letters} overlay="linear-gradient(180deg, oklch(0 0 0 / 0.4), oklch(0 0 0 / 0.75))">
      <div className="mx-auto min-h-screen max-w-5xl px-6 pt-28 pb-32">
        <FadeText delay={0.3} as="span" className="serif text-xs uppercase tracking-[0.5em] text-amber-glow/90">
          Scene VIII
        </FadeText>
        <FadeText delay={0.6} as="h2" className="serif text-glow mt-3 text-4xl md:text-6xl">
          Letters <span className="script text-primary">unsent.</span>
        </FadeText>
        <FadeText delay={1.4} className="mt-4 max-w-xl text-foreground/75">
          Some words don't need a reply. They only need to exist somewhere — quietly, for her.
        </FadeText>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {lettersData.map((l, i) => (
            <motion.button
              key={l.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              onClick={() => setOpen(i)}
              className="group glass relative overflow-hidden rounded-2xl p-6 text-left transition hover:bg-white/10"
            >
              <div className="serif text-xs uppercase tracking-[0.4em] text-amber-glow/90">
                Letter nº {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="serif mt-3 text-2xl text-foreground">{l.title}</h3>
              <p className="mt-3 line-clamp-2 text-foreground/70">{l.body}</p>
              <span className="mt-4 inline-block text-xs uppercase tracking-[0.3em] text-primary group-hover:translate-x-1 transition-transform">
                open →
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, rotate: -1 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              className="serif relative max-w-xl rounded-md p-10 text-[oklch(0.22_0.04_280)] shadow-[0_30px_60px_oklch(0_0_0/0.6)]"
              style={{
                background: "linear-gradient(180deg, oklch(0.97 0.03 85), oklch(0.92 0.05 55))",
              }}
            >
              <div className="text-xs uppercase tracking-[0.4em] text-[oklch(0.45_0.18_25)]">
                {lettersData[open].title}
              </div>
              <p className="mt-5 text-xl leading-relaxed">{lettersData[open].body}</p>
              <div className="script mt-8 text-right text-2xl text-[oklch(0.45_0.18_25)]">
                — yours, quietly.
              </div>
              <button
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 text-xs uppercase tracking-[0.3em] text-[oklch(0.4_0.05_280)] hover:text-[oklch(0.22_0.04_280)]"
              >
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Scene>
  );
}
