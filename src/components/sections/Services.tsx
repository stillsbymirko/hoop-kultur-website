'use client';

import { Target, Users, Zap, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4c8b8] font-semibold text-sm uppercase tracking-wider">
            Angebot
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 font-serif">
            Training für jeden Level
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="w-14 h-14 bg-[#f5f0e8]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#f5f0e8]/20 transition-colors"
              >
                <service.icon className="text-[#d4c8b8]" size={28} />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
