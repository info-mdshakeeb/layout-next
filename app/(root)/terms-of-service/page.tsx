import { OnThisPage } from "@/components/elements/on-this-page"
import { PageHeader } from "@/components/layout/page-header"
import { TransitionLink } from "@/components/transition-link"
import { siteConfig } from "@/lib/config"
import {
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CookieIcon,
  DatabaseIcon,
  Globe2Icon,
  MapPinIcon,
  ShieldCheckIcon,
  UserCheckIcon,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Read our Terms of Service to understand the rules and guidelines for using ${siteConfig.name} products.`,
}

const lastUpdated = "April 29, 2026"

const summaryItems = [
  {
    title: "Account Rules",
    value: "You must be 18+ and provide accurate information.",
    icon: UserCheckIcon,
  },
  {
    title: "Payments & Subscriptions",
    value: "All payments are processed securely. Subscriptions auto-renew.",
    icon: DatabaseIcon,
  },
  {
    title: "Termination",
    value: "We may suspend accounts that violate our usage policies.",
    icon: ShieldCheckIcon,
  },
]

const policySections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
      "These terms apply to all visitors, users, and others who access or use the Service.",
    ],
  },
  {
    id: "user-accounts",
    title: "2. User Accounts",
    body: [
      "When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.",
      "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.",
    ],
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property",
    body: [
      `The Service and its original content, features, and functionality are and will remain the exclusive property of ${siteConfig.name} and its licensors.`,
      `Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ${siteConfig.name}.`,
    ],
  },
  {
    id: "termination",
    title: "4. Termination",
    body: [
      "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
      "Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "5. Limitation of Liability",
    body: [
      `In no event shall ${siteConfig.name}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.`,
      'Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.',
    ],
  },
]

const definitions = [
  [
    "Service",
    `The website, applications, and any other offerings by ${siteConfig.name}`,
  ],
  ["User", "Any individual or entity who accesses or uses the Service"],
  [
    "Content",
    "Text, images, or other information that can be posted, uploaded, linked to, or otherwise made available by you",
  ],
  [
    "Account",
    "A unique account created for you to access our Service or parts of our Service",
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
    href: "/refund-policy",
    title: "Refund Policy",
    description: "Check refund eligibility, timing, and support steps.",
  },
  {
    href: "/cookie-policy",
    title: "Cookie Policy",
    description: "See how cookies and similar technologies are used.",
  },
  {
    href: "/contact-us",
    title: "Contact Us",
    description: "Reach support for legal or account questions.",
  },
]

export default function TermsOfServicePage() {
  return (
    <div className="scroll-mt-24 bg-background">
      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <PageHeader label="Legal document" title="Terms of Service" />

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
              <a
                href={`mailto:${siteConfig.emails[0]}`}
                className="inline-flex h-7 items-center gap-1.5 border-b border-primary/50 pb-0.5 text-xs font-medium text-primary transition-colors hover:border-primary hover:text-primary/90 focus-visible:outline-none"
              >
                Contact Us
                <ArrowUpRightIcon className="size-3" />
              </a>
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
                    <p className="mt-1 text-sm leading-[1.6] text-muted-foreground">
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
            <p className="pb-10 text-[1rem] leading-[1.85] text-muted-foreground">
              These Terms of Service govern your use of {siteConfig.name}{" "}
              website and products. By accessing or using our services, you
              agree to comply with and be bound by these terms. Please read them
              carefully.
            </p>
          </div>

          {/* Policy sections */}
          {policySections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 border-t border-border/60 py-10"
            >
              <div className="flex gap-5">
                <div className="flex w-7 shrink-0 flex-col items-center">
                  <span className="font-mono text-[11px] font-semibold text-muted-foreground/35 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-3 block w-px flex-1 bg-border/40" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="block h-5 w-[2px] shrink-0 bg-primary/50" />
                    <h2 className="text-[1.0625rem] font-semibold tracking-tight text-foreground sm:text-[1.125rem]">
                      {section.title.replace(/^\d+\.\s/, "")}
                    </h2>
                  </div>
                  <div className="mt-4 space-y-3.5 text-[0.9375rem] leading-[1.85] text-muted-foreground">
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
                  <h2 className="text-[1.0625rem] font-semibold tracking-tight sm:text-[1.125rem]">
                    Key Definitions
                  </h2>
                </div>

                <div className="mt-5 w-full overflow-hidden border-y border-border/60">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border/60">
                        <th className="py-2.5 pr-8 font-semibold text-foreground">
                          Term
                        </th>
                        <th className="py-2.5 font-semibold text-foreground">
                          Definition
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
              For questions regarding these terms, contact us at{" "}
              <TransitionLink
                href={"/contact-us"}
                className="underline underline-offset-2 transition-colors hover:text-muted-foreground"
              >
                {siteConfig.emails[0]}
              </TransitionLink>
              . These terms are governed by applicable laws. Last reviewed{" "}
              {lastUpdated}.
            </p>
          </div>
        </article>

        {/* Sticky sidebar */}
        <OnThisPage items={onThisPageItems} suggestedPages={suggestedPages} />
      </div>
    </div>
  )
}
