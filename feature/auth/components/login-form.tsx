"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CircleUserRound } from "lucide-react"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"

import LinkLoadingIndicator from "@/components/loader/link-loading-indicator"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

import { PasswordInput } from "@/components/forms/password-input"

import { z } from "zod"
import { AuthCardShell } from "./auth-card-shell"

export const loginSchema = z.object({
  user_or_email: z
    .string()
    .min(3, "Email or username is required")
    .max(120, "Email or username is too long"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(128, "Password is too long"),
})

type LoginFormProps = {
  redirectTo?: string
}

export function LoginForm({ redirectTo }: LoginFormProps) {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      user_or_email: "",
      password: "",
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    try {
    } catch (error) {}
  })

  return (
    <AuthCardShell
      showTermsNotice
      title="Login to your account"
      footerText="Don't have an account?"
      footerLinkLabel="Create account"
      footerLinkHref={"/auth/register"}
    >
      <form className="space-y-5" onSubmit={onSubmit}>
        <Controller
          control={form.control}
          name="user_or_email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="user_or_email">Email or Username</FieldLabel>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>
                    <CircleUserRound className="size-4" aria-hidden="true" />
                  </InputGroupText>
                </InputGroupAddon>
                <InputGroupInput
                  id="user_or_email"
                  placeholder="john@example.com"
                  autoComplete="username"
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
              </InputGroup>
              {fieldState.error ? (
                <FieldError errors={[fieldState.error]} />
              ) : (
                <FieldDescription>
                  Use the email or username linked to your account.
                </FieldDescription>
              )}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Link
                  href={"/auth/forgot-password"}
                  className="text-sm font-medium text-primary"
                >
                  <LinkLoadingIndicator title="Forgot password?" />
                </Link>
              </div>
              <PasswordInput
                id="password"
                placeholder="********"
                autoComplete="current-password"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="mt-2 w-full"
          disabled={form.formState.isSubmitting}
        >
          Login
        </Button>
      </form>
    </AuthCardShell>
  )
}
