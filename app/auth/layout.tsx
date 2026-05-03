import { Logo } from "@/components/layout/logo"
import { siteConfig } from "@/lib/config"
import Link from "next/link"

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* ── Decorative background elements ── */}

      {/* Top-left accent line */}
      <div className="pointer-events-none absolute top-0 left-0 h-px w-[40%] bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

      {/* Bottom-right accent line */}
      <div className="pointer-events-none absolute right-0 bottom-0 h-px w-[40%] bg-gradient-to-l from-transparent via-foreground/15 to-transparent" />

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 size-[min(800px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.015] blur-[100px]" />

      {/* ── Floating logo mark (top) ── */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 sm:top-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-70"
        >
          <Logo className="size-7 sm:size-8" />
          <span className="text-sm font-semibold tracking-wide text-foreground/60 uppercase">
            {siteConfig.name}
          </span>
        </Link>
      </div>

      {/* ── Centered form content ── */}
      <div
        className="relative z-10 container py-24"
        style={{ "--container-max": "400px" } as React.CSSProperties}
      >
        {/* Thin top accent bar */}
        <div className="mx-auto mb-10 h-px w-12 bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />

        {children}

        {/* Thin bottom accent bar */}
        <div className="mx-auto mt-10 h-px w-12 bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
      </div>

      {/* ── Bottom copyright ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8">
        <p className="text-[0.7rem] tracking-wide text-muted-foreground/40 uppercase">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </main>
  )
}
