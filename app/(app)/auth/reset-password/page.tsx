import Link from "next/link"

import LinkLoadingIndicator from "@/components/loader/link-loading-indicator"
import { FieldDescription } from "@/components/ui/field"

import { ResetPasswordForm } from "@/feature/auth/components/reset-password-form"
import { redirect } from "next/navigation"

export default async function Page(props: PageProps<"/auth/reset-password">) {
  const { token } = await props.searchParams

  if (token === undefined || typeof token !== "string") {
    redirect("/auth/recover")
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-xl font-bold">Reset your password</h1>
        <FieldDescription>
          Enter a new password and confirm it to reset your password
        </FieldDescription>
      </div>

      <ResetPasswordForm token={token} />
      <FieldDescription className="">
        Remembered your password?{" "}
        <Link href="/auth/login">
          <LinkLoadingIndicator title="Log in" />
        </Link>
      </FieldDescription>
    </div>
  )
}
