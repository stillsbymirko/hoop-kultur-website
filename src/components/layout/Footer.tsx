import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold">HOOPKULTUR</div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/de/impressum" className="hover:text-white transition-colors">
              {t('imprint')}
            </Link>
            <Link href="/de/datenschutz" className="hover:text-white transition-colors">
              {t('privacy')}
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {currentYear} HOOPKULTUR. {t('rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}
