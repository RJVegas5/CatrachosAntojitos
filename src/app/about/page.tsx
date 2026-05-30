import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — Our Honduran Story",
  description:
    "Learn about Catrachos Antojitos — a family-owned Honduran food truck in Las Vegas born from love of authentic Honduran cuisine and a desire to share it with the world.",
};

export default function AboutPage() {
  return <AboutClient />;
}
