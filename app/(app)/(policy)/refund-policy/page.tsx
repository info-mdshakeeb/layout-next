import {
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CookieIcon,
  Globe2Icon,
  MapPinIcon,
  ShieldCheckIcon,
} from "lucide-react"
import Link from "next/link"

import { OnThisPage } from "@/components/elements/on-this-page"
import { SuggestedPages } from "@/components/elements/suggested-pages"
import { PageHeader } from "@/components/layout/page-header"
import { TransitionLink } from "@/components/transition-link"
import { siteConfig } from "@/lib/config"
import { createOgMetadata } from "@/lib/metadata"

import { refundPolicyContent } from "./content"

export const metadata = createOgMetadata({
  title: refundPolicyContent.title,
  description: refundPolicyContent.description,
})

const onThisPageItems = refundPolicyContent.policySections.map((section) => ({
  id: section.id,
  text: section.title.replace(/^\d+\.\s/, ""),
  level: 2 as const,
}))

export default function RefundPolicyPage() {
  return (
    <div className="scroll-mt-24 bg-background">
      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <PageHeader label="Legal document" title="Refund Policy" />

      {/* ─── Meta bar ────────────────────────────────────────────────────── */}
      <div className="border-b border-border/60 bg-muted/40">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4 py-3">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDaysIcon className="size-3.5 text-primary/70" />
                Updated {refundPolicyContent.lastUpdated}
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
                Contact support
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
            {refundPolicyContent.summaryItems.map((item, i) => {
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
            <p className="pb-10 text-base leading-8 text-muted-foreground">
              {refundPolicyContent.intro}
            </p>
          </div>

          {/* Policy sections */}
          {refundPolicyContent.policySections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 border-t border-border/60 py-10"
            >
              <div className="flex gap-5">
                <div className="flex w-7 shrink-0 flex-col items-center">
                  <span className="font-mono text-xs font-semibold text-muted-foreground/35 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-3 block w-px flex-1 bg-border/40" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="block h-5 w-0.5 shrink-0 bg-primary/50" />
                    <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
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
                  <h2 className="text-base font-semibold tracking-tight sm:text-lg">
                    Refund Terms Summary
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
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {refundPolicyContent.definitions.map(
                        ([term, definition]) => (
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
                        )
                      )}
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
              For refund requests or questions, contact us at{" "}
              <TransitionLink
                href={"/contact-us"}
                className="underline underline-offset-2 transition-colors hover:text-muted-foreground"
              >
                {siteConfig.emails[0]}
              </TransitionLink>
              . Last reviewed {refundPolicyContent.lastUpdated}.
            </p>
          </div>
        </article>

        {/* Sticky sidebar */}
        <aside className={"hidden lg:block"}>
          <div className="sticky top-[calc(var(--header-height)+1.5rem)] self-start">
            <OnThisPage items={onThisPageItems} />
            <SuggestedPages pages={refundPolicyContent.suggestedPages} />
          </div>
        </aside>
      </div>
    </div>
  )
}
