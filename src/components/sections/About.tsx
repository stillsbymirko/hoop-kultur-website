'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-lg">Coach Foto</span>
              </div>
            </motion.div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-6 -right-6 bg-lime-400 px-6 py-4 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-700">Jahre Erfahrung</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lime-500 font-semibold text-sm uppercase tracking-wider"
            >
              Über mich
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 font-serif"
            >
              Long-Yun Cam
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Als leidenschaftlicher Basketball-Coach aus Berlin helfe ich Spielern aller Level, 
              ihr volles Potenzial zu entfalten. Mit über 15 Jahren Erfahrung und einem 
              individuellen Trainingsansatz bringe ich dein Spiel auf das nächste Level.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 leading-relaxed"
            >
              Mein Fokus liegt auf technischer Perfektion, mentaler Stärke und der Freude am Spiel. 
              Jedes Training ist auf deine persönlichen Ziele abgestimmt.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/de/about">
                <motion.span
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-700 font-semibold group"
                >
                  Mehr erfahren
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
