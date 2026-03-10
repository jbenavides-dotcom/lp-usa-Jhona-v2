import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { SHOPIFY_COLLECTIONS } from '../../constants/config';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Our Coffees', href: '#products' },
  { label: 'Our Process', href: '#process' },
  { label: 'Our Story', href: '#story' },
  { label: 'Sustainability', href: '#sustainability' },
];

function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export function Header() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  const textClass = isScrolled ? 'text-dark' : 'text-white';
  const hoverClass = isScrolled ? 'hover:text-rose' : 'hover:text-rose/80';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-display text-lg md:text-xl font-bold tracking-wider transition-colors ${textClass}`}
          >
            LA PALMA{' '}
            <span className="text-gold">&amp;</span>{' '}
            EL TUC&Aacute;N
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors ${textClass} ${hoverClass}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={SHOPIFY_COLLECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-2.5 inline-block"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className={`md:hidden p-2 transition-colors ${textClass}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleAnchorClick(e, link.href);
                  setMobileOpen(false);
                }}
                className="text-dark text-sm font-semibold uppercase tracking-wide py-3 border-b border-gray-100 hover:text-rose transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SHOPIFY_COLLECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm text-center mt-4 inline-block"
            >
              Shop Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
