'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
        >
          Bereit für das{' '}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="text-[#f5f0e8]"
          >
            nächste Level
          </motion.span>
          ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Starte jetzt deine Basketball-Journey. Kontaktiere mich für ein 
          kostenloses Erstgespräch und lass uns gemeinsam deine Ziele erreichen.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/de/contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-[#f5f0e8] hover:bg-[#ebe4d8] text-gray-900 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Jetzt starten
              <ArrowRight size={20} />
            </motion.span>
          </Link>
          <motion.a
            href="https://wa.me/4917790708811"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#f5f0e8] text-white hover:text-[#f5f0e8] px-8 py-4 rounded-full font-semibold transition-colors"
          >
            WhatsApp schreiben
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
