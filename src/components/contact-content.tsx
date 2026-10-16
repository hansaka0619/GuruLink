"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Art, Field } from "./ui";
const faqs = [
  {
    q: "How do I register on GuruLink?",
    a: (
      <>
        Visit the <Link href="/register">registration page</Link>, choose
        Student or Teacher and complete the form. This Phase 1 preview
        demonstrates registration without creating an account.
      </>
    ),
  },
  {
    q: "Can I change my registered email?",
    a: "Account settings will be available when account services launch. For questions, please contact our support team.",
  },
  {
    q: "How do I contact a teacher?",
    a: (
      <>
        Browse the <Link href="/teachers">teachers directory</Link> and open a
        teacher&apos;s profile. Direct messaging will be available in a later
        phase.
      </>
    ),
  },
  {
    q: "Is GuruLink free to use?",
    a: "You can explore GuruLink and browse teacher profiles for free. Course details and pricing will be shared when enrollment becomes available.",
  },
];
export function ContactContent() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container contact-content">
      <div className="contact-grid">
        <section className="contact-information panel">
          <h2>Contact Information</h2>
          <div className="contact-line">
            <span className="icon-bubble tone-coral">
              <Mail size={21} />
            </span>
            <div>
              <h3>Email</h3>
              <a href="mailto:support@gurulink.com">support@gurulink.com</a>
            </div>
          </div>
          <div className="contact-line">
            <span className="icon-bubble tone-purple">
              <Phone size={21} />
            </span>
            <div>
              <h3>Phone</h3>
              <a href="tel:+94771134567">+94 77 113 4567</a>
            </div>
          </div>
          <div className="contact-line">
            <span className="icon-bubble tone-violet">
              <MapPin size={21} />
            </span>
            <div>
              <h3>Location</h3>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
          <div className="map-visual">
            <Art
              name="contact-map"
              alt="Illustrated map with a location pin in Colombo, Sri Lanka"
            />
            <span>Colombo, Sri Lanka</span>
          </div>
        </section>
        <div className="contact-right">
          <section className="panel message-panel">
            <h2>Send Us a Message</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="form-grid">
                <Field
                  label="Full Name"
                  name="fullName"
                  placeholder="Your name"
                  autoComplete="name"
                />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <Field label="Subject" name="subject">
                <select name="subject" required defaultValue="">
                  <option value="" disabled>
                    Select subject
                  </option>
                  <option>General inquiry</option>
                  <option>Student support</option>
                  <option>Teacher support</option>
                  <option>Feedback</option>
                </select>
              </Field>
              <Field label="Message" name="message">
                <textarea
                  name="message"
                  placeholder="Type your message..."
                  required
                  rows={4}
                />
              </Field>
              <button className="button button-orange" type="submit">
                Send Message
              </button>
              {sent && (
                <p role="status" className="form-status">
                  Your message is ready. This frontend preview does not send
                  messages.
                </p>
              )}
            </form>
          </section>
          <section className="faq-panel" id="faq">
            <div>
              <h2>Frequently Asked Questions</h2>
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <Art name="about-books" alt="Books, graduation cap and a plant" />
          </section>
        </div>
      </div>
      <details className="policy-notice" id="privacy">
        <summary>Privacy Policy</summary>
        <p>
          This is a frontend preview. Forms do not transmit or store your
          information. The full privacy policy will be published before the
          service launches.
        </p>
      </details>
      <details className="policy-notice" id="terms">
        <summary>Terms &amp; Conditions</summary>
        <p>
          This preview is for exploring GuruLink. No accounts are created or
          courses purchased. Full terms will be published before the service
          launches.
        </p>
      </details>
    </div>
  );
}
