import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu — Baleadas, Pastelitos, Tajadas & More",
  description:
    "Explore the full Catrachos Antojitos menu: baleadas, pastelitos, tajadas, plato típico, sides and drinks. Authentic Honduran street food in Las Vegas.",
};

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": "https://catrachosantojitos.com/menu",
  name: "Catrachos Antojitos Menu",
  description: "Authentic Honduran street food menu",
  hasMenuSection: [
    { "@type": "MenuSection", name: "Baleadas" },
    { "@type": "MenuSection", name: "Pastelitos" },
    { "@type": "MenuSection", name: "Tajadas" },
    { "@type": "MenuSection", name: "Plates" },
    { "@type": "MenuSection", name: "Sides" },
    { "@type": "MenuSection", name: "Drinks" },
  ],
};

export default function MenuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />
      <MenuClient />
    </>
  );
}
