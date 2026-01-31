import { setRequestLocale } from 'next-intl/server';
import { MapPin, Clock, Car, Train } from 'lucide-react';

export default async function HallePage({
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
            Location
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 font-serif">
            Trainingshalle
          </h1>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Moderne Ausstattung für optimales Training
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500">Google Maps</span>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                  Standort Berlin
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Die Trainingshalle bietet optimale Bedingungen für dein Training – 
                  mit professionellem Boden, guter Beleuchtung und allem nötigen Equipment.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <MapPin className="text-lime-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">Musterstraße 123, 10115 Berlin</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <Clock className="text-lime-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Trainingszeiten</h3>
                    <p className="text-gray-600">Mo-Fr: 9-21 Uhr | Sa-So: 10-18 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <Train className="text-lime-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">ÖPNV</h3>
                    <p className="text-gray-600">U-Bahn Station in 5 Min Fußweg</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <Car className="text-lime-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Parken</h3>
                    <p className="text-gray-600">Kostenlose Parkplätze vorhanden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
