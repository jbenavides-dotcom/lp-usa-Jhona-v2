import { Instagram, Mail, MapPin } from 'lucide-react';
import { SHOPIFY_COLLECTIONS, SOCIAL, CONTACT } from '../../constants/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <p className="font-display text-xl font-bold tracking-wider">
              LA PALMA <span className="text-gold">&amp;</span> EL TUC&Aacute;N
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Producer-roasted specialty coffee from our cloud forest farm in Zipacón, Colombia.
            </p>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-fit"
            >
              <Instagram size={18} />
              <span className="text-sm">{SOCIAL.instagramHandle}</span>
            </a>
          </div>

          {/* Column 2 — Shop */}
          <div className="flex flex-col gap-4">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em]">Shop</p>
            <nav className="flex flex-col gap-3">
              <a
                href={SHOPIFY_COLLECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                All Coffees
              </a>
              <a
                href={SHOPIFY_COLLECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Legendary Series
              </a>
              <a
                href={SHOPIFY_COLLECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Single Origin
              </a>
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em]">Contact</p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} className="flex-shrink-0" />
                {CONTACT.email}
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>{CONTACT.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} La Palma &amp; El Tucán. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
