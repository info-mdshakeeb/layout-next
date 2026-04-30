"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import type { ComponentProps, MouseEvent } from "react"

type TransitionLinkProps = ComponentProps<typeof Link>

/**
 * Drop-in replacement for `next/link` that wraps page navigation in the
 * same circular-reveal View Transition used by the theme toggle.
 *
 * Usage:
 *   <TransitionLink href="/about">About</TransitionLink>
 */
export function TransitionLink({
  href,
  onClick,
  children,
  ...props
}: TransitionLinkProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Let the user's own onClick run first
    onClick?.(e)

    // Only intercept left-clicks without modifier keys (same logic as Next.js)
    const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
    const isExternal =
      typeof href === "string" &&
      (href.startsWith("http") || href.startsWith("//"))

    if (e.defaultPrevented || isModified || isExternal) return

    e.preventDefault()

    const root = document.documentElement
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const target = typeof href === "string" ? href : href.pathname ?? "/"
    const targetPath = typeof href === "string" ? href.split('?')[0].split('#')[0] : (href.pathname ?? "/")
    const isSamePage = targetPath === "" || targetPath === pathname

    if (!document.startViewTransition || prefersReducedMotion || isSamePage) {
      router.push(target)
      return
    }

    // Pin the click origin for the circular reveal
    root.style.setProperty("--x", `${e.clientX}px`)
    root.style.setProperty("--y", `${e.clientY}px`)
    root.classList.add("page-animating")

    document
      .startViewTransition(() => {
        router.push(target)
      })
      .finished.finally(() => {
        root.classList.remove("page-animating")
        root.style.removeProperty("--x")
        root.style.removeProperty("--y")
      })
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
