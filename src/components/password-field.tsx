"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
export function PasswordField({
  confirm = false,
  registration = false,
}: {
  confirm?: boolean;
  registration?: boolean;
}) {
  const [shown, setShown] = useState(false);
  return (
    <label className="field">
      <span>{confirm ? "Confirm Password" : "Password"}</span>
      <span className="password-wrap">
        <input
          name={confirm ? "confirmPassword" : "password"}
          type={shown ? "text" : "password"}
          placeholder={
            confirm ? "Confirm your password" : "Enter your password"
          }
          autoComplete={
            confirm || registration ? "new-password" : "current-password"
          }
          required
          minLength={8}
        />
        <button
          type="button"
          aria-label={shown ? "Hide password" : "Show password"}
          onClick={() => setShown(!shown)}
        >
          {shown ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </span>
    </label>
  );
}
