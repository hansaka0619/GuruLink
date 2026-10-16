"use client";
import Link from "next/link";
import { useState } from "react";
import { Field } from "./ui";
import { PasswordField } from "./password-field";
export function LoginForm() {
  const [message, setMessage] = useState("");
  return (
    <section className="auth-card login-card">
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setMessage(
            "This is a frontend preview. Sign-in will be available when account services launch.",
          );
        }}
      >
        <Field
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <PasswordField />
        <div className="login-options">
          <label className="checkbox-label">
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <button
            type="button"
            className="text-button"
            onClick={() =>
              setMessage(
                "Password recovery will be available when account services launch. Contact support if you need help.",
              )
            }
          >
            Forgot password?
          </button>
        </div>
        <button type="submit" className="button button-orange full-width">
          Login
        </button>
      </form>
      <div className="divider">
        <span>or</span>
      </div>
      <button
        type="button"
        className="google-button"
        onClick={() =>
          setMessage(
            "Google sign-in will be available when account services launch.",
          )
        }
      >
        <span className="google-g" aria-hidden="true">
          G
        </span>
        Continue with Google
      </button>
      {message && (
        <p className="form-status" role="status">
          {message}
        </p>
      )}
      <p className="auth-switch">
        Don&apos;t have an account? <Link href="/register">Register</Link>
      </p>
    </section>
  );
}
