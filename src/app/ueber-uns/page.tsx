import React from "react";
import type { Metadata } from "next";
import UeberUnsContent from "@/components/UeberUnsContent";

export const metadata: Metadata = {
  title: "Über uns | Empire Premium. Premium-Solar & Wärmepumpen",
  description:
    "Erfahren Sie mehr über Empire Premium (Empire Premium Bau UG Bremen). Als meistergeführter Komplettanbieter treiben wir die regionale Energiewende in Bremen & Niedersachsen voran. Erfahren Sie mehr über unsere Werte, Qualität & Engineering.",
  keywords: [
    "Über uns Empire Premium",
    "Empire Premium Bau Bremen",
    "Solarteur Bremen",
    "Heizungsbau Bremen meistergeführt",
    "Energiewende Bremen",
    "Photovoltaikanlage Norddeutschland",
  ],
  alternates: {
    canonical: "https://empire-premium.de/ueber-uns",
  },
};

export default function Page() {
  return <UeberUnsContent />;
}
