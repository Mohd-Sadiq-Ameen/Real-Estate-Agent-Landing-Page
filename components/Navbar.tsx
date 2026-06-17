"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F1923]/95 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Top Contact Bar – now uses same max-width as main navbar */}
      <div className="bg-[#C9A84C] text-[#0F1923] px-2 py-2 md:py-1 xl:py-1 ">
        <div
          className="w-full max-w-[1400px] mx-auto flex items-center justify-center"
          style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="flex items-center gap-2 text-sm md:text-base font-semibold tracking-wide">
            <Phone size={14} className="md:w-5 md:h-5" />
            <span>Call Now:</span>
            <a
              href="tel:+919818077956"
              className="font-bold text-sm md:text-base hover:underline"
            >
              +91 98180 77956
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-2 md:py-1 lg:py-2 xl:py-1"
        style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="flex items-center justify-between gap-4 flex-nowrap">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="flex items-center gap-3 cursor-pointer flex-shrink-0"
          >
            <div className="w-10 h-8 xl:w-12 xl:h-12 border-2 border-[#C9A84C] flex items-center justify-center">
              <span className="text-[#C9A84C] text-xl xl:text-2xl font-bold">RS</span>
            </div>
            <div>
              <div className="text-white text-base xl:text-2xl font-semibold leading-tight whitespace-nowrap">
                Royal Siyaram
              </div>
              <div className="text-[#C9A84C] text-xs lg:text-sm tracking-[0.3em] uppercase whitespace-nowrap">
                Estate
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10 flex-nowrap mr-12 xl:mr-30">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-white/85 hover:text-[#C9A84C] text-sm xl:text-base transition-colors duration-300 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            <a
              href="https://www.instagram.com/royal_siyaram_consultant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E4405F] transition-colors duration-300 hover:scale-110 transform"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583034280331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1877F2] transition-colors duration-300 hover:scale-110 transform"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.youtube.com/@royalsiyaramestate/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF0000] transition-colors duration-300 hover:scale-110 transform"
            >
              <FaYoutube size={26} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
            aria-label="Toggle Menu"
          >
            {open ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden lg:hidden bg-[#0F1923] border-t border-white/10 px-6 py-8 flex flex-col gap-6">
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
          <div className="flex justify-center gap-6 py-4 border-b border-white/10">
            <a
              href="https://www.instagram.com/royal_siyaram_consultant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E4405F] transition-colors"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583034280331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1877F2] transition-colors"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.youtube.com/@royalsiyaramestate/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF0000] transition-colors"
            >
              <FaYoutube size={30} />
            </a>
          </div>
          <a
            href="https://wa.me/919818077956"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#C9A84C] text-[#0F1923] text-center py-4 text-lg font-bold uppercase tracking-wider"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}