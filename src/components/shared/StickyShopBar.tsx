import { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { SHOPIFY, shopifyUrl } from '../../lib/shopify';

export function StickyShopBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const location = useLocation();

  const campaign = location.pathname.includes('/story')
    ? 'lp-story'
    : location.pathname.includes('/shop')
    ? 'lp-shop'
    : location.pathname.includes('/geisha')
    ? 'lp-seo'
    : 'lp-main';

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm text-white py-3 px-4 flex items-center justify-between gap-4 shadow-2xl">
      <div className="flex items-center gap-3">
        <ShoppingBag size={18} className="text-gold shrink-0" />
        <span className="font-body text-sm hidden sm:inline">
          Colombian Specialty Coffee — Free US Shipping
        </span>
        <span className="font-body text-sm sm:hidden">Free US Shipping</span>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={shopifyUrl(SHOPIFY.collections, campaign as any, 'sticky-bar')}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose hover:bg-rose-dark text-white font-semibold text-sm px-5 py-2 uppercase tracking-wider transition-colors"
        >
          Shop Coffees
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="text-white/50 hover:text-white p-1"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
