"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ variant = "dark", fixed = false, mobileStatic = false }: {
  variant?: "dark" | "light";
  fixed?: boolean;
  mobileStatic?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (fixed) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fixed]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const solid = fixed || scrolled || variant === "light";
  const textColor = solid || isOpen ? "text-black" : "text-white";

  return (
    <header className={`site-header ${mobileStatic ? "mobile-static-header" : ""} ${isOpen ? "site-header-open" : ""} fixed top-0 left-0 right-0 z-50 px-15 max-md:px-4 transition-all duration-300 ${solid ? "bg-white pt-6 pb-3" : "py-24 max-md:py-6"}`}>
      <div className="relative z-50 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" onClick={() => setIsOpen(false)} aria-label="C.I.E.P トップページ" className={`${textColor} text-[36px] max-md:text-2xl font-bold tracking-widest`}>C.I.E.P</Link>
        <div className="flex items-center gap-8 max-md:gap-4">
          <nav aria-label="メインメニュー" className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`${textColor} text-2xl tracking-wider hover:opacity-60 transition-opacity`}>{link.label}</Link>)}
          </nav>
          <button onClick={() => setIsOpen(!isOpen)} className={`${textColor} menu-toggle relative cursor-pointer`} aria-expanded={isOpen} aria-controls="site-menu" aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}>
            {isOpen ? <X size={48} className="max-md:!w-8 max-md:!h-8" /> : <Menu size={48} className="max-md:!w-8 max-md:!h-8" />}
          </button>
        </div>
      </div>
      {isOpen && <div id="site-menu" className="menu-panel fixed inset-0 bg-white z-40 flex items-center justify-center overflow-y-auto">
        <nav aria-label="展開メニュー" className="flex flex-col items-center gap-10 py-28">
          {[{ href: "/", label: "Top" }, ...navLinks].map(link => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`${link.href === "/" ? "menu-home" : ""} text-black text-[1.95rem] max-md:text-2xl font-bold tracking-widest hover:opacity-60 transition-opacity`}>{link.label}<span className="menu-link-arrow" aria-hidden="true">→</span></Link>)}
        </nav>
      </div>}
    </header>
  );
}
