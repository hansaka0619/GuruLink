import { Button } from "@/components/ui";
export default function NotFound() {
  return (
    <main className="container empty-state">
      <h1>Page not found</h1>
      <p>Let&apos;s get you back to your learning journey.</p>
      <Button href="/">Back to Home</Button>
    </main>
  );
}
