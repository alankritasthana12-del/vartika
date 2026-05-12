import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Scene, FadeText } from "@/components/Scene";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/things-i-notice")({
  head: () => ({
    meta: [
      { title: "Things I Notice — Vartika" },
      { name: "description", content: "Small handwritten things — the way she uses dots after sentences, the way she cares deeply." },
    ],
  }),
  component: Page,
});

const notes = [
  { t: "The way you use ..... after every sentence.", r: -4 },
  { t: "Your rectangular glasses with the red temples.", r: 3 },
  { t: "The way you care so deeply, even when no one asks.", r: -2 },
  { t: "You still have a child inside you — please protect her.", r: 4 },
  { t: "You try to stay strong for everyone around you.", r: -3 },
  { t: "Your silence speaks louder than most people's words.", r: 2 },
];

function Page() {
  return (
    <Scene
      overlay="linear-gradient(180deg, oklch(0.95 0.03 80 / 0.05), oklch(0.95 0.03 80 / 0.02))"
      kenBurns={false}
    >
      <div className="absolute inset-0 bg-dawn" />
      <Particles count={30} color="oklch(0.95 0.10 70 / 0.5)" />
      <div className="relative mx-auto min-h-screen max-w-5xl px-6 pt-28 pb-32">
        <FadeText delay={0.3} as="span" className="serif text-xs uppercase tracking-[0.5em] text-amber-glow/90">
          Scene VII
        </FadeText>
        <FadeText delay={0.6} as="h2" className="serif text-glow mt-3 text-4xl md:text-6xl">
          Things I notice
          <br />
          <span className="script text-primary">that nobody else does.</span>
        </FadeText>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:gap-10">
          {notes.map((n, i) => (
            <motion.div
              key={n.t}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: n.r }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="relative"
            >
              <div
                className="serif rounded-md p-7 text-lg leading-relaxed text-[oklch(0.22_0.04_280)] shadow-[0_18px_40px_oklch(0_0_0/0.45)] md:text-xl"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.97 0.03 85), oklch(0.93 0.05 60))",
                }}
              >
                <span className="script text-2xl text-[oklch(0.45_0.18_25)] md:text-3xl">
                  ❝
                </span>{" "}
                {n.t}
                <div className="mt-4 text-right text-xs uppercase tracking-[0.3em] text-[oklch(0.4_0.05_280)]">
                  — note nº {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Scene>
  );
}
