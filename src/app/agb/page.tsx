import React from "react";
import type { Metadata } from "next";
import AgbContent from "@/components/AgbContent";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen | Empire Premium.",
  description:
    "Allgemeine Geschäftsbedingungen (AGB) für die Lieferung, Planung, Montage und Inbetriebnahme von Photovoltaikanlagen und Wärmepumpen durch Empire Premium (Empire Premium Bau UG).",
  keywords: [
    "AGB Empire Premium",
    "Vertragsbedingungen Solar Bremen",
    "AGB Empire Premium Bau",
  ],
  alternates: {
    canonical: "https://empire-premium.de/agb",
  },
};

export default function Page() {
  return <AgbContent />;
}
