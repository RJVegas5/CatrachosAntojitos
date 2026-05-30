import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Catrachos Antojitos. Call, email, or follow us on social media. Based in Las Vegas, NV.",
};

export default function ContactPage() {
  return <ContactClient />;
}
