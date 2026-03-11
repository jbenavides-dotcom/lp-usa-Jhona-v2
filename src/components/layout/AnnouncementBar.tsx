import { useState } from 'react';
import { Gift, Truck, X } from 'lucide-react';
import { SHOPIFY_COLLECTIONS } from '../../constants/config';

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-burgundy text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop layout */}
        <div className="hidden sm:flex items-center justify-between h-10">
          <div className="flex items-center gap-2">
            <Gift size={14} className="flex-shrink-0" />
            <span className="text-sm font-semibold tracking-wide">
              WELCOME10 — 10% Off Your First Order
            </span>
            <a
              href={SHOPIFY_COLLECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-sm underline underline-offset-2 hover:no-underline font-semibold"
            >
              Shop Now
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Truck size={14} className="flex-shrink-0" />
            <span className="text-sm font-semibold tracking-wide">
              Free Shipping on Orders $50+
            </span>
          </div>

          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss announcement"
            className="p-1 hover:opacity-75 transition-opacity"
          >
            <X size={16} />
          </button>
        </div>

        {/* Mobile layout — single condensed line */}
        <div className="flex sm:hidden items-center justify-between h-9">
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            <Gift size={13} className="flex-shrink-0" />
            <span className="text-xs font-semibold tracking-wide truncate">
              WELCOME10 — 10% off &nbsp;|&nbsp; Free shipping $50+
            </span>
            <a
              href={SHOPIFY_COLLECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-xs underline underline-offset-2 font-semibold"
            >
              Shop
            </a>
          </div>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss announcement"
            className="ml-2 p-0.5 hover:opacity-75 transition-opacity flex-shrink-0"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
