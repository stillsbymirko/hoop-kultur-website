import { setRequestLocale } from 'next-intl/server';

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="pt-32 pb-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Long-Yun Cam<br />
            HOOPKULTUR Basketball Training<br />
            Musterstraße 123<br />
            10115 Berlin
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 177 90 70 811<br />
            E-Mail: kontakt@hoopkultur.de
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE XXX XXX XXX
          </p>
        </div>
      </section>
    </>
  );
}
