import { Geist_Mono, Inter } from "next/font/google"
import { cn } from "./utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
export const fontVariables = cn(
  inter.variable,
  fontMono.variable,

)
