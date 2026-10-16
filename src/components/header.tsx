"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { navigation } from "@/lib/data";
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="GuruLink home">
      <span className="logo-mark">
        <GraduationCap size={21} />
      </span>
      <span>GuruLink</span>
    </Link>
  );
}
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={`main-nav ${open ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <div className="header-actions">
            <Link
              href="/login"
              className="button button-soft"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="button button-orange"
              onClick={() => setOpen(false)}
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
