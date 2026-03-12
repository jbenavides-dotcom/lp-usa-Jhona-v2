const BASE = 'https://www.lapalmayeltucan.com/en-us';

export const SHOPIFY = {
  collections: `${BASE}/collections/all`,
  subscription: `${BASE}/products/everyday-coffee-subscription`,
  legendaryGeisha: `${BASE}/products/legendary-series-1`,
  palmaBlend: `${BASE}/products/coffee-1`,
  tucanBlend: `${BASE}/products/e-v-sidra-natural-exquisite-colombian-specialty-coffee`,
} as const;

type Campaign = 'lp-story' | 'lp-shop' | 'lp-seo' | 'lp-main';

/**
 * Append UTM parameters to a Shopify URL for tracking.
 */
export function shopifyUrl(url: string, campaign: Campaign, ctaLabel?: string): string {
  const params = new URLSearchParams({
    utm_source: 'landing',
    utm_medium: 'cta',
    utm_campaign: campaign,
  });
  if (ctaLabel) params.set('utm_content', ctaLabel);
  return `${url}?${params.toString()}`;
}
