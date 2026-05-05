import { OnThisPage } from "@/components/elements/on-this-page"
import { SuggestedPages } from "@/components/elements/suggested-pages"
import { PageHeader } from "@/components/layout/page-header"
import { TransitionLink } from "@/components/transition-link"
import { siteConfig } from "@/lib/config"
import {
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CheckCircle2Icon,
  CookieIcon,
  DatabaseIcon,
  Globe2Icon,
  MapPinIcon,
  ShieldCheckIcon,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: `Cookie Policy | ${siteConfig.name}`,
  description: `Learn about how ${siteConfig.name} uses cookies to improve your experience and how you can manage your preferences.`,
}

const lastUpdated = "April 29, 2026"

const summaryItems = [
  {
    title: "Essential Cookies",
    value: "Required for the website to function properly.",
    icon: CookieIcon,
  },
  {
    title: "Analytics",
    value: "Help us understand how visitors interact with the site.",
    icon: DatabaseIcon,
  },
  {
    title: "Your Preferences",
    value: "You can manage your cookie preferences at any time.",
    icon: CheckCircle2Icon,
  },
]

const policySections = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies",
    body: [
      "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.",
      'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser.',
    ],
  },
  {
    id: "how-we-use-cookies",
    title: "2. How We Use Cookies",
    body: [
      'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
      "We may use essential cookies to authenticate users and prevent fraudulent use of user accounts. We may also use analytics cookies to track information how the Website is used so that we can make improvements.",
    ],
  },
  {
    id: "managing-cookies",
    title: "3. Managing Your Cookies",
    body: [
      "You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies.",
      "If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.",
    ],
  },
]

const definitions = [
  [
    "Essential Cookies",
    "Necessary for the website to function properly and cannot be switched off in our systems.",
  ],
  [
    "Performance Cookies",
    "Allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
  ],
  [
    "Functional Cookies",
    "Enable the website to provide enhanced functionality and personalization.",
  ],
  [
    "Targeting Cookies",
    "May be set through our site by our advertising partners to build a profile of your interests.",
  ],
]

const onThisPageItems = policySections.map((section) => ({
  id: section.id,
  text: section.title.replace(/^\d+\.\s/, ""),
  level: 2 as const,
}))

const suggestedPages = [
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
    description: "Learn how personal information is collected and protected.",
  },
  {
    href: "/terms-of-service",
    title: "Terms of Service",
    description: "Review the rules for using our products and services.",
  },
  {
    href: "/contact-us",
    title: "Contact Us",
    description: "Ask questions about cookies or account preferences.",
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="scroll-mt-24 bg-background">
      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <PageHeader label="Legal document" title="Cookie Policy" />

      {/* ─── Meta bar ────────────────────────────────────────────────────── */}
      <div className="border-b border-border/60 bg-muted/40">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4 py-3">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDaysIcon className="size-3.5 text-primary/70" />
                Updated {lastUpdated}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon className="size-3.5 text-primary/70" />
                {siteConfig.address}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe2Icon className="size-3.5 text-primary/70" />
                {siteConfig.url}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TransitionLink
                href={"/contact-us"}
                className="inline-flex h-7 items-center gap-1.5 border-b border-primary/50 pb-0.5 text-xs font-medium text-primary transition-colors hover:border-primary hover:text-primary/90 focus-visible:outline-none"
              >
                Contact Us
                <ArrowUpRightIcon className="size-3" />
              </TransitionLink>

              <span className="text-border">·</span>
              <Link
                href="/"
                className="inline-flex h-7 items-center text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── At-a-glance strip ───────────────────────────────────────────── */}
      <div className="border-b border-border/60">
        <div className="container">
          <div className="grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {summaryItems.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 py-7 sm:px-8 first:sm:pl-0 last:sm:pr-0"
                >
                  <div className="flex shrink-0 flex-col items-center gap-1.5 pt-0.5">
                    <span className="block h-4 w-px bg-primary/40" />
                    <Icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground/60 uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ─── Main content ────────────────────────────────────────────────── */}
      <div className="container grid gap-16 py-16 lg:grid-cols-[minmax(0,1fr)_240px] lg:py-24">
        <article className="min-w-0">
          {/* Intro */}
          <div className="flex gap-5">
            <div className="flex flex-col items-center gap-0">
              <ShieldCheckIcon className="size-5 shrink-0 text-primary/60" />
              <span className="mt-2 block w-px flex-1 bg-border/60" />
            </div>
            <p className="pb-10 text-sm leading-7 text-muted-foreground">
              This Cookie Policy explains how {siteConfig.name} uses cookies and
              similar technologies to recognize you when you visit our website.
              It explains what these technologies are and why we use them, as
              well as your rights to control our use of them.
            </p>
          </div>

          {/* Policy sections */}
          {policySections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 border-t border-border/60 py-10"
            >
              <div className="flex gap-4">
                <div className="flex w-7 shrink-0 flex-col items-center">
                  <span className="font-mono text-xs font-semibold text-muted-foreground/35 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-3 block w-px flex-1 bg-border/40" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="block h-5 w-0.5 shrink-0 bg-primary/50" />
                    <h2 className="font-semibold tracking-tight text-foreground">
                      {section.title.replace(/^\d+\.\s/, "")}
                    </h2>
                  </div>
                  <div className="mt-4 flex flex-col gap-3.5 text-sm leading-7 text-muted-foreground">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Data categories table */}
          <section className="border-t border-border/60 py-10">
            <div className="flex gap-5">
              <div className="w-7 shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <CookieIcon className="size-4 shrink-0 text-muted-foreground/60" />
                  <h2 className="font-semibold tracking-tight">
                    Types of Cookies We Use
                  </h2>
                </div>

                <div className="mt-5 w-full overflow-hidden border-y border-border/60">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border/60">
                        <th className="py-2.5 pr-8 font-semibold text-foreground">
                          Cookie Type
                        </th>
                        <th className="py-2.5 font-semibold text-foreground">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {definitions.map(([term, definition]) => (
                        <tr
                          key={term}
                          className="group/row transition-colors hover:bg-muted/30"
                        >
                          <td className="py-3.5 pr-8 font-medium text-foreground">
                            <span className="inline-flex items-center gap-2">
                              <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40 transition-colors group-hover/row:bg-primary/70" />
                              {term}
                            </span>
                          </td>
                          <td className="py-3.5 text-muted-foreground">
                            {definition}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <div className="flex gap-5 border-t border-border/60 pt-8">
            <div className="w-7 shrink-0" />
            <p className="text-xs leading-6 text-muted-foreground/50">
              For questions regarding our use of cookies, contact us at{" "}
              <TransitionLink
                href={"/contact-us"}
                className="underline underline-offset-2 transition-colors hover:text-muted-foreground"
              >
                {siteConfig.emails[0]}
              </TransitionLink>
              . Last reviewed {lastUpdated}.
            </p>
          </div>
        </article>

        {/* Sticky sidebar */}
        <aside className={"hidden lg:block"}>
          <div className="sticky top-[calc(var(--header-height)+1.5rem)] self-start">
            <OnThisPage items={onThisPageItems} />
            <SuggestedPages pages={suggestedPages} />
          </div>
        </aside>
      </div>
    </div>
  )
}
