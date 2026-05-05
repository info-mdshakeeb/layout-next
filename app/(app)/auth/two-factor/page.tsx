import { Metadata } from "next"
import Link from "next/link"

import LinkLoadingIndicator from "@/components/loader/link-loading-indicator"
import { FieldDescription } from "@/components/ui/field"
import { TwoFactorForm } from "@/feature/auth/components/two-factor-form"

export const metadata: Metadata = {
  title: "Two-factor verification",
  description: "Verify your two-factor authentication code",
}

export default async function page(props: PageProps<"/auth/two-factor">) {
  const { callback } = await props.searchParams

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-xl font-bold">Two-factor verification</h1>
        <FieldDescription>
          Multiple ways to verify your identity for added security.
        </FieldDescription>
      </div>

      <TwoFactorForm callback={typeof callback === "string" ? callback : ""} />

      <FieldDescription className="">
        Having trouble?{" "}
        <Link href="/auth/login">
          <LinkLoadingIndicator title="Back to login" />
        </Link>
      </FieldDescription>
    </div>
  )
}
