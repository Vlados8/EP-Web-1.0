import React from "react";
import type { Metadata } from "next";
import SupportContent from "@/components/SupportContent";

export const metadata: Metadata = {
  title: "Support & Wartung | Empire Premium. Technischer Kundendienst Bremen",
  description:
    "Erhalten Sie meisterhaften Service für Ihre Solaranlage und Wärmepumpe in Bremen & Umland. 24/7 Notfall-Hotline, präventive Wartungsverträge & schnelle Hilfe bei Störungen.",
  keywords: [
    "Kundendienst Solaranlage Bremen",
    "Wartung Wärmepumpe Bremen",
    "Wechselrichter Reparatur Bremen",
    "Batteriespeicher Störung Bremen",
    "Technischer Support Empire Premium",
  ],
  alternates: {
    canonical: "https://empire-premium.de/support",
  },
};

export default function Page() {
  return <SupportContent />;
}
