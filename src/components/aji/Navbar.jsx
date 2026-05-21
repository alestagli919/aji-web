import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Menú', href: '#menu' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Opiniones', href: '#reviews' },
    { label: 'Contacto', href: '#footer' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cacao/96 backdrop-blur-xl shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-habanero font-display text-3xl font-bold tracking-tight">AJÍ</span>
          <span className={`hidden sm:block font-heading text-xs tracking-widest uppercase ${scrolled ? 'text-bone/60' : 'text-bone/50'}`}>
            Cocina Latina
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-bone/70 hover:text-habanero font-body text-sm tracking-wide transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+34673065073"
            className="flex items-center gap-2 text-bone/70 hover:text-habanero font-body text-sm transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            673 06 50 73
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-bone/80 hover:text-habanero transition-colors p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-cacao/98 backdrop-blur-xl border-t border-bone/10 mt-2">
          <div className="px-6 py-6 space-y-4">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block text-bone/80 hover:text-habanero font-body text-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+34673065073"
              className="flex items-center gap-3 bg-habanero text-cacao font-heading font-bold text-center px-5 py-3 rounded-full mt-4 justify-center"
            >
              <Phone className="w-4 h-4" />
              673 06 50 73
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}