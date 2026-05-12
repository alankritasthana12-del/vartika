import { createFileRoute } from "@tanstack/react-router";
import rain from "@/assets/scene-rain.jpg";
import { Scene, FadeText } from "@/components/Scene";
import { Rain } from "@/components/Particles";

export const Route = createFileRoute("/overthinks")({
  head: () => ({
    meta: [
      { title: "The Girl Who Overthinks — Vartika" },
      { name: "description", content: "You smile less now. You think too much. But your softness still survives." },
    ],
  }),
  component: Page,
});

const lines = [
  "You smile less now.",
  "You think too much.",
  "You act okay too quickly.",
  "But your softness still survives.",
];

function Page() {
  return (
    <Scene image={rain} overlay="linear-gradient(180deg, oklch(0 0 0 / 0.55), oklch(0 0 0 / 0.8))">
      <Rain count={120} />
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 text-center">
        <FadeText delay={0.4} as="span" className="serif text-xs uppercase tracking-[0.5em] text-amber-glow/80">
          Scene IV — A rainy evening
        </FadeText>

        <div className="mt-12 space-y-8 md:space-y-10">
          {lines.map((l, i) => (
            <FadeText
              key={l}
              delay={1 + i * 1.4}
              as="p"
              className={`serif text-glow ${
                i === lines.length - 1
                  ? "script text-3xl text-primary md:text-5xl"
                  : "text-3xl italic text-foreground/90 md:text-5xl"
              }`}
            >
              {l}
            </FadeText>
          ))}
        </div>

        <FadeText delay={7} className="mt-16 text-sm tracking-[0.3em] text-foreground/55">
          listen closely — the rain knows.
        </FadeText>
      </div>
    </Scene>
  );
}
