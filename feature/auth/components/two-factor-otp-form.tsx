"use client"

import * as React from "react"
import { toast } from "sonner"

import { ShimmerButton } from "@/components/loader/loader-button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

export function TwoFactorOtpForm({ callback }: { callback?: string }) {
  const [otpCode, setOtpCode] = React.useState("")
  const [otpSent, setOtpSent] = React.useState(false)
  const [trustDevice, setTrustDevice] = React.useState(false)
  const [isPending, startTransition] = React.useTransition()

  async function sendEmailOtp() {
    startTransition(async () => {})
  }

  async function verifyEmailOtp() {
    const code = otpCode.trim()
    if (code.length !== 6) {
      toast.error("Enter the 6-digit code")
      return
    }
    startTransition(async () => {})
  }

  return (
    <FieldGroup>
      {otpSent ? (
        <>
          <Field className="mt-3">
            <InputOTP
              maxLength={6}
              value={otpCode}
              onChange={setOtpCode}
              disabled={isPending}
            >
              <InputOTPGroup className="">
                {Array.from({ length: 6 }).map((_, i) => (
                  <InputOTPSlot key={i} index={i} className="size-11" />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </Field>

          <Field orientation={"horizontal"}>
            <ShimmerButton
              type="button"
              onClick={sendEmailOtp}
              text={"Resend"}
              loading={isPending}
            />
            <ShimmerButton
              className="flex-1"
              type="button"
              onClick={verifyEmailOtp}
              text="Verify"
              loading={isPending}
            />
          </Field>
        </>
      ) : (
        <Field>
          <div className="mt-3 rounded-lg border bg-muted/20 p-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="trust-device-totp"
                  checked={trustDevice}
                  onCheckedChange={(v) => setTrustDevice(v === true)}
                  disabled={isPending}
                />
                <Label htmlFor="trust-device-totp">Trust this device</Label>
              </div>

              <ShimmerButton
                type="button"
                onClick={sendEmailOtp}
                text={"Send code"}
                loading={isPending}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {otpSent
                ? "Code sent. Check your inbox and spam folder."
                : "Send the code to unlock the verification input."}
            </p>
          </div>
        </Field>
      )}
    </FieldGroup>
  )
}
