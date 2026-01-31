import { setRequestLocale } from 'next-intl/server';

export default async function DatenschutzPage({
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
            Datenschutz
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose">
          <h2>1. Datenschutz auf einen Blick</h2>
          <p>
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck 
            der Verarbeitung von personenbezogenen Daten auf dieser Website auf.
          </p>

          <h2>2. Verantwortlicher</h2>
          <p>
            Long-Yun Cam<br />
            Musterstraße 123<br />
            10115 Berlin<br />
            E-Mail: kontakt@hoopkultur.de
          </p>

          <h2>3. Datenerfassung auf dieser Website</h2>
          <p>
            Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener 
            Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben 
            werden, erfolgt dies auf freiwilliger Basis.
          </p>

          <h2>4. Kontakt über WhatsApp</h2>
          <p>
            Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Telefonnummer und 
            Nachrichten verarbeitet. Dies geschieht auf Grundlage Ihrer Einwilligung 
            gemäß Art. 6 Abs. 1 lit. a DSGVO.
          </p>
        </div>
      </section>
    </>
  );
}
