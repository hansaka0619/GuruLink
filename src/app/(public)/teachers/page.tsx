import type { Metadata } from "next";
import { HeroSection } from "@/components/ui";
import { TeacherDirectory } from "@/components/teacher-directory";
export const metadata: Metadata = { title: "Teachers" };
export default function Teachers() {
  return (
    <>
      <HeroSection
        title="Find Your Perfect Teacher"
        description="Learn from qualified and experienced teachers across different subjects and grades."
        art="teachers-hero"
      />
      <TeacherDirectory />
    </>
  );
}
