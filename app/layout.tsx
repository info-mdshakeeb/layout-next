import { cn } from "@/lib/utils"
import Provider from "@/providers"

import { fontVariables } from "@/lib/fonts"
import "@/styles/globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", fontVariables)}
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
