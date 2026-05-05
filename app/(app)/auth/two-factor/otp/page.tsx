import Link from "next/link"

import LinkLoadingIndicator from "@/components/loader/link-loading-indicator"
import {
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { TwoFactorOtpForm } from "@/feature/auth/components/two-factor-otp-form"
import { createOgMetadata } from "@/lib/metadata"

const title = "Email OTP verification"
const description = "Verify the code sent to your email"

export const metadata = createOgMetadata({ title, description })

export default async function page(props: PageProps<"/auth/two-factor/otp">) {
  const { callback } = await props.searchParams

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-xl font-bold">Email OTP verification</h1>
        <FieldDescription>
          Enter the 6-digit code we sent to your email.
        </FieldDescription>
      </div>

      <FieldContent className="flex-row items-center justify-between">
        <FieldLabel>Verification</FieldLabel>
        <FieldDescription>
          <Link href="/auth/two-factor">
            <LinkLoadingIndicator title="Use authenticator" />
          </Link>
        </FieldDescription>
      </FieldContent>

      <TwoFactorOtpForm
        callback={typeof callback === "string" ? callback : ""}
      />

      <FieldDescription className="">
        Having trouble?{" "}
        <Link href="/auth/login">
          <LinkLoadingIndicator title="Back to login" />
        </Link>
      </FieldDescription>
    </div>
  )
}
