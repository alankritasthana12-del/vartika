import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion } from "motion/react";
import lantern from "@/assets/scene-lantern.jpg";
import train from "@/assets/scene-train.jpg";
import stars from "@/assets/scene-stars.jpg";
import sunrise from "@/assets/scene-sunrise.jpg";
import room from "@/assets/scene-room.jpg";
import rain from "@/assets/scene-rain.jpg";
import { Scene, FadeText } from "@/components/Scene";

export const Route = createFileRoute("/parallel-universes")({
  head: () => ({
    meta: [
      { title: "Parallel Universes — Vartika" },
      { name: "description", content: "Quiet realities where we exist together — train rides, lanterns, rooftops, rain." },
    ],
  }),
  component: Page,
});

const universes = [
  { img: train, title: "The Train", line: "Sunlight through the window. Her hair, the wind, and silence as a third companion." },
  { img: rain, title: "The Tea Stall", line: "Rain on the tin roof. Two cups. One conversation that never needed to end." },
  { img: lantern, title: "The Lantern Festival", line: "A thousand lights rising. Her eyes — softer than all of them." },
  { img: stars, title: "The Rooftop", line: "We argued about constellations. She invented her own anyway." },
  { img: sunrise, title: "The City at Dawn", line: "We didn't talk much. The sky did all the speaking for us." },
  { img: room, title: "Quiet Evenings", line: "Just music, books, two breaths in the same room — that was the whole universe." },
];

function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 480, behavior: "smooth" });
  };

  return (
    <Scene image={sunrise} overlay="linear-gradient(180deg, oklch(0 0 0 / 0.55), oklch(0 0 0 / 0.8))" kenBurns={false}>
      <div className="mx-auto min-h-screen max-w-7xl px-6 pt-28">
        <FadeText delay={0.3} as="span" className="serif text-xs uppercase tracking-[0.5em] text-amber-glow/90">
          Scene VI
        </FadeText>
        <FadeText delay={0.6} as="h2" className="serif text-glow mt-3 text-4xl md:text-6xl">
          Parallel universes,
          <br />
          <span className="script text-primary">where we exist softly.</span>
        </FadeText>

        <div className="relative mt-12">
          <div
            ref={scrollRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-12"
          >
            {universes.map((u, i) => (
              <motion.article
                key={u.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: i * 0.05 }}
                className="group relative aspect-[3/4] w-[78vw] flex-none snap-center overflow-hidden rounded-3xl border border-foreground/10 md:w-[420px]"
              >
                <img
                  src={u.img}
                  alt={u.title}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="serif text-xs uppercase tracking-[0.4em] text-amber-glow/90">
                    Universe · {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="serif mt-2 text-3xl text-foreground">{u.title}</h3>
                  <p className="serif mt-2 italic text-foreground/85">{u.line}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-2 hidden justify-end gap-3 md:flex">
            <button
              onClick={() => scroll(-1)}
              className="glass h-10 w-10 rounded-full text-foreground/80 hover:text-foreground"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              className="glass h-10 w-10 rounded-full text-foreground/80 hover:text-foreground"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </Scene>
  );
}
