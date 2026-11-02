"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navigation, routes } from "@/lib/routes";
import { profile } from "@/data/profile";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"paper" | "ink">("paper");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "ink") {
      document.documentElement.dataset.theme = "ink";
      setTheme("ink");
    }
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key === "Escape") menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  const toggleTheme = () => {
    const nextTheme = theme === "paper" ? "ink" : "paper";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", nextTheme === "ink" ? "#171717" : "#F3F1EB");
    setTheme(nextTheme);
  };

  return (
    <header className="site-header">
      <Link className="brand" href={routes.home} aria-label={`${profile.name}, home`} onClick={() => setMenuOpen(false)}>
        <span className="brand-mark" aria-hidden="true">{profile.initials[0]}<span>/</span>{profile.initials.slice(1)}</span>
        <span className="brand-name">{profile.name}</span>
      </Link>

      <div className="header-meta" aria-label="Professional title and location">
        <span>{profile.role}</span>
        <span className="meta-divider" aria-hidden="true">/</span>
        <span>{profile.location}</span>
      </div>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
            {item.label}
            {item.label === "Contact" && <ArrowUpRight size={13} strokeWidth={1.7} aria-hidden="true" />}
          </Link>
        ))}
      </nav>

      <div className="header-controls">
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "paper" ? "dark" : "light"} theme`}>
          {theme === "paper" ? <Moon size={16} strokeWidth={1.6} /> : <Sun size={16} strokeWidth={1.6} />}
          <span className="theme-toggle-label">{theme === "paper" ? "Ink" : "Paper"}</span>
        </button>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} strokeWidth={1.7} /> : <Menu size={19} strokeWidth={1.7} />}
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {navigation.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            <span className="mono-label">0{index + 1}</span>
            <span>{item.label}</span>
            {item.label === "Contact" && <ArrowUpRight size={16} strokeWidth={1.7} aria-hidden="true" />}
          </Link>
        ))}
      </nav>
    </header>
  );
}
