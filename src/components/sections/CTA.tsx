import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
          Bereit für das nächste Level?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Starte jetzt deine Basketball-Journey. Kontaktiere mich für ein 
          kostenloses Erstgespräch und lass uns gemeinsam deine Ziele erreichen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/de/contact"
            className="inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all hover:gap-4"
          >
            Jetzt starten
            <ArrowRight size={20} />
          </Link>
          <a
            href="https://wa.me/4917790708811"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-lime-400 text-white hover:text-lime-400 px-8 py-4 rounded-full font-semibold transition-colors"
          >
            WhatsApp schreiben
          </a>
        </div>
      </div>
    </section>
  );
}
