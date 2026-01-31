'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

export default function Hero() {
  const locale = useLocale();
  const isDE = locale === 'de';

  // Typing animation for title
  const title = "HOOPKULTUR";
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      
      <div className="relative text-center px-6 py-32">
        {/* Main Title with Typing Animation */}
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-6"
          initial="hidden"
          animate="visible"
        >
          {title.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-400 tracking-wide mb-12"
        >
          Individual Basketball Training
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href={`/${locale}/contact`}>
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#f5f0e8] text-black px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-[#ebe4d8] transition-colors"
            >
              {isDE ? 'Training buchen' : 'Book Training'}
              <ArrowRight size={18} />
            </motion.span>
          </Link>
          
          <Link href={`/${locale}/about`}>
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white px-6 py-4 font-medium text-sm tracking-wide transition-colors"
            >
              {isDE ? 'Mehr erfahren' : 'Learn more'}
            </motion.span>
          </Link>
        </motion.div>

        {/* Minimal scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-neutral-600 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
