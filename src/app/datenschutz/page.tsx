import React from "react";
import type { Metadata } from "next";
import DatenschutzContent from "@/components/DatenschutzContent";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Empire Premium.",
  description:
    "Datenschutzerklärung und DSGVO-konforme Informationen über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten bei Empire Premium (Empire Premium Bau UG).",
  keywords: [
    "Datenschutz Empire Premium",
    "DSGVO Solaranlage Bremen",
    "Datenschutzerklärung Empire Premium Bau",
  ],
  alternates: {
    canonical: "https://empire-premium.de/datenschutz",
  },
};

export default function Page() {
  return <DatenschutzContent />;
}
