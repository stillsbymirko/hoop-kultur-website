import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Check, Star } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Einzeltraining',
    price: '80',
    unit: 'pro Stunde',
    description: 'Perfekt für den Einstieg oder gezielte Verbesserung.',
    features: [
      '60 Minuten Training',
      'Individuelle Betreuung',
      'Trainingsplan inklusive',
      'Flexible Terminwahl',
    ],
    popular: false,
  },
  {
    name: '5er Karte',
    price: '350',
    unit: 'für 5 Stunden',
    description: 'Ideal für kontinuierliche Fortschritte.',
    features: [
      '5x 60 Minuten Training',
      'Individuelle Betreuung',
      'Video-Analyse',
      'Trainingsplan inklusive',
      '12% Ersparnis',
    ],
    popular: true,
  },
  {
    name: '10er Karte',
    price: '650',
    unit: 'für 10 Stunden',
    description: 'Maximale Ersparnis für ernsthafte Spieler.',
    features: [
      '10x 60 Minuten Training',
      'Individuelle Betreuung',
      'Video-Analyse',
      'Trainingsplan inklusive',
      'Prioritäts-Buchung',
      '19% Ersparnis',
    ],
    popular: false,
  },
];

export default async function PreisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider">
            Preise
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 font-serif">
            Transparent & Fair
          </h1>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Investiere in deine Entwicklung. Alle Preise inklusive Hallennutzung.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white p-8 rounded-2xl ${
                  plan.popular ? 'ring-2 ring-lime-400 shadow-xl' : 'shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-lime-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      <Star size={14} fill="currentColor" />
                      Beliebt
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}€</span>
                  <span className="text-gray-500 ml-2">{plan.unit}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-600">
                      <Check className="text-lime-500 flex-shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/contact`}
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-lime-400 hover:bg-lime-500 text-gray-900'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Buchen
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
