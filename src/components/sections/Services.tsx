import { Target, Users, Zap, Trophy } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: '1:1 Training',
    description: 'Individuelles Training, auf deine Stärken und Schwächen zugeschnitten.',
  },
  {
    icon: Users,
    title: 'Gruppentraining',
    description: 'Trainiere mit Gleichgesinnten und verbessere dein Teamspiel.',
  },
  {
    icon: Zap,
    title: 'Skill Development',
    description: 'Fokussiertes Training für Dribbeln, Werfen und Verteidigung.',
  },
  {
    icon: Trophy,
    title: 'Game Preparation',
    description: 'Mentale und physische Vorbereitung auf Wettkämpfe.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-lime-500 font-semibold text-sm uppercase tracking-wider">
            Angebot
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 font-serif">
            Training für jeden Level
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-lime-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
                <service.icon className="text-lime-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
