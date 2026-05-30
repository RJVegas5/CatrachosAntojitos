import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://catrachosantojitos.com"),
  title: {
    default: "Catrachos Antojitos | Authentic Honduran Street Food Las Vegas",
    template: "%s | Catrachos Antojitos",
  },
  description:
    "Las Vegas' premier Honduran food truck. Fresh baleadas, pastelitos, tajadas, and traditional Honduran favorites. Available for catering — corporate events, weddings, parties & more.",
  keywords: [
    "Honduran food Las Vegas",
    "Honduran food truck Las Vegas",
    "baleadas Las Vegas",
    "Honduran catering Las Vegas",
    "Latin food truck Las Vegas",
    "authentic Honduran food near me",
    "food truck catering Las Vegas",
    "pastelitos Las Vegas",
    "tajadas Las Vegas",
    "Catrachos Antojitos",
  ],
  authors: [{ name: "Catrachos Antojitos" }],
  creator: "Catrachos Antojitos",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://catrachosantojitos.com",
    siteName: "Catrachos Antojitos",
    title: "Catrachos Antojitos | Authentic Honduran Street Food Las Vegas",
    description:
      "Las Vegas' premier Honduran food truck. Fresh baleadas, pastelitos, tajadas, and traditional Honduran favorites.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Catrachos Antojitos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catrachos Antojitos | Honduran Street Food Las Vegas",
    description: "Fresh baleadas, pastelitos, tajadas & more. Catering available in Las Vegas.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["FoodEstablishment", "LocalBusiness"],
      "@id": "https://catrachosantojitos.com/#business",
      name: "Catrachos Antojitos",
      description: "Authentic Honduran street food food truck in Las Vegas, NV",
      url: "https://catrachosantojitos.com",
      telephone: "+17255550190",
      email: "info@catrachosantojitos.com",
      image: "https://catrachosantojitos.com/og-image.jpg",
      servesCuisine: ["Honduran", "Latin American", "Street Food"],
      priceRange: "$$",
      hasMenu: "https://catrachosantojitos.com/menu",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        addressCountry: "US",
      },
      sameAs: [
        "https://instagram.com/catrachosantojitos",
        "https://tiktok.com/@catrachosantojitos",
        "https://facebook.com/catrachosantojitos",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
