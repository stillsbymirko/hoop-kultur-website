'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maximilian K.',
    role: 'Vereinsspieler, 19 Jahre',
    content: 'Nach 6 Monaten Training mit Long-Yun habe ich meinen Wurf komplett verbessert. Meine Trefferquote ist von 35% auf über 50% gestiegen!',
    rating: 5,
  },
  {
    name: 'Sophie M.',
    role: 'Anfängerin, 24 Jahre',
    content: 'Als komplette Anfängerin hatte ich Bedenken, aber Long-Yun hat mir in kürzester Zeit die Basics beigebracht. Jetzt spiele ich regelmäßig mit Freunden.',
    rating: 5,
  },
  {
    name: 'David L.',
    role: 'Jugendtrainer',
    content: 'Ich bringe regelmäßig meine Jugendmannschaft zum Gruppentraining. Die Fortschritte sind unglaublich - Long-Yun versteht es, jeden Spieler individuell zu fördern.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f5f0e8] font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 font-serif">
            Was meine Spieler sagen
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                <Quote size={20} className="text-gray-900" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#f5f0e8] fill-[#f5f0e8]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f5f0e8]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#f5f0e8] font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
