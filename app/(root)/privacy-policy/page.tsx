import { OnThisPage } from "@/components/elements/on-this-page"
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
  UserCheckIcon,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Learn how ${siteConfig.name} collects, uses, protects, and manages personal information across its website, templates, and support services.`,
}

const lastUpdated = "April 29, 2026"

const summaryItems = [
  {
    title: "Data we collect",
    value: "Account, contact, billing, usage, support, and device data.",
    icon: DatabaseIcon,
  },
  {
    title: "Why we use it",
    value:
      "To provide services, secure accounts, process payments, and improve products.",
    icon: UserCheckIcon,
  },
  {
    title: "Your choices",
    value:
      "You can request access, correction, deletion, or marketing opt-out.",
    icon: CheckCircle2Icon,
  },
]

const policySections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    body: [
      "We collect information you provide directly, including your name, email address, phone number, company details, project requirements, support messages, and payment-related details needed to complete a purchase.",
      "We also collect limited technical information automatically, such as IP address, browser type, device identifiers, pages visited, referring URLs, session timestamps, and approximate location derived from network data.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Information",
    body: [
      "We use personal information to deliver templates and services, respond to requests, manage accounts, process transactions, prevent abuse, improve site performance, and send service-related notices.",
      "When you opt in or where permitted by law, we may send product updates, release notes, offers, and educational content. You can unsubscribe from non-essential marketing messages at any time.",
    ],
  },
  {
    id: "legal-bases",
    title: "3. Legal Bases for Processing",
    body: [
      "Where applicable privacy laws require a legal basis, we process information to perform a contract, comply with legal obligations, protect legitimate business interests, protect users from fraud or misuse, and honor consent-based preferences.",
      "Examples include using billing data to complete a purchase, support messages to resolve a request, and analytics data to keep the website reliable and useful.",
    ],
  },
  {
    id: "sharing",
    title: "4. How We Share Information",
    body: [
      "We do not sell personal information. We may share limited data with service providers that help us operate the website, process payments, host services, send email, provide analytics, prevent fraud, or deliver customer support.",
      `We may disclose information if required by law, court order, regulatory request, or to protect the rights, safety, and security of ${siteConfig.name}, our users, or the public.`,
    ],
  },
  {
    id: "retention",
    title: "5. Data Retention",
    body: [
      "We keep personal information only as long as needed for the purpose collected, including account administration, legal compliance, dispute resolution, fraud prevention, accounting, and security.",
      "Support and account records are periodically reviewed. When information is no longer needed, we delete it, anonymize it, or securely archive it according to operational and legal requirements.",
    ],
  },
  {
    id: "security",
    title: "6. Security",
    body: [
      "We use reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, alteration, disclosure, or destruction.",
      "No online service can guarantee absolute security. If we learn of a security incident that affects your information, we will take appropriate steps and notify affected users where required.",
    ],
  },
  {
    id: "international-transfers",
    title: "7. International Data Transfers",
    body: [
      `${siteConfig.name} is based in Dhaka, Bangladesh, and may use providers or infrastructure located in other countries. Your information may be processed outside your region.`,
      "When required, we use appropriate safeguards for cross-border transfers, such as contractual commitments and security controls from trusted service providers.",
    ],
  },
  {
    id: "your-rights",
    title: "8. Your Privacy Rights",
    body: [
      "Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain processing of your personal information.",
      "You may also request a copy of your data or withdraw consent where processing is based on consent. We may need to verify your identity before completing a request.",
    ],
  },
  {
    id: "children",
    title: "9. Children",
    body: [
      "Our services are intended for business and professional use. We do not knowingly collect personal information from children under 13.",
      "If you believe a child has provided personal information to us, contact us and we will take appropriate steps to delete it.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy to reflect product changes, legal requirements, or operational improvements. The latest version will always show the effective update date.",
      "If a change materially affects your rights or how we use information, we will provide notice through the website, email, or another reasonable channel.",
    ],
  },
]

const dataCategories = [
  ["Contact data", "Name, email, phone, company, and support messages"],
  [
    "Transaction data",
    "Order records, invoices, payment status, and plan details",
  ],
  [
    "Usage data",
    "Pages viewed, feature usage, timestamps, and referral source",
  ],
  ["Device data", "IP address, browser, operating system, and device type"],
]

const onThisPageItems = policySections.map((section) => ({
  id: section.id,
  text: section.title.replace(/^\d+\.\s/, ""),
  level: 2 as const,
}))

export default function PrivacyPolicyPage() {
  return (
    <div className="scroll-mt-24 bg-background">
      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <PageHeader label="Legal document" title="Privacy Policy" />

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
              This policy explains what personal information we collect, how we
              use it, who we share it with, and the choices available to people
              who use our website, templates, dashboard layouts, and support
              services.
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
                    Data Categories We Handle
                  </h2>
                </div>

                <div className="mt-5 w-full overflow-hidden border-y border-border/60">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border/60">
                        <th className="py-2.5 pr-8 font-semibold text-foreground">
                          Category
                        </th>
                        <th className="py-2.5 font-semibold text-foreground">
                          Examples
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {dataCategories.map(([category, examples]) => (
                        <tr
                          key={category}
                          className="group/row transition-colors hover:bg-muted/30"
                        >
                          <td className="py-3.5 pr-8 font-medium text-foreground">
                            <span className="inline-flex items-center gap-2">
                              <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40 transition-colors group-hover/row:bg-primary/70" />
                              {category}
                            </span>
                          </td>
                          <td className="py-3.5 text-muted-foreground">
                            {examples}
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
              For privacy questions or requests, contact us at{" "}
              <TransitionLink
                href={"/contact-us"}
                className="underline underline-offset-2 transition-colors hover:text-muted-foreground"
              >
                {siteConfig.emails[0]}
              </TransitionLink>
              . This policy does not apply to third-party websites, services, or
              applications linked from our site. Last reviewed {lastUpdated}.
            </p>
          </div>
        </article>

        {/* Sticky sidebar */}
        <OnThisPage items={onThisPageItems} />
      </div>
    </div>
  )
}
