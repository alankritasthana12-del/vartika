import { motion } from "motion/react";
import { type ReactNode } from "react";
import { SceneNav } from "./SceneNav";

type Props = {
  image?: string;
  children: ReactNode;
  overlay?: string;
  showNav?: boolean;
  kenBurns?: boolean;
};

export function Scene({
  image,
  children,
  overlay = "linear-gradient(180deg, oklch(0 0 0 / 0.35), oklch(0 0 0 / 0.75))",
  showNav = true,
  kenBurns = true,
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="vignette relative min-h-screen w-full overflow-hidden"
    >
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className={`h-full w-full object-cover ${kenBurns ? "animate-ken-burns" : ""}`}
          />
          <div className="absolute inset-0" style={{ background: overlay }} />
        </div>
      )}
      <div className="relative z-10 min-h-screen">{children}</div>
      {showNav && <SceneNav />}
    </motion.section>
  );
}

export function FadeText({
  children,
  delay = 0,
  className = "",
  as: As = "p",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "span" | "div";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <As className={className}>{children}</As>
    </motion.div>
  );
}
