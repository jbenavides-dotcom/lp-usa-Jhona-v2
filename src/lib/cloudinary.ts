const CLOUD_NAME = 'dkqocgknd';
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

type ImageSize = 'card' | 'product' | 'hero' | 'thumb' | 'medium';

const SIZE_MAP: Record<ImageSize, string> = {
  card: 'f_auto,q_auto,w_800',
  product: 'f_auto,q_auto,w_600',
  hero: 'f_auto,q_auto,w_1400',
  thumb: 'f_auto,q_auto,w_400',
  medium: 'f_auto,q_auto,w_1000',
};

/**
 * Generate a Cloudinary URL for an image.
 * @param path - local path like "images/proceso/proceso_bio_washed.jpg"
 * @param size - preset size: card (800), product (600), hero (1400), thumb (400), medium (1000)
 */
export function img(path: string, size: ImageSize = 'card'): string {
  // Remove leading slash and "images/" prefix, strip extension
  const clean = path.replace(/^\//, '').replace(/^images\//, '');
  const withoutExt = clean.replace(/\.\w+$/, '');
  return `${BASE}/${SIZE_MAP[size]}/lp-usa/${withoutExt}`;
}
