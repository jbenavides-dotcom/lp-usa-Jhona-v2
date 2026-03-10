import { Truck, Clock, Shield, Award } from 'lucide-react';
import type { ComponentType } from 'react';
import { TRUST_BADGES } from '../../constants/config';

const ICON_MAP: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Truck,
  Clock,
  Shield,
  Award,
};

export function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100 py-4">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Badge grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_BADGES.map((badge) => {
            const Icon = ICON_MAP[badge.icon];
            return (
              <div
                key={badge.icon}
                className="flex items-center justify-center gap-3"
              >
                {Icon && (
                  <Icon
                    size={20}
                    className="text-green flex-shrink-0"
                  />
                )}
                <span className="font-body font-semibold text-sm text-dark leading-tight">
                  {badge.text}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
