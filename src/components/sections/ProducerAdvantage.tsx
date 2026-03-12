import { ScrollReveal } from '../ui/ScrollReveal';
import { img } from '../../lib/cloudinary';

const advantages = [
  { number: '01', title: 'Roast Design from Terroir' },
  { number: '02', title: 'Genetics Made Audible' },
  { number: '03', title: 'Process-Aware Heat Application' },
  { number: '04', title: '50m from Cultivation to Roaster' },
];

const stats = [
  { value: '12+', label: 'Years Farming' },
  { value: '6', label: 'Rare Varietals' },
  { value: '2019', label: 'WBC Winner' },
];

export function ProducerAdvantage() {
  return (
    <section id="producer" className="bg-burgundy py-20 text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — content */}
          <ScrollReveal delay={0}>
            <p className="text-cream uppercase tracking-[0.3em] text-sm font-semibold">
              THE PRODUCER ADVANTAGE
            </p>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
              From Seed to Roast, All in One Place
            </h2>

            <p className="text-white font-body leading-relaxed mt-4">
              Unlike most specialty coffee brands that source green beans and roast elsewhere,
              every bag of La Palma &amp; El Tucán coffee is roasted on-site — just 50 meters
              from where it was cultivated. Our Stronghold S8X roaster allows us to design each
              roast profile based on intimate knowledge of every lot's terroir, fermentation, and
              drying process.
            </p>

            <p className="text-white font-body leading-relaxed mt-4">
              This approach has earned recognition at the highest levels of specialty coffee. In 2019,
              Jooyeon Jeon of South Korea won the World Barista Championship using our Sidra varietal —
              a testament to the quality that emerges when the same team that nurtures the soil also
              controls the roast. Our green coffee has commanded record prices, reaching $303 USD per
              pound — the highest price ever paid for Colombian coffee.
            </p>

            {/* Advantage boxes */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {advantages.map(({ number, title }) => (
                <div key={number} className="bg-white/20 rounded-lg p-4">
                  <p className="text-white font-bold text-2xl font-display">{number}</p>
                  <p className="text-white font-semibold text-sm mt-1 font-body">{title}</p>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl font-bold text-white">{value}</p>
                  <p className="text-white font-body text-sm uppercase tracking-wider mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* RIGHT — images */}
          <ScrollReveal delay={150}>
            {/* Main image */}
            <img
              src={img('images/tostadora/tostadora_nueva.jpg', 'medium')}
              alt="Stronghold S8X coffee roaster at La Palma & El Tucán farm in Zipacón, Colombia"
              loading="lazy"
              width="600"
              height="384"
              className="rounded-xl w-full shadow-lg object-cover h-96"
            />

            {/* Two smaller images below */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <img
                src={img('images/proceso/proceso_04_secado_natural.jpg', 'thumb')}
                alt="Coffee beans drying on African raised beds at La Palma & El Tucán farm in Zipacón, Colombia"
                loading="lazy"
                width="300"
                height="160"
                className="rounded-lg h-40 object-cover w-full"
              />
              <img
                src={img('images/proceso/proceso_03_cereza_madura.jpg', 'thumb')}
                alt="Ripe red coffee cherries ready for harvest at La Palma & El Tucán"
                loading="lazy"
                width="300"
                height="160"
                className="rounded-lg h-40 object-cover w-full"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
