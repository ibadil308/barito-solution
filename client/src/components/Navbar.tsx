/* 
  Design: Organic Tech - Navbar with soft shadows and rounded corners
  Responsive: Mobile hamburger menu, desktop horizontal nav
*/

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/layanan", label: "Layanan" },
    { href: "/tentang", label: "Tentang" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <img 
                src="/images/logo.jpg" 
                alt="Barito Solution Logo" 
                className="w-10 h-10 rounded-xl object-cover smooth-transition group-hover:scale-105"
              />
              <span className="font-display font-bold text-xl text-foreground hidden sm:inline">
                Barito Solution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`font-medium smooth-transition cursor-pointer ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Button
              asChild
              className="rounded-full smooth-transition hover:scale-105"
            >
              <a href="https://wa.me/6283160077367" target="_blank" rel="noopener noreferrer">
                Hubungi Kami
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted smooth-transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg smooth-transition cursor-pointer ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <Button
                asChild
                className="rounded-full smooth-transition"
              >
                <a href="https://wa.me/6283160077367" target="_blank" rel="noopener noreferrer">
                  Hubungi Kami
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
