import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, Users, Trophy, Clock } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center bg-[#1a1a1a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            <span className="text-lime-400 text-sm font-medium">Basketball Training Berlin</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {t('title').split(' ').map((word, i) => (
              <span key={i} className={word === 'Game' ? 'text-lime-400' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="text-xl text-gray-400 max-w-lg">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/de/contact"
              className="inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all hover:gap-4"
            >
              {t('cta')}
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/de/services"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              {t('secondary')}
            </Link>
          </div>
        </div>

        {/* Right Content - Stats Card */}
        <div className="hidden lg:block">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6">
            <h3 className="text-white text-lg font-semibold">Erfahrung & Erfolge</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-lime-400/20 rounded-full flex items-center justify-center">
                  <Users className="text-lime-400" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-gray-400 text-sm">Trainierte Athleten</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-lime-400/20 rounded-full flex items-center justify-center">
                  <Trophy className="text-lime-400" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-gray-400 text-sm">Jahre Erfahrung</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-lime-400/20 rounded-full flex items-center justify-center">
                  <Clock className="text-lime-400" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">97%</div>
                  <div className="text-gray-400 text-sm">Zufriedenheit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
