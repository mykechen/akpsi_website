"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "About Us" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/careers", label: "Careers" },
  { href: "/members", label: "Members" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages with dark hero backgrounds need light nav text initially
  const hasDarkHero =
    pathname === "/careers" ||
    pathname === "/recruitment" ||
    pathname === "/members";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-secondary/5 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`
            font-display text-xl font-bold tracking-wide
            transition-colors duration-200
            ${
              isScrolled || !hasDarkHero
                ? "text-secondary-light hover:text-accent"
                : "text-white hover:text-white/80"
            }
          `}
        >
          ALPHA ZETA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  group relative text-sm font-medium tracking-wide uppercase
                  transition-colors duration-200
                  ${
                    isScrolled || !hasDarkHero
                      ? isActive
                        ? "text-accent"
                        : "text-secondary-dark hover:text-secondary-light"
                      : isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  }
                `}
              >
                {link.label}
                {/* Underline indicator - shows on active or hover */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-0.5 rounded-full
                    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isScrolled || !hasDarkHero ? "bg-accent" : "bg-white"}
                    ${isActive ? "right-0" : "right-full group-hover:right-0"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* Apply Button */}
        <Link
          href="https://tally.so/r/GxR5Rk"
          className={`
            hidden md:inline-flex items-center justify-center px-5 py-2
            font-medium text-sm rounded-full
            transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              isScrolled || !hasDarkHero
                ? "bg-accent text-white hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)]"
                : "bg-white text-secondary-light hover:bg-white/90 hover:-translate-y-0.5"
            }
          `}
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`
              w-6 h-0.5 rounded-full transition-all duration-300
              ${isScrolled || !hasDarkHero ? "bg-secondary-light" : "bg-white"}
              ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}
            `}
          />
          <span
            className={`
              w-6 h-0.5 rounded-full transition-all duration-300
              ${isScrolled || !hasDarkHero ? "bg-secondary-light" : "bg-white"}
              ${isMobileMenuOpen ? "opacity-0" : ""}
            `}
          />
          <span
            className={`
              w-6 h-0.5 rounded-full transition-all duration-300
              ${isScrolled || !hasDarkHero ? "bg-secondary-light" : "bg-white"}
              ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}
            `}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden absolute top-20 left-0 right-0
          bg-white/98 backdrop-blur-md border-b border-secondary/5 shadow-lg
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  text-lg font-medium py-3 px-4 rounded-xl
                  transition-colors duration-200
                  ${
                    isActive
                      ? "text-accent bg-accent/5"
                      : "text-secondary-dark hover:text-secondary-light hover:bg-secondary/5"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/recruitment"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-dark transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}
