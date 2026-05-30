import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

// Bebas Neue — loaded via CDN link since it's a display font
// We inject it via <link> in head for simplicity
const bebas = {
  variable: "--font-bebas",
  className: "",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://catrachosantojitos.com"),
  title: {
    default: "Catrachos Antojitos | Authentic Honduran Street Food Las Vegas",
    template: "%s | Catrachos Antojitos",
  },
  description:
    "Las Vegas' best Honduran food truck. Fresh hand-pressed baleadas, crispy pastelitos, loaded tajadas, and traditional Honduran plates. Available for catering — corporate events, weddings, quinceañeras, and more.",
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
    "Honduran food Henderson NV",
    "Honduran food Summerlin",
    "Honduran food North Las Vegas",
    "food truck Las Vegas events",
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
      "Las Vegas' best Honduran food truck. Fresh baleadas, pastelitos, tajadas & catering.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Catrachos Antojitos – Honduran Food Truck Las Vegas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catrachos Antojitos | Honduran Street Food Las Vegas",
    description: "Fresh baleadas, pastelitos, tajadas & more. Catering available in Las Vegas.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://catrachosantojitos.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["FoodEstablishment", "LocalBusiness", "FoodTruck"],
      "@id": "https://catrachosantojitos.com/#business",
      name: "Catrachos Antojitos",
      description: "Authentic Honduran street food truck serving Las Vegas, Henderson, Summerlin, and North Las Vegas.",
      url: "https://catrachosantojitos.com",
      telephone: "+17255550190",
      email: "info@catrachosantojitos.com",
      image: "https://catrachosantojitos.com/og-image.jpg",
      logo: "https://catrachosantojitos.com/logo.png",
      servesCuisine: ["Honduran", "Latin American", "Central American", "Street Food"],
      priceRange: "$$",
      hasMenu: "https://catrachosantojitos.com/menu",
      address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV", addressCountry: "US", postalCode: "89101" },
      geo: { "@type": "GeoCoordinates", latitude: 36.1699, longitude: -115.1398 },
      areaServed: [
        { "@type": "City", name: "Las Vegas" },
        { "@type": "City", name: "Henderson" },
        { "@type": "City", name: "North Las Vegas" },
        { "@type": "Place", name: "Summerlin, Las Vegas" },
      ],
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "11:00", closes: "21:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "21:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "18:00" },
      ],
      sameAs: [
        "https://instagram.com/catrachosantojitos",
        "https://tiktok.com/@catrachosantojitos",
        "https://facebook.com/catrachosantojitos",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://catrachosantojitos.com/#faq",
      mainEntity: [
        { "@type": "Question", name: "Where is the Catrachos Antojitos food truck located?", acceptedAnswer: { "@type": "Answer", text: "We rotate around Las Vegas daily — Summerlin, Henderson, Downtown, and more. Check our Locations page or follow us on Instagram for real-time updates." } },
        { "@type": "Question", name: "Do you offer catering in Las Vegas?", acceptedAnswer: { "@type": "Answer", text: "Yes! We cater corporate events, weddings, quinceañeras, birthday parties, church events, school events, and more. Visit our Catering page to submit an inquiry." } },
        { "@type": "Question", name: "Can I order Honduran food online in Las Vegas?", acceptedAnswer: { "@type": "Answer", text: "Yes — Catrachos Antojitos is available on Uber Eats and DoorDash for delivery in Las Vegas." } },
        { "@type": "Question", name: "What is a baleada?", acceptedAnswer: { "@type": "Answer", text: "A baleada is the most popular Honduran street food — a thick hand-pressed flour tortilla filled with refried beans, crema, and queso fresco. We offer several versions including chicken, beef, and the classic." } },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`} style={{ ["--font-bebas" as string]: "'Bebas Neue', Impact, sans-serif" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
