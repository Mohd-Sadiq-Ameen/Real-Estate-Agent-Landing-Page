"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Areas", href: "#areas" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scroll handler with offset for fixed navbar
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 120; // approximate height of fixed navbar (top bar + main nav)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
    setOpen(false); // close mobile menu if open
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F1923]/95 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-[#C9A84C] text-[#0F1923] py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-base md:text-lg font-semibold tracking-wide">
          <Phone size={20} />
          <span>Call Now:</span>
          <a
            href="tel:+919818077956"
            className="font-bold text-lg md:text-xl hover:underline"
          >
            +91 98180 77956
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 lg:py-7 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="flex items-center gap-4 cursor-pointer">
          <div className="w-12 h-12 xl:w-16 xl:h-16 border-2 border-[#C9A84C] flex items-center justify-center">
            <span className="text-[#C9A84C] text-xl xl:text-3xl font-bold">
              RS
            </span>
          </div>
          <div>
            <div className="text-white text-xl xl:text-3xl font-semibold leading-tight">
              Royal Siyaram
            </div>
            <div className="text-[#C9A84C] text-xs lg:text-sm tracking-[0.3em] uppercase">
              Estate
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-white/85 hover:text-[#C9A84C] text-sm xl:text-base transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/919818077956"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#0F1923] transition-all duration-300"
        >
          <Phone size={18} />
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
          aria-label="Toggle Menu"
        >
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#0F1923] border-t border-white/10 px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-white text-lg font-medium uppercase tracking-widest py-3 border-b border-white/10 hover:text-[#C9A84C] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/919818077956"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-[#C9A84C] text-[#0F1923] text-center py-4 text-lg font-bold uppercase tracking-wider"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}