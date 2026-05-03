"use client"

import { AlertTriangle, RefreshCcw } from "lucide-react"
import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

type ApiErrorStateProps = {
  error?: unknown
  title?: string
  fallbackMessage?: string
  action?: ReactNode
  onRetry?: () => void
  retryLabel?: string
  className?: string
}

export function ApiErrorState({
  error,
  title = "Unable to load data",
  fallbackMessage,
  action,
  onRetry,
  retryLabel = "Retry",
  className,
}: ApiErrorStateProps) {
  // const message = getApiErrorMessage(error, fallbackMessage);

  return (
    <Empty className={className}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <AlertTriangle className="text-destructive" />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>
          {fallbackMessage || "An error occurred while fetching data."}
        </EmptyDescription>
      </EmptyHeader>

      {onRetry || action ? (
        <EmptyContent>
          <div className="flex items-center gap-2">
            {onRetry ? (
              <Button type="button" variant="outline" onClick={onRetry}>
                <RefreshCcw className="size-4" />
                {retryLabel}
              </Button>
            ) : null}
            {action}
          </div>
        </EmptyContent>
      ) : null}
    </Empty>
  )
}
