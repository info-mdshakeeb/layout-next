"use client"

import { TransitionLink } from "@/components/transition-link"
import { siteConfig } from "@/lib/config"
import { Code2Icon, NetworkIcon, SendIcon } from "lucide-react"
import { Logo } from "./logo"
import { ModeSwitcher } from "./mood-switcher"

const socialLinks = [
  {
    key: "github",
    href: siteConfig.links.github,
    label: "GitHub",
    icon: Code2Icon,
  },
  {
    key: "twitter",
    href: siteConfig.links.twitter,
    label: "X",
    icon: SendIcon,
  },
  {
    key: "linkedin",
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
    icon: NetworkIcon,
  },
]

const footerColumns = [
  {
    title: "Resources",
    links: [
      { label: "Templates", href: "#templates" },
      { label: "Components", href: "#components" },
      { label: "Layouts", href: "#layouts" },
      { label: "Changelog", href: "#changelog" },
      { label: "Documentation", href: "#docs" },
      { label: "Guides", href: "#guides" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Examples", href: "#examples" },
      { label: "Support", href: "#support" },
      { label: "Community", href: "#community" },
      { label: "GitHub", href: siteConfig.links.github },
      { label: "Status", href: "#status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Customers", href: "#customers" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
]

/* ── Social icon row ──────────────────────────────────────── */
function SocialRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((item, i) => {
        const Icon = item.icon
        return (
          <span key={item.key} className="contents">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
            {i < socialLinks.length - 1 && (
              <hr className="h-3.5 w-px border-0 bg-border" />
            )}
          </span>
        )
      })}
    </div>
  )
}

/* ── Main footer ──────────────────────────────────────────── */
export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container">
        {/* ── Main grid ─────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-10 pt-12 pb-10 md:grid-cols-4 xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_1.6fr]">
          {/* Brand: full-width row on mobile/tablet, first col on desktop */}
          <div className="col-span-3 flex items-center justify-between md:col-span-4 xl:col-span-1 xl:flex-col xl:items-start xl:gap-4">
            <TransitionLink
              href="/"
              aria-label={`${siteConfig.name} home`}
              className="group flex min-w-0 items-center gap-1 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Logo className="size-6" />
              <span className="flex min-w-0 flex-col leading-none">
                <span className="truncate text-lg font-semibold">
                  {siteConfig.name.slice(1)}
                </span>
              </span>
            </TransitionLink>

            {/* Socials next to logo on mobile/tablet */}
            <SocialRow className="flex xl:hidden" />
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3.5 text-[13px] font-semibold tracking-wider text-foreground uppercase">
                {col.title}
              </h4>
              <nav>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <TransitionLink
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </TransitionLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}

          {/* Newsletter: full-width on mobile/tablet, last col on desktop */}
          <div className="col-span-3 md:col-span-4 xl:col-span-1">
            <h4 className="mb-3.5 text-[13px] font-semibold tracking-wider text-foreground uppercase">
              Subscribe to our newsletter
            </h4>
            <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
              Stay updated on new releases and features, guides, and case
              studies.
            </p>
            <form
              className="flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                aria-label="Enter your email"
                placeholder="you@domain.com"
                required
                type="email"
                name="email"
                className="h-9 flex-1 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
              <button
                type="submit"
                className="h-9 cursor-pointer rounded-md border border-border bg-foreground px-4 text-sm font-medium whitespace-nowrap text-background transition-opacity hover:opacity-85"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────── */}
        <div className="flex items-center justify-between py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-[13px] text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}, Inc.
            </p>
            {/* Socials at bottom-left on desktop only */}
            <SocialRow className="hidden xl:flex" />
          </div>
          <ModeSwitcher />
        </div>
      </div>
    </footer>
  )
}
