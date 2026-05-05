import { createOgMetadata } from "@/lib/metadata"
import { RecoverPasswordContent } from "./recover-password-content"

const title = "Recover password"
const description = "Request a password reset link for your account"

export const metadata = createOgMetadata({ title, description })

export default function Page() {
  return <RecoverPasswordContent />
}
