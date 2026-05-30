import type { Metadata } from "next";
import CateringClient from "./CateringClient";

export const metadata: Metadata = {
  title: "Catering — Honduran Food Truck for Your Event",
  description:
    "Book Catrachos Antojitos for your corporate event, wedding, birthday party, church gathering, or private party in Las Vegas. Authentic Honduran catering.",
};

const cateringSchema = {
  "@context": "https://schema.org",
  "@type": "FoodService",
  name: "Catrachos Antojitos Catering",
  description: "Authentic Honduran food truck catering for events in Las Vegas, NV",
  url: "https://catrachosantojitos.com/catering",
  areaServed: { "@type": "City", name: "Las Vegas" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Catering Services",
    itemListElement: [
      "Corporate Event Catering",
      "Wedding Catering",
      "Birthday Party Catering",
      "Church Event Catering",
      "School Event Catering",
      "Private Party Catering",
    ],
  },
};

export default function CateringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringSchema) }} />
      <CateringClient />
    </>
  );
}
