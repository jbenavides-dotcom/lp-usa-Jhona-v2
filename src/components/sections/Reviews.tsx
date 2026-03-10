import { Star, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../../constants/reviews';
import { SHOPIFY_COLLECTIONS, SOCIAL_PROOF } from '../../constants/config';
import { ScrollReveal } from '../ui/ScrollReveal';

export function Reviews() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <p className="section-subtitle">CUSTOMER REVIEWS</p>
          <h2 className="section-title font-display mt-3">What Coffee Lovers Say</h2>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-display text-3xl font-bold text-dark">
              {SOCIAL_PROOF.rating}
            </span>
            <span className="text-gray-500">({SOCIAL_PROOF.totalReviews} reviews)</span>
          </div>
        </div>

        {/* Review cards */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {REVIEWS.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm relative"
            >
              {/* Decorative quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Product name */}
              <p className="text-gold uppercase tracking-wider text-xs font-medium mt-3">
                {review.product}
              </p>

              {/* Review text */}
              <p className="text-gray-700 text-lg mt-3 italic font-body">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer info */}
              <div className="mt-4">
                <p className="font-semibold text-dark font-body">{review.name}</p>
                <p className="text-gray-400 text-sm font-body">{review.location}</p>
              </div>

              {/* Verified badge */}
              {review.verified && (
                <div className="flex items-center gap-1 mt-2">
                  <CheckCircle className="w-4 h-4 text-green" />
                  <span className="text-green text-xs font-medium font-body">
                    Verified Purchase
                  </span>
                </div>
              )}
            </div>
          ))}
        </ScrollReveal>

        {/* Featured In */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 uppercase tracking-wider text-xs font-body">Featured In</p>
          <div className="flex items-center justify-center gap-8 mt-4 flex-wrap">
            {SOCIAL_PROOF.featuredIn.map((pub) => (
              <span key={pub} className="text-gray-400 font-display text-lg">
                {pub}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={SHOPIFY_COLLECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Shop Our Coffees
          </a>
          <p className="text-gray-400 text-sm mt-3 font-body">
            Join {SOCIAL_PROOF.customersServed} happy customers
          </p>
        </div>
      </div>
    </section>
  );
}
