import { Metadata } from "next"
import Link from "next/link"

import LinkLoadingIndicator from "@/components/loader/link-loading-indicator"
import {
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { TwoFactorOtpForm } from "@/feature/auth/components/two-factor-otp-form"

export const metadata: Metadata = {
  title: "Email OTP verification",
  description: "Verify the code sent to your email",
}

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
            <LinkLoadingIndicator title="Use authenticator" as="span" />
          </Link>
        </FieldDescription>
      </FieldContent>

      <TwoFactorOtpForm
        callback={typeof callback === "string" ? callback : ""}
      />

      <FieldDescription className="">
        Having trouble?{" "}
        <Link href="/auth/login">
          <LinkLoadingIndicator title="Back to login" as="span" />
        </Link>
      </FieldDescription>
    </div>
  )
}
