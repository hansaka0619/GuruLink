import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Logo } from "./header";
import { navigation } from "@/lib/data";
export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={`site-footer ${compact ? "footer-compact" : ""}`}>
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="tagline">Learn. Connect. Grow.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <nav aria-label="Footer navigation">
            {navigation.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3>Support</h3>
          <nav aria-label="Support">
            <Link href="/contact#faq">Help Center</Link>
            <Link href="/contact#privacy">Privacy Policy</Link>
            <Link href="/contact#terms">Terms &amp; Conditions</Link>
          </nav>
        </div>
        <div className="socials" aria-label="Social media placeholders">
          {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
            <span
              key={i}
              title={["Facebook", "Instagram", "YouTube", "LinkedIn"][i]}
            >
              <Icon size={16} />
            </span>
          ))}
        </div>
      </div>
      <div className="container copyright">
        &copy; {new Date().getFullYear()} GuruLink. All rights reserved.
      </div>
    </footer>
  );
}
