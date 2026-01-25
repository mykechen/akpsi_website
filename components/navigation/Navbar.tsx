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

  const showBackground = isScrolled || pathname === "/careers";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBackground
          ? "bg-primary/95 backdrop-blur-md border-b border-secondary/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-body text-2xl font-bold tracking-wide text-secondary-light hover:text-accent transition-colors"
        >
          ALPHA ZETA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-secondary/80 hover:text-secondary-light transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Apply Button */}
        <Link
          href="/recruitment"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white font-medium text-sm rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-secondary-light transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-secondary-light transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-secondary-light transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-primary/98 backdrop-blur-md border-b border-secondary/10 shadow-sm transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-secondary/80 hover:text-secondary-light transition-colors text-lg font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/recruitment"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white font-medium rounded-full mt-2"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}
