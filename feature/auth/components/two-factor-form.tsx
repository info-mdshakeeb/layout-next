"use client"

import LinkLoadingIndicator from "@/components/loader/link-loading-indicator"
import { ShimmerButton } from "@/components/loader/loader-button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import * as React from "react"
import { toast } from "sonner"

export function TwoFactorForm({ callback }: { callback?: string }) {
  const [totpCode, setTotpCode] = React.useState("")
  const [backupCode, setBackupCode] = React.useState("")
  const [trustDevice, setTrustDevice] = React.useState(false)
  const [isPending, startTransition] = React.useTransition()

  function verifyTotp() {
    if (totpCode.trim().length !== 6) {
      toast.error("Enter the 6-digit code")
      return
    }
    startTransition(async () => {})
  }

  function verifyBackupCode() {
    const code = backupCode.trim()
    if (!code) {
      toast.error("Enter a backup code")
      return
    }
    startTransition(async () => {})
  }

  return (
    <FieldGroup>
      <Field>
        <FieldContent className="flex-row items-center justify-between">
          <FieldLabel>Verification</FieldLabel>
          <FieldDescription>
            Prefer email?{" "}
            <Link
              href={
                callback
                  ? `/auth/two-factor/otp?callback=${encodeURIComponent(callback)}`
                  : "/auth/two-factor/otp"
              }
            >
              <LinkLoadingIndicator title="Use email OTP" />
            </Link>
          </FieldDescription>
        </FieldContent>
      </Field>

      <Tabs defaultValue="totp">
        <TabsList className="w-full">
          <TabsTrigger className="flex-1" value="totp">
            Authenticator
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="backup">
            Backup code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="totp">
          <Field className="mt-2">
            <FieldDescription className="">
              Enter the 6-digit code from your authenticator app.
            </FieldDescription>
            <InputOTP
              maxLength={6}
              value={totpCode}
              onChange={setTotpCode}
              disabled={isPending}
            >
              <InputOTPGroup className="w-full">
                {Array.from({ length: 6 }).map((_, i) => (
                  <InputOTPSlot key={i} index={i} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </Field>

          <Field className="mt-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="trust-device-totp"
                checked={trustDevice}
                onCheckedChange={(v) => setTrustDevice(v === true)}
                disabled={isPending}
              />
              <Label htmlFor="trust-device-totp">Trust this device</Label>
            </div>
          </Field>
          <Field className="mt-3 flex-row justify-end">
            <ShimmerButton
              type="button"
              onClick={verifyTotp}
              text="Verify"
              loading={isPending}
            />
          </Field>
        </TabsContent>

        <TabsContent value="backup" className="">
          <Field className="mt-2">
            <FieldLabel htmlFor="backup-code">Backup code</FieldLabel>
            <Input
              id="backup-code"
              value={backupCode}
              onChange={(e) => setBackupCode(e.target.value)}
              placeholder="Enter a backup code"
              disabled={isPending}
            />
          </Field>

          <Field className="mt-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="trust-device-backup"
                checked={trustDevice}
                onCheckedChange={(v) => setTrustDevice(v === true)}
                disabled={isPending}
              />
              <Label htmlFor="trust-device-backup">Trust this device</Label>
            </div>
          </Field>
          <Field className="mt-3 flex-row justify-end">
            <ShimmerButton
              type="button"
              onClick={verifyBackupCode}
              text="Verify"
              loading={isPending}
            />
          </Field>
        </TabsContent>
      </Tabs>
    </FieldGroup>
  )
}
