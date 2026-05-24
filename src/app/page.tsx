import React from "react";
import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Empire Premium | Premium-Solaranlagen & Wärmepumpen Bremen",
  description:
    "Erreichen Sie bis zu 100% Autarkie mit den intelligenten Energielösungen von Empire Premium (Empire Premium Bau UG Bremen). Meistergeführte Planung & Montage von Solaranlagen, Stromspeichern (BYD/Pylontech) und Wärmepumpen im Umkreis von 100 km. Jetzt bis zu 70% KfW-Förderung sichern.",
  keywords: [
    "Solaranlage Bremen",
    "Photovoltaik Bremen",
    "Wärmepumpe Bremen",
    "Wärmepumpe Oldenburg kaufen",
    "Photovoltaik Niedersachsen",
    "Empire Premium Bau",
    "BYD Batteriespeicher",
    "Pylontech Speicher",
    "Solarstrom Autarkie",
  ],
  alternates: {
    canonical: "https://empire-premium.de",
  },
  openGraph: {
    title: "Empire Premium | Premium-Solaranlagen & Wärmepumpen Bremen",
    description: "Intelligente Energie-Systemkomplexe für Ihr Eigenheim. Profitieren Sie von maximaler Energieautarkie und deutschem Qualitätsstandard.",
    url: "https://empire-premium.de",
    siteName: "Empire Premium",
    locale: "de_DE",
    type: "website",
  },
};

export default function Page() {
  return <HomeContent />;
}
