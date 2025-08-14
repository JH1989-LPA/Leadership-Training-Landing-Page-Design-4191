import React from 'react';
import { Link } from 'react-router-dom';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="mb-8">
            <Link to="/" className="text-primary hover:underline">
              ← Zurück zur Startseite
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="prose prose-lg max-w-none">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>People Excellence GmbH</strong><br />
              Julian Hessler<br />
              Lessingstraße 56<br />
              64289 Darmstadt
            </p>

            <h3>Kontakt</h3>
            <p>
              Telefon: +49 (0) 6151 629 4991<br />
              E-Mail: info@people-excellence.eu
            </p>

            <h3>Registereintrag</h3>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Darmstadt<br />
              Registernummer: HRB 98765
            </p>

            <h3>Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>

            <h3>EU-Streitschlichtung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a><br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h3>Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
              rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
              Seiten verantwortlich.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;