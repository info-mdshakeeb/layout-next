import { siteConfig } from "@/lib/config"
import {
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CheckCircle2Icon,
  CookieIcon,
  DatabaseIcon,
  Globe2Icon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserCheckIcon,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { PrivacyOnThisPage } from "./privacy-on-this-page"

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description:
    "Learn how Synth-Co collects, uses, protects, and manages personal information across its website, templates, and support services.",
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
      "We may disclose information if required by law, court order, regulatory request, or to protect the rights, safety, and security of Synth-Co, our users, or the public.",
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
      "Synth-Co is based in Dhaka, Bangladesh, and may use providers or infrastructure located in other countries. Your information may be processed outside your region.",
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
    <div className="bg-background">
      {/* Hero — map background with title overlay */}
      <div
        className="bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/b2bhomeMap.png')",
        }}
      >
        <div className="border-b border-border/60">
          <div className="container-wrapper">
            <div className="container flex h-32 items-end justify-start lg:h-40">
              <h1 className="relative bg-primary/20 px-3 py-1 text-xl font-semibold text-primary backdrop-blur-sm sm:text-2xl lg:text-4xl">
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Info bar — description, meta, summary, and CTAs */}
      <section className="border-b border-border/60 bg-background">
        <div className="container py-8 lg:py-10">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto]">
            {/* Left — description + meta */}
            <div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                This policy explains what personal information we collect, how
                we use it, who we share it with, and the choices available to
                people who use our website, templates, dashboard layouts, and
                support services.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDaysIcon className="size-3.5" />
                  Updated {lastUpdated}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden text-border sm:inline"
                >
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPinIcon className="size-3.5" />
                  {siteConfig.address}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden text-border sm:inline"
                >
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe2Icon className="size-3.5" />
                  {siteConfig.url}
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${siteConfig.emails[0]}`}
                  className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  Contact privacy team
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
                <Link
                  href="/"
                  className="inline-flex h-9 items-center rounded-lg border border-border/60 px-4 text-sm font-medium transition-colors hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  Back to home
                </Link>
              </div>
            </div>

            {/* Right — summary highlights */}
            <div className="flex flex-col gap-4 lg:min-w-[280px]">
              {summaryItems.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted/60 text-foreground">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold">{item.title}</h2>
                      <p className="mt-0.5 text-sm leading-5 text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main content: article left, "On This Page" right */}
      <div className="container grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:py-16">
        <article className="min-w-0">
          {/* Policy sections — clean document flow with dividers */}
          <div className="divide-y divide-border/60">
            {policySections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 py-10 first:pt-0"
              >
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Data categories table */}
          <section className="border-t border-border/60 pt-10">
            <div className="flex items-center gap-3">
              <CookieIcon className="size-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Data Categories We Handle
              </h2>
            </div>
            <div className="mt-6 overflow-hidden rounded-lg border border-border/60">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/40 text-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {dataCategories.map(([category, examples]) => (
                    <tr
                      key={category}
                      className="transition-colors hover:bg-muted/30"
                    >
                      <td className="px-4 py-4 font-medium">{category}</td>
                      <td className="px-4 py-4 text-muted-foreground">
                        {examples}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact section */}
          <section className="mt-10 border-t border-border/60 pt-10">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Contact Us
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-muted-foreground">
              For privacy questions, requests, or complaints, contact Synth-Co
              using the details below. We aim to respond to privacy requests
              within a reasonable timeframe required by applicable law.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <a
                href={`mailto:${siteConfig.emails[0]}`}
                className="group inline-flex items-center gap-3 text-sm transition-colors hover:text-foreground"
              >
                <span className="flex size-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors group-hover:border-foreground/20 group-hover:text-foreground">
                  <MailIcon className="size-4" />
                </span>
                <span>
                  <span className="block font-medium text-foreground">
                    Email
                  </span>
                  <span className="text-muted-foreground">
                    {siteConfig.emails[0]}
                  </span>
                </span>
              </a>
              <a
                href={`tel:${siteConfig.phones[0]}`}
                className="group inline-flex items-center gap-3 text-sm transition-colors hover:text-foreground"
              >
                <span className="flex size-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors group-hover:border-foreground/20 group-hover:text-foreground">
                  <PhoneIcon className="size-4" />
                </span>
                <span>
                  <span className="block font-medium text-foreground">
                    Phone
                  </span>
                  <span className="text-muted-foreground">
                    {siteConfig.phones[0]}
                  </span>
                </span>
              </a>
            </div>
          </section>
        </article>

        {/* On This Page – right sidebar */}
        <PrivacyOnThisPage items={onThisPageItems} />
      </div>
    </div>
  )
}
