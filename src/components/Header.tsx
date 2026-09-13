"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function Header({
  variant = "dark",
  fixed = false,
}: {
  variant?: "dark" | "light";
  fixed?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(fixed);

  useEffect(() => {
    if (fixed) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fixed]);

  const textColor = scrolled ? "text-black" : "text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-15 transition-all duration-300 ${scrolled ? "bg-white pt-6 pb-3" : "py-24"}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-2">
          <span
            className={`${textColor} text-[36px] font-bold tracking-widest`}
          >
            C.I.E.P
          </span>
        </a>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${textColor} text-2xl tracking-wider hover:opacity-60 transition-opacity`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${textColor} z-50 relative cursor-pointer`}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {isOpen ? <X size={48} /> : <Menu size={48} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex items-center justify-center">
          <nav className="flex flex-col items-center gap-16">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-black text-[1.95rem] font-bold tracking-widest hover:opacity-60 transition-opacity"
            >
              Top
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-black text-[1.95rem] font-bold tracking-widest hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-black hover:opacity-60 transition-opacity mt-4"
              aria-label="Instagram"
            >
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
