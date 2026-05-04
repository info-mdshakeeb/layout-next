import { OnThisPage } from "@/components/elements/on-this-page"
import { SuggestedPages } from "@/components/elements/suggested-pages"
import { PageHeader } from "@/components/layout/page-header"
import { TransitionLink } from "@/components/transition-link"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/lib/config"
import {
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CheckCircle2Icon,
  Clock3Icon,
  Globe2Icon,
  HeadphonesIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareTextIcon,
  PhoneIcon,
  RouteIcon,
  SendIcon,
  ShieldCheckIcon,
} from "lucide-react"
import type { Metadata } from "next"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Contact ${siteConfig.name} for booking support, tour planning, corporate travel, and general assistance.`,
}

const lastUpdated = "April 30, 2026"

const summaryItems = [
  {
    title: "Fast response",
    value: "Send your trip details and our team will help with the next step.",
    icon: HeadphonesIcon,
  },
  {
    title: "Travel support",
    value: "Bookings, tour plans, visa guidance, and corporate requests.",
    icon: RouteIcon,
  },
  {
    title: "Direct channels",
    value: "Reach us by email, phone, or through the contact form below.",
    icon: CheckCircle2Icon,
  },
]

const contactMethods = [
  {
    id: "email",
    label: "Email",
    value: siteConfig.emails[0],
    href: `mailto:${siteConfig.emails[0]}`,
    icon: MailIcon,
  },
  {
    id: "phone",
    label: "Hotline",
    value: siteConfig.phones[0],
    href: `tel:${siteConfig.phones[0]}`,
    icon: PhoneIcon,
  },
  {
    id: "address",
    label: "Office",
    value: siteConfig.address,
    href: "https://maps.google.com/?q=House%2024%2C%20Road%208%2C%20Dhaka%2C%20Bangladesh",
    icon: MapPinIcon,
  },
]

const supportSteps = [
  [
    "01",
    "Share your request",
    "Tell us the destination, travel dates, passenger count, and support you need.",
  ],
  [
    "02",
    "We review details",
    "Our team checks availability, route options, and the most relevant next action.",
  ],
  [
    "03",
    "Confirm the plan",
    "You receive clear follow-up details before booking, payment, or documentation.",
  ],
]

const onThisPageItems = [
  { id: "contact-form", text: "Contact Form", level: 2 as const },
  { id: "direct-contact", text: "Direct Contact", level: 2 as const },
  { id: "support-process", text: "Support Process", level: 2 as const },
  { id: "office-hours", text: "Office Hours", level: 2 as const },
]

const suggestedPages = [
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
    description: "Learn how contact and support data is handled.",
  },
  {
    href: "/refund-policy",
    title: "Refund Policy",
    description: "Check refund eligibility before sending a request.",
  },
  {
    href: "/terms-of-service",
    title: "Terms of Service",
    description: "Review service terms for bookings and support.",
  },
]

export default function ContactUsPage() {
  return (
    <div className="scroll-mt-24 bg-background">
      <PageHeader label="Contact" title="Contact Us" />

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
                Email us
                <ArrowUpRightIcon className="size-3" />
              </a>
              <span className="text-border">·</span>
              <TransitionLink
                href="/"
                className="inline-flex h-7 items-center text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none"
              >
                Back to home
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>

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

      <div className="container grid gap-16 py-16 lg:grid-cols-[minmax(0,1fr)_240px] lg:py-24">
        <article className="min-w-0">
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-0">
              <ShieldCheckIcon className="size-5 shrink-0 text-primary/60" />
              <span className="mt-2 block w-px flex-1 bg-border/60" />
            </div>
            <p className="pb-10 text-sm leading-7 text-muted-foreground">
              Use this page to reach our team for travel bookings, itinerary
              planning, visa-related guidance, corporate travel support, or
              general questions. Include the important trip details so we can
              respond with the right context.
            </p>
          </div>

          <section
            id="contact-form"
            className="scroll-mt-24 border-t border-border/60 py-10"
          >
            <div className="flex gap-5">
              <div className="flex w-7 shrink-0 flex-col items-center">
                <span className="font-mono text-xs font-semibold text-muted-foreground/35 tabular-nums">
                  01
                </span>
                <span className="mt-3 block w-px flex-1 bg-border/40" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="block h-5 w-0.5 shrink-0 bg-primary/50" />
                  <h2 className="font-semibold tracking-tight text-foreground">
                    Send a Message
                  </h2>
                </div>
                <div className="mt-5 border-y border-border/60 py-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          <section
            id="direct-contact"
            className="scroll-mt-24 border-t border-border/60 py-10"
          >
            <div className="flex gap-5">
              <div className="flex w-7 shrink-0 flex-col items-center">
                <span className="font-mono text-xs font-semibold text-muted-foreground/35 tabular-nums">
                  02
                </span>
                <span className="mt-3 block w-px flex-1 bg-border/40" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <MessageSquareTextIcon className="size-4 shrink-0 text-muted-foreground/60" />
                  <h2 className="font-semibold tracking-tight">
                    Direct Contact
                  </h2>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {contactMethods.map((method) => {
                    const Icon = method.icon

                    return (
                      <a
                        key={method.id}
                        href={method.href}
                        target={method.id === "address" ? "_blank" : undefined}
                        rel={
                          method.id === "address"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex min-w-0 flex-col gap-3 border-y border-border/60 py-4 transition-colors hover:border-primary/50"
                      >
                        <span className="flex items-center gap-2 text-sm font-semibold">
                          <Icon className="size-4 text-primary" />
                          {method.label}
                        </span>
                        <span className="text-sm leading-6 text-muted-foreground group-hover:text-foreground">
                          {method.value}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          <section
            id="support-process"
            className="scroll-mt-24 border-t border-border/60 py-10"
          >
            <div className="flex gap-5">
              <div className="flex w-7 shrink-0 flex-col items-center">
                <span className="font-mono text-xs font-semibold text-muted-foreground/35 tabular-nums">
                  03
                </span>
                <span className="mt-3 block w-px flex-1 bg-border/40" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <SendIcon className="size-4 shrink-0 text-muted-foreground/60" />
                  <h2 className="font-semibold tracking-tight">
                    Support Process
                  </h2>
                </div>

                <div className="mt-5 w-full overflow-hidden border-y border-border/60">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border/60">
                        <th className="py-2.5 pr-8 font-semibold text-foreground">
                          Step
                        </th>
                        <th className="py-2.5 font-semibold text-foreground">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {supportSteps.map(([step, title, details]) => (
                        <tr
                          key={step}
                          className="group/row transition-colors hover:bg-muted/30"
                        >
                          <td className="py-3.5 pr-8 font-medium text-foreground">
                            <span className="inline-flex items-center gap-2">
                              <span className="font-mono text-xs text-primary/70">
                                {step}
                              </span>
                              {title}
                            </span>
                          </td>
                          <td className="py-3.5 text-muted-foreground">
                            {details}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section
            id="office-hours"
            className="scroll-mt-24 border-t border-border/60 py-10"
          >
            <div className="flex gap-5">
              <div className="flex w-7 shrink-0 flex-col items-center">
                <span className="font-mono text-xs font-semibold text-muted-foreground/35 tabular-nums">
                  04
                </span>
                <span className="mt-3 block w-px flex-1 bg-border/40" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <Clock3Icon className="size-4 shrink-0 text-muted-foreground/60" />
                  <h2 className="font-semibold tracking-tight">Office Hours</h2>
                </div>
                <div className="mt-5 flex flex-col gap-3 text-sm leading-7 text-muted-foreground">
                  <p>
                    Standard support is available Saturday to Thursday, 10:00 AM
                    to 7:00 PM Bangladesh time. Emergency travel requests should
                    include a phone number so the team can prioritize the
                    response.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Saturday-Thursday</Badge>
                    <Badge variant="secondary">10:00 AM-7:00 PM</Badge>
                    <Badge variant="secondary">Dhaka, Bangladesh</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex gap-5 border-t border-border/60 pt-8">
            <div className="w-7 shrink-0" />
            <p className="text-xs leading-6 text-muted-foreground/50">
              For direct support, contact{" "}
              <a
                href={`mailto:${siteConfig.emails[0]}`}
                className="underline underline-offset-2 transition-colors hover:text-muted-foreground"
              >
                {siteConfig.emails[0]}
              </a>
              . Last reviewed {lastUpdated}.
            </p>
          </div>
        </article>

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
