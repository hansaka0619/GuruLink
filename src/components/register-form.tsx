"use client";
import Link from "next/link";
import { useState } from "react";
import { GraduationCap, Users, Upload } from "lucide-react";
import { grades, media, subjects } from "@/lib/data";
import { Field } from "./ui";
import { PasswordField } from "./password-field";
export function RegisterForm() {
  const [role, setRole] = useState<"Student" | "Teacher">("Student");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState("");
  return (
    <section className="auth-card register-card">
      <h2>How do you want to use GuruLink?</h2>
      <div className="role-options" role="group" aria-label="Account type">
        {(["Student", "Teacher"] as const).map((r) => (
          <button
            type="button"
            key={r}
            aria-pressed={role === r}
            className={role === r ? "selected" : ""}
            onClick={() => {
              setRole(r);
              setMessage("");
              setPhoto("");
            }}
          >
            {r === "Student" ? <GraduationCap /> : <Users />}
            {r}
          </button>
        ))}
      </div>
      <h3>{role} Registration</h3>
      <form
        key={role}
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          if (data.get("password") !== data.get("confirmPassword")) {
            setMessage("Your passwords do not match. Please try again.");
            return;
          }
          if (!data.getAll("subjects").length) {
            setMessage("Please select at least one subject.");
            return;
          }
          if (role === "Teacher" && !data.getAll("gradesTaught").length) {
            setMessage("Please select at least one grade you teach.");
            return;
          }
          setMessage(
            `Your ${role.toLowerCase()} details are ready. This frontend preview does not create accounts or upload photos.`,
          );
        }}
      >
        <Field
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          autoComplete="name"
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <div className="form-grid">
          <PasswordField registration />
          <PasswordField confirm />
        </div>
        <div className="form-grid">
          {role === "Student" && (
            <Field label="Grade" name="grade">
              <select name="grade" required defaultValue="">
                <option value="" disabled>
                  Select grade
                </option>
                {grades.map((g) => (
                  <option key={g}>Grade {g}</option>
                ))}
              </select>
            </Field>
          )}
          <Field label="Medium" name="medium">
            <select name="medium" required defaultValue="">
              <option value="" disabled>
                Select medium
              </option>
              {media.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </Field>
          {role === "Teacher" && (
            <Field
              label="Teaching Experience"
              name="experience"
              type="number"
              placeholder="Years of experience"
            >
              <input
                type="number"
                name="experience"
                min={0}
                max={60}
                placeholder="Years of experience"
                required
              />
            </Field>
          )}
        </div>
        <fieldset className="choices">
          <legend>Subjects</legend>
          <p>
            Select the subjects you{" "}
            {role === "Teacher" ? "teach" : "want to study"}.
          </p>
          <div>
            {subjects.map((s) => (
              <label key={s}>
                <input type="checkbox" name="subjects" value={s} />
                {s}
              </label>
            ))}
          </div>
        </fieldset>
        {role === "Teacher" && (
          <>
            <fieldset className="choices">
              <legend>Grades taught</legend>
              <div>
                {grades.map((g) => (
                  <label key={g}>
                    <input type="checkbox" name="gradesTaught" value={g} />
                    Grade {g}
                  </label>
                ))}
              </div>
            </fieldset>
            <Field
              label="Qualifications"
              name="qualifications"
              placeholder="Enter your qualifications"
            />
          </>
        )}
        <label className="field photo-field">
          <span>
            Profile Photo <span className="optional">(optional)</span>
          </span>
          <span className="upload-control">
            <Upload size={16} />
            <span>{photo || "Choose a photo"}</span>
            <input
              type="file"
              name="photo"
              accept="image/png,image/jpeg,image/webp"
              onChange={(e) => setPhoto(e.target.files?.[0]?.name ?? "")}
            />
          </span>
        </label>
        <label className="checkbox-label terms-label">
          <input type="checkbox" name="terms" required />
          <span>
            I agree to the{" "}
            <Link href="/contact#terms">Terms &amp; Conditions</Link> and{" "}
            <Link href="/contact#privacy">Privacy Policy</Link>.
          </span>
        </label>
        <button type="submit" className="button button-orange full-width">
          Register
        </button>
        {message && (
          <p className="form-status" role="status">
            {message}
          </p>
        )}
      </form>
      <p className="auth-switch">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </section>
  );
}
