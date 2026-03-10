import { useState } from 'react';
import { Clock, Truck, X } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { SHOPIFY_COLLECTIONS } from '../../constants/config';

export function StickyBar() {
  const { scrollY } = useScrollPosition();
  const [dismissed, setDismissed] = useState(false);

  const isVisible = scrollY > 600 && !dismissed;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-dark shadow-2xl transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!isVisible}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop layout */}
        <div className="hidden sm:flex items-center justify-between h-14 gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <Clock size={16} className="text-rose animate-pulse flex-shrink-0" />
              <span className="text-sm font-semibold">
                Limited batch — Order now for fresh roast
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Truck size={16} className="text-gold flex-shrink-0" />
              <span className="text-sm">Free shipping $50+</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SHOPIFY_COLLECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-2 inline-block whitespace-nowrap"
            >
              Shop Now — From $42
            </a>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss bar"
              className="text-white/50 hover:text-white transition-colors p-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Mobile layout — condensed */}
        <div className="flex sm:hidden items-center justify-between h-12 gap-2">
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            <Clock size={14} className="text-rose animate-pulse flex-shrink-0" />
            <span className="text-white text-xs font-semibold truncate">
              Limited batch — Order now
            </span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={SHOPIFY_COLLECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose text-white text-xs font-semibold uppercase tracking-wide px-4 py-1.5 hover:bg-rose-dark transition-colors whitespace-nowrap"
            >
              Shop — From $42
            </a>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss bar"
              className="text-white/50 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
