import type { Metadata } from "next";
import LocationsClient from "./LocationsClient";

export const metadata: Metadata = {
  title: "Locations & Schedule — Find the Truck",
  description:
    "Find Catrachos Antojitos food truck around Las Vegas. Check our weekly schedule, today's location, and upcoming events. We also cater private events.",
};

export default function LocationsPage() {
  return <LocationsClient />;
}
