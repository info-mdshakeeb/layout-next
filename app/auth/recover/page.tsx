"use client"

import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import LinkLoadingIndicator from "@/components/loader/link-loading-indicator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { FieldDescription } from "@/components/ui/field"
import { ForgetPasswordForm } from "@/feature/auth/components/forget-password-form"

export default function Page() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-xl font-bold">
          {isSubmitted ? "Check your email" : "Forgot your password?"}
        </h1>
        <FieldDescription>
          {isSubmitted
            ? "We've sent a password reset link to your email."
            : "Enter your email to reset your password."}
        </FieldDescription>
      </div>

      {isSubmitted ? (
        <div className="grid gap-4">
          <Alert variant="default">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription>
              If you don&apos;t see the email, check your spam folder.
            </AlertDescription>
          </Alert>
          <Button variant="link" className="gap-2" asChild>
            <Link href="/auth/login">
              <ArrowLeft size={15} />
              Back to sign in
            </Link>
          </Button>
        </div>
      ) : (
        <>
          <ForgetPasswordForm
            onSuccess={() => setIsSubmitted(true)}
            redirectTo="/auth/reset-password"
          />
          <FieldDescription className="">
            Remembered your password?{" "}
            <Link href="/auth/login">
              <LinkLoadingIndicator title="Log in" />
            </Link>
          </FieldDescription>
        </>
      )}
    </div>
  )
}
