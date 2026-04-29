import { cn } from "@/lib/utils";

type Edge = "left" | "right" | "top" | "bottom";

type EdgeFadeProps = {
  /** Which edges should fade */
  edges?: Edge[];
  /** Width of left/right fades (Tailwind class) */
  xSizeClass?: string; // e.g. "w-1/3"
  /** Height of top/bottom fades (Tailwind class) */
  ySizeClass?: string; // e.g. "h-1/3"
  /** z-index class */
  zClass?: string; // e.g. "z-10"
  /** Extra classes applied to each fade layer */
  className?: string;
};

export function EdgeFade({
  edges = ["left", "right"],
  xSizeClass = "w-1/3",
  ySizeClass = "h-1/3",
  zClass = "z-10",
  className,
}: EdgeFadeProps) {
  return (
    <>
      {edges.includes("left") && (
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0",
            xSizeClass,
            zClass,
            "bg-linear-to-r from-background to-transparent",
            className,
          )}
        />
      )}

      {edges.includes("right") && (
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0",
            xSizeClass,
            zClass,
            "bg-linear-to-l from-background to-transparent",
            className,
          )}
        />
      )}

      {edges.includes("top") && (
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0",
            ySizeClass,
            zClass,
            "bg-linear-to-b from-background to-transparent",
            className,
          )}
        />
      )}

      {edges.includes("bottom") && (
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0",
            ySizeClass,
            zClass,
            "bg-linear-to-t from-background to-transparent",
            className,
          )}
        />
      )}
    </>
  );
}
