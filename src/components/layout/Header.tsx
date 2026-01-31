'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/preise`, label: t('preise') },
    { href: `/${locale}/halle`, label: t('halle') },
  ];

  const otherLocale = locale === 'de' ? 'en' : 'de';
  const pathWithoutLocale = pathname.replace(/^\/(de|en)/, '') || '/';

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <nav
        className={`
          px-4 py-3 rounded-full transition-all duration-300
          ${scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg'
            : 'bg-white/10 backdrop-blur-md'
          }
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className={`text-xl font-bold transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            HOOPKULTUR
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-lime-500'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switch */}
            <Link
              href={`/${otherLocale}${pathWithoutLocale}`}
              className={`text-sm font-medium px-3 py-1 rounded-full border transition-colors ${
                scrolled
                  ? 'border-gray-300 text-gray-700 hover:border-lime-500'
                  : 'border-white/30 text-white/90 hover:border-white'
              }`}
            >
              {otherLocale.toUpperCase()}
            </Link>

            {/* CTA */}
            <Link
              href={`/${locale}/contact`}
              className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium py-2 ${
                    scrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <Link
                  href={`/${otherLocale}${pathWithoutLocale}`}
                  className={`text-sm px-3 py-1 rounded-full border ${
                    scrolled ? 'border-gray-300 text-gray-700' : 'border-white/30 text-white'
                  }`}
                >
                  {otherLocale.toUpperCase()}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="bg-lime-400 text-gray-900 px-5 py-2 rounded-full text-sm font-semibold"
                >
                  {t('contact')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
