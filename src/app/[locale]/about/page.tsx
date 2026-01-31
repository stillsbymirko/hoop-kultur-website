'use client';

import { motion } from 'framer-motion';
import { Check, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

const qualifications = [
  'Lizenzierter Basketball-Trainer',
  'Über 500 trainierte Athleten',
  'Spezialisierung auf Skill Development',
  'Erfahrung mit allen Altersgruppen',
  'Individueller Trainingsansatz',
  'Mentales Coaching',
];

const milestones = [
  { year: '2010', title: 'Start als Trainer', desc: 'Erste Trainererfahrung im Jugendbereich' },
  { year: '2015', title: 'Zertifizierung', desc: 'Offizielle Trainer-Lizenz erworben' },
  { year: '2018', title: 'HOOPKULTUR', desc: 'Gründung des eigenen Training-Business' },
  { year: '2023', title: '500+ Athleten', desc: 'Meilenstein: 500 trainierte Spieler' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with Image */}
      <section className="pt-32 pb-20 bg-[#1a1a1a] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-lime-400/20 to-gray-800">
                {/* Replace this with actual image */}
                {/* <Image 
                  src="/images/coach.jpg" 
                  alt="Long-Yun Cam - Basketball Coach"
                  fill
                  className="object-cover"
                /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/60">
                    <div className="text-6xl mb-4">🏀</div>
                    <p className="text-sm">Coach Foto hier einfügen</p>
                    <p className="text-xs mt-2 text-white/40">/public/images/coach.jpg</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -bottom-6 -right-6 bg-lime-400 px-6 py-4 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-700">Jahre Erfahrung</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: 'spring' }}
                className="absolute top-10 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-xl"
              >
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-gray-300">Athleten</div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider">
                Über mich
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 font-serif">
                Long-Yun Cam
              </h1>
              <p className="text-xl text-gray-400 mt-6 leading-relaxed">
                Als leidenschaftlicher Basketball-Coach aus Berlin helfe ich Spielern aller Level, 
                ihr volles Potenzial zu entfalten.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                <a
                  href="https://instagram.com/hoopkultur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
                >
                  <Instagram size={20} className="text-pink-400" />
                  <span className="text-white text-sm">@hoopkultur</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
              Meine Philosophie
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-600"
          >
            <p className="text-xl leading-relaxed mb-6">
              Basketball ist mehr als nur ein Sport – es ist eine Lebensschule. 
              In meinem Training geht es nicht nur um Technik und Taktik, sondern 
              auch um mentale Stärke, Disziplin und Teamgeist.
            </p>
            <p className="leading-relaxed">
              Jeder Spieler ist einzigartig. Deshalb passe ich mein Training 
              individuell an deine Stärken, Schwächen und Ziele an. Ob du gerade 
              erst anfängst oder bereits auf hohem Niveau spielst – gemeinsam 
              arbeiten wir an deiner Weiterentwicklung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
              Qualifikationen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualifications.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl"
              >
                <div className="w-8 h-8 bg-lime-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-lime-500" size={18} />
                </div>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
              Mein Weg
            </h2>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-lime-400 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-lg">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
