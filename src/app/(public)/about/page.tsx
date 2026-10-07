import type { Metadata } from "next";
import { MapPin, Target, Users, ShieldCheck, Award } from "lucide-react";
import {
  Art,
  Button,
  HeroSection,
  Callout,
  SectionHeading,
} from "@/components/ui";
export const metadata: Metadata = { title: "About Us" };
export default function About() {
  return (
    <>
      <HeroSection
        light
        title="About Us"
        description="Empowering students and teachers through better learning."
        art="about-hero"
      />
      <div className="container about-content">
        <section className="story-grid">
          <div>
            <h2>Our Story</h2>
            <p>
              GuruLink was created with a simple idea — to make quality
              education accessible to everyone. We believe that every student
              has potential, and every teacher has the power to make a
              difference.
            </p>
            <Button href="/students" variant="purple">
              Learn More
            </Button>
          </div>
          <Art
            name="about-books"
            alt="A graduation cap on a colorful stack of books"
          />
        </section>
        <section className="mission-grid" aria-label="Our purpose">
          <article>
            <span className="purpose-icon">
              <MapPin />
            </span>
            <h3>Our Mission</h3>
            <p>
              To connect students with great teachers and provide the tools they
              need to succeed in their academic journey.
            </p>
          </article>
          <article>
            <span className="purpose-icon">
              <Target />
            </span>
            <h3>Our Vision</h3>
            <p>
              To build a global learning community where education is
              accessible, interactive and inspiring for all.
            </p>
          </article>
        </section>
        <section className="benefits">
          <SectionHeading>Why GuruLink?</SectionHeading>
          <div className="benefit-grid">
            {[
              {
                icon: Users,
                title: "Trusted Teachers",
                text: "Verified and experienced educators",
                tone: "purple",
              },
              {
                icon: ShieldCheck,
                title: "Quality Content",
                text: "Carefully curated learning resources",
                tone: "coral",
              },
              {
                icon: Award,
                title: "Better Results",
                text: "Track progress and achieve goals",
                tone: "blue",
              },
            ].map(({ icon: Icon, ...b }) => (
              <article key={b.title}>
                <span className={`icon-bubble tone-${b.tone}`}>
                  <Icon size={23} />
                </span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <Callout
          title="Together for a Brighter Future"
          text="We're committed to creating a learning platform that helps students and teachers grow, achieve and succeed — together."
          art="about-cta"
          reverse
        />
      </div>
    </>
  );
}
