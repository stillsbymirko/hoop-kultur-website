import { setRequestLocale } from 'next-intl/server';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider">
            Über mich
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 font-serif">
            Long-Yun Cam
          </h1>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Dein Coach für Basketball-Excellence in Berlin
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Mit über 15 Jahren Erfahrung im Basketball-Training habe ich hunderte 
              Spieler dabei unterstützt, ihre Ziele zu erreichen – vom Anfänger bis 
              zum ambitionierten Wettkampfspieler.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 font-serif">
              Meine Philosophie
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Basketball ist mehr als nur ein Sport – es ist eine Lebensschule. 
              In meinem Training geht es nicht nur um Technik und Taktik, sondern 
              auch um mentale Stärke, Disziplin und Teamgeist.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Jeder Spieler ist einzigartig. Deshalb passe ich mein Training 
              individuell an deine Stärken, Schwächen und Ziele an.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 font-serif">
              Qualifikationen
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-lime-400 rounded-full" />
                Lizenzierter Basketball-Trainer
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-lime-400 rounded-full" />
                Über 500 trainierte Athleten
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-lime-400 rounded-full" />
                Spezialisierung auf Skill Development
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-lime-400 rounded-full" />
                Erfahrung mit allen Altersgruppen
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
