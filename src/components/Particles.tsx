import { useMemo } from "react";

type Props = { count?: number; color?: string; size?: number };

export function Particles({ count = 40, color = "oklch(0.95 0.08 70 / 0.7)", size = 3 }: Props) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 18;
        const duration = 14 + Math.random() * 16;
        const s = size * (0.4 + Math.random() * 1.4);
        return { i, left, delay, duration, s };
      }),
    [count, size],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.i}
          className="absolute bottom-0 rounded-full blur-[1px]"
          style={{
            left: `${p.left}%`,
            width: p.s,
            height: p.s,
            background: color,
            boxShadow: `0 0 ${p.s * 4}px ${color}`,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Rain({ count = 80 }: { count?: number }) {
  const drops = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 0.8 + Math.random() * 1.2,
        h: 40 + Math.random() * 60,
      })),
    [count],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {drops.map((d) => (
        <span
          key={d.i}
          className="absolute top-0 w-px"
          style={{
            left: `${d.left}%`,
            height: d.h,
            background: "linear-gradient(180deg, transparent, oklch(0.85 0.05 240 / 0.55))",
            animation: `rain-fall ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Stars({ count = 80 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        s: 1 + Math.random() * 2,
        d: Math.random() * 4,
      })),
    [count],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {stars.map((s) => (
        <span
          key={s.i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.s,
            height: s.s,
            boxShadow: `0 0 ${s.s * 3}px white`,
            animation: `shimmer ${2 + s.d}s ease-in-out ${s.d}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
