"use client";
import { cn } from "@/lib/utils";
import React, { useMemo, type JSX } from "react";

export type TextShimmerProps = {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  duration?: number;
  spread?: number;
};

function TextShimmerComponent({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  const Element = (Component || "span") as React.ElementType;

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <Element
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text",
        "text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]",
        "[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        "dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        "animate-[text-shimmer_var(--shimmer-duration,2s)_linear_infinite]",
        className,
      )}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          "--shimmer-duration": `${duration}s`,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
          backgroundPosition: "100% center",
        } as React.CSSProperties
      }
    >
      <style>{`
        @keyframes text-shimmer {
          from {
            background-position: 100% center;
          }
          to {
            background-position: 0% center;
          }
        }
      `}</style>
      {children}
    </Element>
  );
}

export const TextShimmer = React.memo(TextShimmerComponent);
