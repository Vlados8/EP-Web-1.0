import React from "react";
import type { Metadata } from "next";
import KarriereContent from "@/components/KarriereContent";

export const metadata: Metadata = {
  title: "Karriere | Empire Premium. Solarteur & SHK Jobs in Bremen",
  description:
    "Werden Sie Teil unseres meistergeführten Teams in Bremen! Wir suchen Anlagenmechaniker für Sanitär-, Heizungs- und Klimatechnik (m/w/d) sowie Elektroniker / Solarteure (m/w/d). Attraktives Gehalt, modernstes Werkzeug & Top-Team.",
  keywords: [
    "Jobs Solarteur Bremen",
    "Anlagenmechaniker SHK Job Bremen",
    "Elektroniker Stellenangebote Bremen",
    "Dachdecker PV Bremen",
    "Arbeitgeber Empire Premium Bau",
    "Handwerk Jobs Bremen erneuerbare Energien",
  ],
  alternates: {
    canonical: "https://empire-premium.de/karriere",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Anlagenmechaniker für Sanitär-, Heizungs- und Klimatechnik (m/w/d)",
      "description": "Installation, Wartung und Inbetriebnahme von hocheffizienten Wärmepumpensystemen (Luft-Wasser & Sole-Wasser) sowie deren hydraulischer Abgleich bei unseren Privat- und Gewerbekunden in Bremen & Umland.",
      "datePosted": "2026-05-24",
      "validThrough": "2027-05-24",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Empire Premium | Empire Premium Bau UG",
        "sameAs": "https://empire-premium.de"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hastedter Heerstraße 63",
          "addressLocality": "Bremen",
          "postalCode": "28207",
          "addressCountry": "DE"
        }
      },
      "skills": "Abgeschlossene SHK-Ausbildung, Erfahrung mit Wärmepumpensystemen, Führerschein Klasse B"
    },
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Elektroniker für Energie- und Gebäudetechnik / Solarteur (m/w/d)",
      "description": "AC-seitiger Anschluss von hochwertigen Photovoltaikanlagen, Hybrid-Wechselrichtern und Batteriespeichern (Pylontech/BYD). Umbau und Sanierung von Zählerschränken.",
      "datePosted": "2026-05-24",
      "validThrough": "2027-05-24",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Empire Premium | Empire Premium Bau UG",
        "sameAs": "https://empire-premium.de"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hastedter Heerstraße 63",
          "addressLocality": "Bremen",
          "postalCode": "28207",
          "addressCountry": "DE"
        }
      },
      "skills": "Ausbildung zum Elektroniker, AC-seitiger Anschluss von PV-Systemen, VDE-Normen"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KarriereContent />
    </>
  );
}
