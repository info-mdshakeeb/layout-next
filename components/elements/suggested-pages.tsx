"use client"

import { ArrowRightIcon } from "lucide-react"

import { TransitionLink } from "@/components/transition-link"

export type SuggestedPageItem = {
  href: string
  title: string
  description?: string
}

type SuggestedPagesProps = {
  pages: SuggestedPageItem[]
}

export function SuggestedPages({ pages }: SuggestedPagesProps) {
  return (
    <section className="mt-8 border-t border-border/60 pt-6">
      <h2 className="text-sm font-medium text-foreground">Suggested Pages</h2>

      <ul className="mt-4 w-fit space-y-3">
        {pages.map((page) => (
          <li key={page.href}>
            <TransitionLink
              href={page.href}
              className="group block transition-colors hover:border-primary"
            >
              <span className="flex items-center justify-between gap-3 text-sm font-medium text-foreground">
                <span className="relative line-clamp-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 group-hover:after:scale-x-100">
                  {page.title}
                </span>
                <ArrowRightIcon className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </span>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
