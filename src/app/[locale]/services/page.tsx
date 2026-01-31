import { setRequestLocale } from 'next-intl/server';
import { Target, Users, Zap, Trophy, Clock, Star } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: '1:1 Personal Training',
    description: 'Individuelles Training, komplett auf dich zugeschnitten. Maximaler Fokus auf deine Entwicklung.',
    features: ['Individuelle Analyse', 'Persönlicher Trainingsplan', 'Flexible Termine'],
  },
  {
    icon: Users,
    title: 'Gruppentraining',
    description: 'Trainiere in kleinen Gruppen mit Gleichgesinnten. Ideal für Teamwork und Motivation.',
    features: ['Max. 6 Teilnehmer', 'Teamübungen', 'Spielsituationen'],
  },
  {
    icon: Zap,
    title: 'Skill Development',
    description: 'Fokussiertes Training für spezifische Skills: Dribbeln, Werfen, Verteidigung.',
    features: ['Technik-Fokus', 'Video-Analyse', 'Progressives Training'],
  },
  {
    icon: Trophy,
    title: 'Game Preparation',
    description: 'Mentale und physische Vorbereitung auf wichtige Spiele und Turniere.',
    features: ['Mentales Coaching', 'Spielvorbereitung', 'Strategie'],
  },
  {
    icon: Clock,
    title: 'Intensiv-Camps',
    description: 'Mehrtägige Intensiv-Trainings für schnelle Fortschritte in den Ferien.',
    features: ['3-5 Tage', 'Ganztags', 'Alle Level'],
  },
  {
    icon: Star,
    title: 'Team-Coaching',
    description: 'Coaching für Vereine und Teams. Taktik, Teambuilding und Spielentwicklung.',
    features: ['Team-Analyse', 'Taktik-Training', 'Spielsysteme'],
  },
];

export default async function ServicesPage({
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
          <span className="text-[#f5f0e8] font-semibold text-sm uppercase tracking-wider">
            Angebot
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 font-serif">
            Training für jeden Level
          </h1>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Vom Anfänger bis zum Profi – finde das passende Training für deine Ziele.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#f5f0e8]/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="text-[#d4c8b8]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-[#f5f0e8] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
