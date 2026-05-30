import type { Metadata } from "next";
import HomepageClient from "@/components/HomepageClient";

export const metadata: Metadata = {
  title: "Catrachos Antojitos | Authentic Honduran Street Food Las Vegas",
  description:
    "Las Vegas' premier Honduran food truck. Fresh baleadas, pastelitos, tajadas & catering. Find us around the valley or book us for your next event.",
};

export default function HomePage() {
  return <HomepageClient />;
}
