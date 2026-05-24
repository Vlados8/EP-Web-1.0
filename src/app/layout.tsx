import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Empire Premium | Premium-Solar & Wärmepumpen in Deutschland",
  description:
    "Erreichen Sie bis zu 100% Autarkie mit den intelligenten Energielösungen von Empire Premium (Empire Premium Bau UG Bremen). Modernste Photovoltaik-Paneele und hocheffiziente Wärmepumpen, nahtlos integriert. Jetzt bis zu 70% KfW-Förderung sichern.",
  keywords: [
    "Solarstrom",
    "Photovoltaik Deutschland",
    "Wärmepumpe Förderung",
    "Energiewende",
    "Autarkie Haus",
    "Heizung sanieren",
    "Premium Solaranlagen",
  ],
  authors: [{ name: "Empire Premium" }],
  openGraph: {
    title: "Empire Premium | Premium-Solar & Wärmepumpen",
    description: "Intelligente Energie-Systemkomplexe für Ihr Eigenheim. Profitieren Sie von maximaler Energieautarkie und deutschem Qualitätsstandard.",
    url: "https://empire-premium.de",
    siteName: "Empire Premium",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Empire Premium | Empire Premium Bau UG",
    "image": "https://empire-premium.de/solar_home_hero.png",
    "@id": "https://empire-premium.de/#localbusiness",
    "url": "https://empire-premium.de",
    "telephone": "+4917661951823",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hastedter Heerstraße 63",
      "addressLocality": "Bremen",
      "postalCode": "28207",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.072890,
      "longitude": 8.868770
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.empire-premium-bau.de"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Bremen" },
      { "@type": "AdministrativeArea", "name": "Bremerhaven" },
      { "@type": "AdministrativeArea", "name": "Oldenburg" },
      { "@type": "AdministrativeArea", "name": "Osnabrück" },
      { "@type": "AdministrativeArea", "name": "Delmenhorst" },
      { "@type": "AdministrativeArea", "name": "Wilhelmshaven" },
      { "@type": "AdministrativeArea", "name": "Cuxhaven" },
      { "@type": "AdministrativeArea", "name": "Verden (Aller)" },
      { "@type": "AdministrativeArea", "name": "Achim" },
      { "@type": "AdministrativeArea", "name": "Rotenburg (Wümme)" },
      { "@type": "AdministrativeArea", "name": "Nienburg (Weser)" },
      { "@type": "AdministrativeArea", "name": "Cloppenburg" },
      { "@type": "AdministrativeArea", "name": "Vechta" },
      { "@type": "AdministrativeArea", "name": "Weyhe" },
      { "@type": "AdministrativeArea", "name": "Stuhr" }
    ]
  };

  return (
    <html
      lang="de"
      className={`${geistSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-950 text-slate-100 selection:bg-emerald-500/20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
