import { NuqsAdapter } from "nuqs/adapters/next/app"
import React from "react"

import { ThemeProvider } from "./theme-provider"

export default function Provider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <NuqsAdapter>{children}</NuqsAdapter>
    </ThemeProvider>
  )
}
