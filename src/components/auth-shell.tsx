import { Logo } from "./header";
import { Footer } from "./footer";
import { Art } from "./ui";
export function AuthShell({
  title,
  text,
  art,
  children,
  register = false,
}: {
  title: string;
  text: string;
  art: string;
  children: React.ReactNode;
  register?: boolean;
}) {
  return (
    <div className={`auth-page ${register ? "auth-register" : "auth-login"}`}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="container auth-header">
        <Logo />
      </header>
      <main id="main" className="container auth-grid">
        <section className="auth-intro">
          <h1>{title}</h1>
          <p>{text}</p>
          <Art
            name={art}
            alt={
              register
                ? "Two students carrying books and backpacks"
                : "Student learning on a laptop while sitting on books"
            }
            priority
          />
        </section>
        {children}
      </main>
      <Footer compact />
    </div>
  );
}
