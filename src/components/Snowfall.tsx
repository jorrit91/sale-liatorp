"use client";

const FLAKE_COUNT = 40;

// Pre-computed random values for each flake so they're stable across renders
const flakes = Array.from({ length: FLAKE_COUNT }, (_, i) => ({
  left: `${(i * 2.618 * 100) % 100}%`, // golden-ratio spread
  delay: `${(i * 0.37) % 5}s`,
  duration: `${3 + (i % 5)}s`,
  size: i % 3 === 0 ? 6 : i % 3 === 1 ? 4 : 3,
  opacity: i % 3 === 0 ? 0.9 : 0.5,
}));

export function Snowfall(): React.ReactNode {
  return (
    <div className="pointer-events-none fixed inset-0 -top-2 z-60 overflow-hidden">
      {flakes.map((f, i) => (
        <div
          key={i}
          className="absolute top-0 animate-[snowfall_linear_infinite]"
          style={{
            left: f.left,
            animationDelay: f.delay,
            animationDuration: f.duration,
          }}
        >
          <div
            className="rounded-full bg-white"
            style={{
              width: f.size,
              height: f.size,
              opacity: f.opacity,
            }}
          />
        </div>
      ))}
    </div>
  );
}
