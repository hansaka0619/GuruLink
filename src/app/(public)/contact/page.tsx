import type { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";
import { HeroSection } from "@/components/ui";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return (
    <>
      <div className="container contact-hero">
        <HeroSection
          title="Get in Touch"
          description="We're here to help! Reach out to us for any questions, feedback or support."
          art="contact-hero"
        />
      </div>
      <ContactContent />
    </>
  );
}
