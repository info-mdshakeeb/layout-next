"use client";
import { motion } from "motion/react";
import * as React from "react";

export const FloatingPaths = React.memo(function FloatingPaths({
  position,
}: {
  position: number;
}) {
  const pathCount = 36;

  const paths = React.useMemo(() => {
    return Array.from({ length: pathCount }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
        380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
        152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      width: 0.5 + i * 0.03,
      strokeOpacity: 0.1 + i * 0.03,
      initial: { pathLength: 0.3, opacity: 0.6 },
      animate: {
        pathLength: 1,
        opacity: [0.3, 0.6, 0.3],
        pathOffset: [0, 1, 0],
      },
      transition: {
        duration: 20 + ((i * 7 + (position > 0 ? 3 : 0)) % 10),
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      } as const,
    }));
  }, [position]);

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        className="h-full w-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.strokeOpacity}
            initial={path.initial}
            animate={path.animate}
            transition={path.transition}
          />
        ))}
      </svg>
    </div>
  );
});
