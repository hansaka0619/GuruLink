import type { Metadata } from "next";
import {
  Users,
  GraduationCap,
  BookOpen,
  ClipboardPen,
  Files,
  ChartColumn,
} from "lucide-react";
import {
  HeroSection,
  SectionHeading,
  FeatureCard,
  Callout,
} from "@/components/ui";
export const metadata: Metadata = { title: "Students" };
export default function Students() {
  return (
    <>
      <HeroSection
        light
        title="Built for Your Learning Success"
        description="Get access to expert teachers, quality resources, and interactive tools that help you learn, practice and grow."
        art="students-hero"
      />
      <div className="container students-content">
        <section>
          <SectionHeading>How GuruLink Helps You</SectionHeading>
          <div className="feature-grid three">
            <FeatureCard
              icon={Users}
              title="Find Teachers"
              text="Discover the best teachers for your subjects and grade."
            />
            <FeatureCard
              icon={GraduationCap}
              title="Enroll in Courses"
              text="Join courses and start your learning journey."
              tone="teal"
            />
            <FeatureCard
              icon={BookOpen}
              title="Access Materials"
              text="Get notes, past papers and study resources."
              tone="cyan"
            />
            <FeatureCard
              icon={ClipboardPen}
              title="Take Quizzes"
              text="Practice and test your knowledge."
              tone="coral"
            />
            <FeatureCard
              icon={Files}
              title="Submit Assignments"
              text="Share your responses and get feedback."
              tone="green"
            />
            <FeatureCard
              icon={ChartColumn}
              title="View Marks"
              text="Track your performance and achievements."
              tone="violet"
            />
          </div>
        </section>
        <Callout
          title="Learn at Your Own Pace"
          text="Flexible. Accessible. Effective."
          art="students-cta"
          button="Join Now"
        />
      </div>
    </>
  );
}
