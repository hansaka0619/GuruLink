import type { Metadata } from "next";
import { AuthShell } from "@/components/auth-shell";
import { LoginForm } from "@/components/login-form";
export const metadata: Metadata = { title: "Login" };
export default function Login() {
  return (
    <AuthShell
      title="Welcome Back!"
      text="Log in to continue your learning journey."
      art="login-illustration"
    >
      <LoginForm />
    </AuthShell>
  );
}
