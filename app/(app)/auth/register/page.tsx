import Link from "next/link"

import LinkLoadingIndicator from "@/components/loader/link-loading-indicator"
import { FieldDescription } from "@/components/ui/field"
import { RegisterForm } from "@/feature/auth/components/register-form"
import { createOgMetadata } from "@/lib/metadata"

const title = "Register"
const description = "Create a new account"

export const metadata = createOgMetadata({ title, description })

export default async function page() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-xl font-bold">Create your account</h1>
        <FieldDescription>
          Already have an account?{" "}
          <Link href="/auth/login">
            <LinkLoadingIndicator title="Login" />
          </Link>
        </FieldDescription>
      </div>

      {/* //! FORM */}
      <RegisterForm />

      <FieldDescription className="">
        By creating an account, you agree to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  )
}
