import React from 'react';
import { Link } from 'react-router-dom';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="mb-8">
            <Link to="/" className="text-primary hover:underline">
              ← Zurück zur Startseite
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none">
            <h2>1. Datenschutz auf einen Blick</h2>
            
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h4>Wie erfassen wir Ihre Daten?</h4>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
              Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h3>Externes Hosting</h3>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
              Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. 
              Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine 
              Website generiert werden, handeln.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
              Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              <strong>People Excellence GmbH</strong><br />
              Julian Hessler<br />
              Lessingstraße 56<br />
              64289 Darmstadt<br />
              Telefon: +49 (0) 6151 629 4991<br />
              E-Mail: info@people-excellence.eu
            </p>

            <h3>Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
              Datenverarbeitung entfällt.
            </p>

            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit 
              der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>
            
            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage 
              inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) 
              zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>

            <h2>5. Plugins und Tools</h2>
            
            <h3>Google Fonts (lokales Hosting)</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, 
              die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. 
              Eine Verbindung zu Servern von Google findet dabei nicht statt.
            </p>

            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und 
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem 
              ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;