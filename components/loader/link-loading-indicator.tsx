"use client"

import { cn } from "@/lib/utils"
import { useLinkStatus } from "next/link"

import React from "react"
import { TextShimmer } from "./text-shimmer"

export default function LinkLoadingIndicator({
  title,
  className,
  element,
}: {
  title?: string
  className?: string
  element?: React.ReactNode
}) {
  const { pending } = useLinkStatus()

  // Handle pending state with element
  if (pending) {
    return (
      <TextShimmer as="span" duration={1.2} className={cn("", className)}>
        {element ? (title ?? "...") : (title ?? "---")}
      </TextShimmer>
    )
  }

  // Non-pending state - return element if present, otherwise title
  return element ? element : <span className={className}>{title}</span>
}
