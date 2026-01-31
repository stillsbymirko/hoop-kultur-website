'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const locale = pathname.split('/')[1] || 'de';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/preise`, label: t('preise') },
    { href: `/${locale}/halle`, label: t('halle') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const otherLocale = locale === 'de' ? 'en' : 'de';
  const pathWithoutLocale = pathname.replace(/^\/(de|en)/, '') || '/';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled 
              ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]' 
              : 'bg-transparent'
          }`}>
            {/* Logo */}
            <Link href={`/${locale}`} className="relative group">
              <motion.span 
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                HOOPKULTUR
              </motion.span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(1, -1).map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                      scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className={`absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ${
                      scrolled ? 'bg-gray-100' : 'bg-white/10'
                    }`} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switch */}
              <Link
                href={`/${otherLocale}${pathWithoutLocale}`}
                className={`text-sm font-medium px-3 py-1.5 rounded-full border transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? 'border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900'
                    : 'border-white/30 text-white/80 hover:border-white hover:text-white'
                }`}
              >
                {otherLocale.toUpperCase()}
              </Link>

              {/* CTA Button */}
              <Link href={`/${locale}/contact`}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-lime-400/25"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900/40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-900"></span>
                  </span>
                  {t('contact')}
                </motion.span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
              aria-label="Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className={`block h-0.5 w-full rounded-full transition-colors ${
                    scrolled ? 'bg-gray-900' : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`block h-0.5 w-full rounded-full transition-colors ${
                    scrolled ? 'bg-gray-900' : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className={`block h-0.5 w-full rounded-full transition-colors ${
                    scrolled ? 'bg-gray-900' : 'bg-white'
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#1a1a1a]"
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col justify-center items-center px-6">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-4xl md:text-5xl font-bold text-white hover:text-lime-400 transition-colors py-2 text-center"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Language Switch */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <Link
                  href={`/${otherLocale}${pathWithoutLocale}`}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white text-lg transition-colors"
                >
                  <span className="w-8 h-[1px] bg-current" />
                  Switch to {otherLocale.toUpperCase()}
                  <span className="w-8 h-[1px] bg-current" />
                </Link>
              </motion.div>

              {/* Bottom decoration */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-20 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
