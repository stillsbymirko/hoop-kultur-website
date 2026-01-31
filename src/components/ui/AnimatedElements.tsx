'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function AnimatedCard({ children, className = '', index = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
