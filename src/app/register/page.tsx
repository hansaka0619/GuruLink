import type { Metadata } from "next";
import { AuthShell } from "@/components/auth-shell";
import { RegisterForm } from "@/components/register-form";
export const metadata: Metadata = { title: "Register" };
export default function Register() {
  return (
    <AuthShell
      register
      title="Join GuruLink"
      text="Create your account and start smarter learning."
      art="register-illustration"
    >
      <RegisterForm />
    </AuthShell>
  );
}
