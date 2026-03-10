import type { Tier } from '../../constants/products';

interface TierBadgeProps {
  tier: Tier;
}

const TIER_CONFIG: Record<Tier, { label: string; className: string }> = {
  legendary: {
    label: 'Legendary',
    className: 'bg-gradient-to-r from-gold to-yellow-600 text-white',
  },
  heroes: {
    label: 'Single Origin',
    className: 'bg-rose text-white',
  },
  warrior: {
    label: 'Roasted Series',
    className: 'bg-dark text-white',
  },
};

export function TierBadge({ tier }: TierBadgeProps) {
  const config = TIER_CONFIG[tier];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-sm ${config.className}`}
    >
      {config.label}
    </span>
  );
}
