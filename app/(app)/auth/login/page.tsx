import Link from "next/link"

import LinkLoadingIndicator from "@/components/loader/link-loading-indicator"
import { FieldDescription } from "@/components/ui/field"
import { LoginForm } from "@/feature/auth/components/login-form"
import { createOgMetadata } from "@/lib/metadata"

const title = "Login"
const description = "Login to your account"

export const metadata = createOgMetadata({ title, description })

export default async function page(props: PageProps<"/auth/login">) {
  const { callback } = await props.searchParams
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-xl font-bold">Welcome Back</h1>
        <FieldDescription>
          Don&apos;t have an account?{" "}
          <Link href="/auth/register">
            <LinkLoadingIndicator title="Register" />
          </Link>
        </FieldDescription>
      </div>

      {/* //! FORM */}
      <LoginForm callback={callback} />

      <FieldDescription className="">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
