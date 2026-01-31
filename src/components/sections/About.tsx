import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-lg">Coach Foto</span>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-lime-400 px-6 py-4 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-700">Jahre Erfahrung</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-lime-500 font-semibold text-sm uppercase tracking-wider">
              Über mich
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
              Long-Yun Cam
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Als leidenschaftlicher Basketball-Coach aus Berlin helfe ich Spielern aller Level, 
              ihr volles Potenzial zu entfalten. Mit über 15 Jahren Erfahrung und einem 
              individuellen Trainingsansatz bringe ich dein Spiel auf das nächste Level.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mein Fokus liegt auf technischer Perfektion, mentaler Stärke und der Freude am Spiel. 
              Jedes Training ist auf deine persönlichen Ziele abgestimmt.
            </p>
            <Link
              href="/de/about"
              className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-700 font-semibold group"
            >
              Mehr erfahren
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
