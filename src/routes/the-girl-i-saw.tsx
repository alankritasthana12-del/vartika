import { createFileRoute } from "@tanstack/react-router";
import classroom from "@/assets/scene-classroom.jpg";
import { Scene, FadeText } from "@/components/Scene";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/the-girl-i-saw")({
  head: () => ({
    meta: [
      { title: "The Girl I Saw — Vartika" },
      { name: "description", content: "First time I saw her, she was explaining photosynthesis. Somehow, she became oxygen herself." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Scene image={classroom} overlay="linear-gradient(180deg, oklch(0 0 0 / 0.15), oklch(0 0 0 / 0.65))">
      <Particles count={30} color="oklch(0.95 0.10 80 / 0.6)" />
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-end px-6 pb-32 md:pb-40">
        <FadeText delay={0.5} as="span" className="serif text-xs uppercase tracking-[0.5em] text-amber-glow/90">
          Scene II
        </FadeText>
        <FadeText delay={1} as="h2" className="serif mt-4 text-5xl leading-tight text-glow md:text-7xl">
          First time I saw her…
        </FadeText>
        <FadeText delay={2} className="serif mt-4 text-2xl italic text-foreground/85 md:text-3xl">
          she was explaining photosynthesis.
        </FadeText>
        <FadeText delay={3.4} className="script mt-10 text-3xl text-primary md:text-4xl">
          But somehow… she became oxygen herself.
        </FadeText>
      </div>
    </Scene>
  );
}
