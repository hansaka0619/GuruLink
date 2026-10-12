import { Users, BookCopy, Presentation, ShieldCheck } from "lucide-react";
import {
  Art,
  Button,
  SectionHeading,
  FeatureCard,
  Callout,
} from "@/components/ui";
import { TeacherCard } from "@/components/teacher-card";
import { teachers } from "@/lib/data";
export default function Home() {
  return (
    <>
      <section className="home-hero hero-purple">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              Learn. Connect.
              <br />
              <span>Grow.</span>
            </h1>
            <p>
              Connect with experienced teachers, access learning materials,
              complete quizzes and assignments, and track your progress — all in
              one place.
            </p>
            <div className="hero-buttons">
              <Button href="/teachers">Find a Teacher</Button>
              <Button href="/register" variant="outline">
                Join GuruLink
              </Button>
            </div>
          </div>
          <Art
            name="home-hero"
            alt="Teacher helping two students learn with a laptop and books"
            priority
          />
        </div>
      </section>
      <div className="container home-content">
        <section
          className="feature-grid four"
          aria-label="Why learn with GuruLink"
        >
          <FeatureCard
            icon={Users}
            title="Expert Teachers"
            text="Learn from qualified and experienced teachers."
          />
          <FeatureCard
            icon={BookCopy}
            title="Quality Resources"
            text="Access study materials, notes and past papers."
          />
          <FeatureCard
            icon={Presentation}
            title="Interactive Learning"
            text="Take quizzes and track your progress."
            tone="violet"
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Flexible Learning"
            text="Learn at your own pace, anytime, anywhere."
            tone="orange"
          />
        </section>
        <section className="featured-section">
          <SectionHeading link>Featured Teachers</SectionHeading>
          <div className="teacher-grid home-teachers">
            {teachers.slice(0, 4).map((t) => (
              <TeacherCard key={t.id} teacher={t} compact />
            ))}
          </div>
        </section>
        <Callout
          title="Your Learning Journey Starts Here"
          text="Join thousands of students who are already learning and growing with GuruLink."
          art="home-cta"
          button="Get Started"
          reverse
        />
      </div>
    </>
  );
}
