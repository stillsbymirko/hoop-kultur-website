'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[#f5f0e8] font-medium text-sm uppercase tracking-widest mb-4"
        >
          {label}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 mt-6 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
