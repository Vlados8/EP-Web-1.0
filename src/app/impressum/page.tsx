import React from "react";
import type { Metadata } from "next";
import ImpressumContent from "@/components/ImpressumContent";

export const metadata: Metadata = {
  title: "Impressum | Empire Premium. Solaranlagen & Wärmepumpen Bremen",
  description:
    "Rechtliche Hinweise und Anbieterkennzeichnung nach § 5 TMG für die Empire Premium Bau UG (Hastedter Heerstraße 63, Bremen). Geschäftsführer: Arkadi Saribekian.",
  keywords: [
    "Impressum Empire Premium",
    "Empire Premium Bau Impressum",
    "Geschäftsführer Arkadi Saribekian",
    "Solarfirma Bremen Impressum",
  ],
  alternates: {
    canonical: "https://empire-premium.de/impressum",
  },
};

export default function Page() {
  return <ImpressumContent />;
}
