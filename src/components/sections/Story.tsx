import { Award, MapPin } from 'lucide-react';
import { FARM_STATS } from '../../constants/config';
import { ScrollReveal } from '../ui/ScrollReveal';

const BASE = import.meta.env.BASE_URL;

const stats = [
  { value: FARM_STATS.founded, label: 'Founded' },
  { value: FARM_STATS.hectares, label: 'Hectares' },
  { value: FARM_STATS.coffeeLots, label: 'Coffee Lots' },
];

export function Story() {
  return (
    <section id="story" className="bg-beige-natural py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column — image */}
          <ScrollReveal delay={0}>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={`${BASE}images/sostenibilidad/finca_vista_panoramica.jpg`}
                alt="Panoramic view of La Palma & El Tucán coffee farm in Zipacón, Colombia's cloud forest"
                loading="lazy"
                width="600"
                height="400"
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />

              {/* WBC 2019 badge */}
              <div className="absolute bottom-6 right-6 bg-dark/90 backdrop-blur-sm p-4 rounded-lg flex flex-col items-start gap-1">
                <Award className="text-gold" size={22} />
                <span className="font-display text-white font-bold text-sm leading-tight">
                  WBC 2019
                </span>
                <span className="text-gold font-body text-sm leading-tight">Champion Varietal</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column — content */}
          <ScrollReveal delay={150}>
            <div>
              <p className="section-subtitle mb-3">OUR STORY</p>
              <h2 className="section-title font-display">A Farm, A Legacy, A Vision</h2>

              <p className="text-dark font-body leading-relaxed mt-6">
                In 2012, Felipe Sardi and Elisa María Madriñán set out to create something
                unprecedented in Colombian coffee: a farm where every step—from seed to roast—happens
                in one place.
              </p>

              <p className="text-dark font-body leading-relaxed mt-4">
                Today, La Palma &amp; El Tucán is home to rare varietals like Geisha, Sidra, and
                Mokka, processed with innovative methods like Lactic fermentation and Bio-Innovation.
                In 2019, our Sidra varietal helped win the World Barista Championship.
              </p>

              <p className="text-dark font-body leading-relaxed mt-4">
                Today, the farm is home to over 27 species of plants per hectare in a polyculture
                system — a radical departure from the monoculture that dominates Colombian coffee
                production. Our commitment to 100% organic and agroecological practices means zero
                chemical fertilizers, a thriving circular economy through composting, and a farm
                that captures more carbon than it produces.
              </p>

              <p className="text-dark font-body leading-relaxed mt-4">
                The farm's name honors two rare species that coexist on the property: the endangered
                Palma de Cera — Colombia's national tree — and the Emerald Toucan, a striking bird
                native to these cloud forests. This concept of symbiosis guides everything we do, from
                our regenerative land practices to the Mejores Vecinos program that supports over 200
                neighboring farming families with fair pay, organic fertilizer, and technical training.
              </p>

              {/* Location badge */}
              <div className="flex items-center gap-2 mt-6">
                <MapPin size={18} className="text-burgundy shrink-0" />
                <span className="text-dark font-body text-sm">
                  Zipacón, Cundinamarca, Colombia · 1,700 m.a.s.l.
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-display text-3xl font-bold text-burgundy">{value}</p>
                    <p className="text-gold font-body text-sm uppercase tracking-wider mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Photo gallery */}
              <div className="grid grid-cols-3 gap-3 mt-8">
                <img
                  src={`${BASE}images/equipo/equipo_felipe_beneficio.jpg`}
                  alt="Felipe Sardi at the coffee processing station at La Palma & El Tucán"
                  loading="lazy"
                  width="200"
                  height="128"
                  className="rounded-lg h-32 w-full object-cover"
                />
                <img
                  src={`${BASE}images/equipo/equipo_trabajador_cafe.jpg`}
                  alt="Farm worker hand-picking ripe coffee cherries during harvest at La Palma & El Tucán"
                  loading="lazy"
                  width="200"
                  height="128"
                  className="rounded-lg h-32 w-full object-cover"
                />
                <img
                  src={`${BASE}images/proceso/proceso_03_cereza_madura.jpg`}
                  alt="Ripe coffee cherries ready for harvest at La Palma & El Tucán"
                  loading="lazy"
                  width="200"
                  height="128"
                  className="rounded-lg h-32 w-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
