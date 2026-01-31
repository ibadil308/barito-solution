/* 
  Design: Organic Tech - Footer with soft colors and organic spacing
*/

import { Instagram, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.jpg" 
                alt="Barito Solution Logo" 
                className="w-10 h-10 rounded-xl object-cover"
              />
              <span className="font-display font-bold text-xl">Barito Solution</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Solusi terpercaya untuk kebutuhan teknologi Anda. Instalasi, perbaikan, dan pengembangan website profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition text-sm cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/layanan">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition text-sm cursor-pointer">
                    Layanan
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tentang">
                  <span className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition text-sm cursor-pointer">
                    Tentang
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Kontak</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6283160077367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground smooth-transition text-sm"
                >
                  <Phone size={18} />
                  <span>083160077367</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/barito.solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground smooth-transition text-sm"
                >
                  <Instagram size={18} />
                  <span>@barito.solution</span>
                </a>
              </li>
              <li>
                <a
                  href="https://baritosol.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground smooth-transition text-sm"
                >
                  <Mail size={18} />
                  <span>baritosol.my.id</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Barito Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
