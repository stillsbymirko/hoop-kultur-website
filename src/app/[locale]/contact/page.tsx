import { setRequestLocale } from 'next-intl/server';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default async function ContactPage({
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
          <span className="text-[#f5f0e8] font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 font-serif">
            Starte jetzt
          </h1>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Schreib mir eine Nachricht und wir besprechen deine Ziele.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                  Kontaktiere mich
                </h2>
                <p className="text-gray-600">
                  Der schnellste Weg ist über WhatsApp. Ich antworte in der Regel 
                  innerhalb weniger Stunden.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/4917790708811"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+49 177 90 70 811</p>
                  </div>
                </a>

                <a
                  href="mailto:kontakt@hoopkultur.de"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                    <Mail className="text-gray-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">E-Mail</h3>
                    <p className="text-gray-600">kontakt@hoopkultur.de</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Standort</h3>
                    <p className="text-gray-600">Berlin, Deutschland</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Clock className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Antwortzeit</h3>
                    <p className="text-gray-600">Meist innerhalb von 2-4 Stunden</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl text-center flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Kostenloses Erstgespräch
              </h3>
              <p className="text-gray-400 mb-8">
                Lass uns unverbindlich über deine Ziele sprechen und herausfinden, 
                wie ich dir helfen kann.
              </p>
              <a
                href="https://wa.me/4917790708811?text=Hi!%20Ich%20interessiere%20mich%20f%C3%BCr%20ein%20kostenloses%20Erstgespr%C3%A4ch."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#f5f0e8] hover:bg-[#ebe4d8] text-gray-900 px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Jetzt Termin vereinbaren
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
