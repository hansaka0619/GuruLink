import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
export function Button({
  children,
  href,
  variant = "orange",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "orange" | "purple" | "outline";
  className?: string;
}) {
  return (
    <Link href={href} className={`button button-${variant} ${className}`}>
      {children}
    </Link>
  );
}
export function Art({
  name,
  alt,
  className = "",
  priority = false,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`/images/illustrations/${name}.png`}
      width={780}
      height={500}
      alt={alt}
      className={`illustration ${className}`}
      preload={priority}
      sizes="(max-width: 560px) 100vw, 50vw"
    />
  );
}
export function SectionHeading({
  children,
  link,
}: {
  children: React.ReactNode;
  link?: boolean;
}) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
      {link && (
        <Link href="/teachers">
          View All <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </div>
  );
}
export function FeatureCard({
  icon: Icon,
  title,
  text,
  tone = "purple",
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  tone?: string;
}) {
  return (
    <article className="feature-card">
      <span className={`icon-bubble tone-${tone}`}>
        <Icon size={25} strokeWidth={2.3} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
export function HeroSection({
  title,
  description,
  art,
  light = false,
}: {
  title: string;
  description: string;
  art: string;
  light?: boolean;
}) {
  return (
    <section className={`page-hero ${light ? "hero-light" : "hero-purple"}`}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <Art
          name={art}
          alt={`Educational illustration for ${title}`}
          priority
        />
      </div>
    </section>
  );
}
export function Callout({
  title,
  text,
  art,
  button = "Join GuruLink",
  reverse = false,
}: {
  title: string;
  text: string;
  art: string;
  button?: string;
  reverse?: boolean;
}) {
  return (
    <section className={`callout ${reverse ? "callout-reverse" : ""}`}>
      <Art name={art} alt="Student learning with books and a laptop" />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button href="/register" variant={reverse ? "purple" : "orange"}>
          {button}
        </Button>
      </div>
    </section>
  );
}
export function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  children,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
  autoComplete?: string;
  minLength?: number;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      {children ?? (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          {...rest}
        />
      )}
    </label>
  );
}
