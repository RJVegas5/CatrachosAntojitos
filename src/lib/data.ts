export const BRAND = {
  name: "Catrachos Antojitos",
  tagline: "Authentic Honduran Street Food in Las Vegas",
  phone: "(725) 555-0190",
  email: "info@catrachosantojitos.com",
  instagram: "https://instagram.com/catrachosantojitos",
  tiktok: "https://tiktok.com/@catrachosantojitos",
  facebook: "https://facebook.com/catrachosantojitos",
  uberEats: "https://ubereats.com",
  doorDash: "https://doordash.com",
};

export const MENU_CATEGORIES = [
  "All",
  "Baleadas",
  "Pastelitos",
  "Tajadas",
  "Plates",
  "Sides",
  "Drinks",
] as const;

export type MenuItem = {
  id: number;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badges: string[];
  spicy?: boolean;
};

export const MENU_ITEMS: MenuItem[] = [
  // BALEADAS
  {
    id: 1,
    category: "Baleadas",
    name: "Baleada Sencilla",
    description: "Thick flour tortilla filled with refried beans, crema, and queso fresco — the classic Honduran staple.",
    price: "$3.99",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80",
    badges: ["Popular"],
  },
  {
    id: 2,
    category: "Baleadas",
    name: "Baleada Especial",
    description: "Loaded with refried beans, crema, queso, scrambled eggs, and your choice of protein.",
    price: "$7.99",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    badges: ["Popular", "Best Seller"],
  },
  {
    id: 3,
    category: "Baleadas",
    name: "Baleada de Pollo",
    description: "Seasoned grilled chicken, refried beans, crema, queso fresco in a hand-pressed flour tortilla.",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&q=80",
    badges: [],
  },
  {
    id: 4,
    category: "Baleadas",
    name: "Baleada de Carne",
    description: "Tender seasoned beef, refried beans, crema, and queso wrapped in a thick tortilla.",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80",
    badges: ["Spicy"],
    spicy: true,
  },
  // PASTELITOS
  {
    id: 5,
    category: "Pastelitos",
    name: "Pastelitos de Pollo",
    description: "Golden fried corn masa pockets filled with seasoned chicken, topped with cabbage and salsa roja.",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1614777986387-015c2a89c853?w=600&q=80",
    badges: ["Popular"],
  },
  {
    id: 6,
    category: "Pastelitos",
    name: "Pastelitos de Carne",
    description: "Crispy masa shells packed with slow-cooked beef, served with pickled cabbage and hot sauce.",
    price: "$7.49",
    image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=600&q=80",
    badges: [],
    spicy: true,
  },
  {
    id: 7,
    category: "Pastelitos",
    name: "Pastelitos de Papa",
    description: "Vegetarian potato-filled fried corn cakes with crema, queso, and house salsa.",
    price: "$5.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    badges: ["Vegetarian"],
  },
  // TAJADAS
  {
    id: 8,
    category: "Tajadas",
    name: "Tajadas con Pollo",
    description: "Crispy fried green plantain slices piled with grilled chicken, cabbage, crema, and queso.",
    price: "$10.99",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    badges: ["Popular"],
  },
  {
    id: 9,
    category: "Tajadas",
    name: "Tajadas con Carne",
    description: "Crunchy plantain chips loaded with seasoned beef, pickled cabbage, and house sauces.",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?w=600&q=80",
    badges: ["Best Seller"],
  },
  {
    id: 10,
    category: "Tajadas",
    name: "Tajadas Solas",
    description: "Classic Honduran fried green plantains — crispy, salty, and addictive. Served with crema.",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    badges: [],
  },
  // PLATES
  {
    id: 11,
    category: "Plates",
    name: "Plato Típico",
    description: "The full Honduran experience: beans, rice, tajadas, carne asada, crema, and tortilla.",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
    badges: ["Popular", "Best Seller"],
  },
  {
    id: 12,
    category: "Plates",
    name: "Pollo con Arroz y Frijoles",
    description: "Grilled seasoned chicken with white rice, refried beans, sweet plantains, and crema.",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c8?w=600&q=80",
    badges: [],
  },
  {
    id: 13,
    category: "Plates",
    name: "Carne Asada Plate",
    description: "Chargrilled marinated skirt steak, chimol (Honduran pico), rice, beans, and tortillas.",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",
    badges: ["New"],
  },
  // SIDES
  {
    id: 14,
    category: "Sides",
    name: "Arroz con Frijoles",
    description: "Honduran-style white rice and perfectly seasoned refried black beans.",
    price: "$3.99",
    image: "https://images.unsplash.com/photo-1536304993881-ff86e0c9b775?w=600&q=80",
    badges: [],
  },
  {
    id: 15,
    category: "Sides",
    name: "Maduros",
    description: "Sweet caramelized ripe plantains — soft, golden, and irresistible.",
    price: "$3.49",
    image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?w=600&q=80",
    badges: ["Popular"],
  },
  {
    id: 16,
    category: "Sides",
    name: "Elotes Locos",
    description: "Street corn smothered in crema, queso, chile powder, and lime juice.",
    price: "$4.49",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&q=80",
    badges: ["New"],
    spicy: true,
  },
  // DRINKS
  {
    id: 17,
    category: "Drinks",
    name: "Agua de Jamaica",
    description: "Refreshing hibiscus water, lightly sweetened and ice cold. Straight from Honduras.",
    price: "$3.00",
    image: "https://images.unsplash.com/photo-1622597467836-f3e6c176e0e4?w=600&q=80",
    badges: ["Popular"],
  },
  {
    id: 18,
    category: "Drinks",
    name: "Horchata",
    description: "Creamy rice water with cinnamon and vanilla — a sweet, soothing classic.",
    price: "$3.00",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    badges: [],
  },
  {
    id: 19,
    category: "Drinks",
    name: "Limonada Natural",
    description: "Fresh-squeezed lemonade with a pinch of salt and optional tajín rim.",
    price: "$3.00",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80",
    badges: [],
  },
];

export const WEEKLY_SCHEDULE = [
  { day: "Monday", location: "North Las Vegas Community Center", address: "1235 N. Bruce St, North Las Vegas, NV", hours: "11:00 AM – 7:00 PM", active: false },
  { day: "Tuesday", location: "Meadows Mall Area", address: "4300 Meadows Ln, Las Vegas, NV", hours: "11:00 AM – 8:00 PM", active: false },
  { day: "Wednesday", location: "Downtown Las Vegas Arts District", address: "Arts District, Las Vegas, NV 89101", hours: "11:00 AM – 9:00 PM", active: false },
  { day: "Thursday", location: "Spring Valley Park", address: "8425 W Spring Mountain Rd, Las Vegas, NV", hours: "11:00 AM – 7:00 PM", active: false },
  { day: "Friday", location: "Fremont Street Area", address: "Fremont St, Las Vegas, NV 89101", hours: "12:00 PM – 10:00 PM", active: false },
  { day: "Saturday", location: "Summerlin Festival Grounds", address: "1980 Festival Plaza Dr, Las Vegas, NV", hours: "10:00 AM – 9:00 PM", active: true },
  { day: "Sunday", location: "Henderson Pavilion Area", address: "200 S Green Valley Pkwy, Henderson, NV", hours: "11:00 AM – 6:00 PM", active: false },
];

export const TODAY_LOCATION = {
  name: "Summerlin Festival Grounds",
  address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
  hours: "10:00 AM – 9:00 PM",
  mapsUrl: "https://maps.google.com/?q=1980+Festival+Plaza+Dr+Las+Vegas+NV",
};

export const CATERING_TYPES = [
  "Corporate Event",
  "Birthday Party",
  "Wedding",
  "Church Event",
  "School Event",
  "Gym / Community Event",
  "Private Party",
  "Festival / Market",
  "Other",
];
