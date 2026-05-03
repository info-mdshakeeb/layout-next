import { LoginForm } from "@/feature/auth/components/login-form"
import type { Metadata } from "next"

type PageProps = {
  searchParams: Promise<{
    redirect?: string
  }>
}

export const metadata: Metadata = {
  title: "Login",
  description:
    "Sign in to manage bookings, travelers, invoices, and support requests.",
}

export default async function LoginPage({ searchParams }: PageProps) {
  const params = await searchParams
  return <LoginForm redirectTo={params.redirect} />
}
