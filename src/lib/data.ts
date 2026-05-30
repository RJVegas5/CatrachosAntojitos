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
  image: string;
  fallbackEmoji: string;
  badges: string[];
  spicy?: boolean;
  vegetarian?: boolean;
};

export const MENU_ITEMS: MenuItem[] = [
  // ── BALEADAS ──────────────────────────────────────
  {
    id: 1,
    category: "Baleadas",
    name: "Baleada Sencilla",
    description: "Thick hand-pressed flour tortilla filled with creamy refried beans, fresh crema, and crumbled queso fresco — the Honduran staple.",
    // Thick flour tortilla with cheese/filling (verified: pexels 7613678)
    image: "https://images.pexels.com/photos/7613678/pexels-photo-7613678.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🫓",
    badges: ["Popular"],
    vegetarian: true,
  },
  {
    id: 2,
    category: "Baleadas",
    name: "Baleada Especial",
    description: "Our signature baleada loaded with refried beans, crema, queso, scrambled eggs, and your choice of chicken or beef.",
    // Large tortilla plate with black beans and sauces (verified: pexels 13752942)
    image: "https://images.pexels.com/photos/13752942/pexels-photo-13752942.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🫓",
    badges: ["Best Seller", "Popular"],
  },
  {
    id: 3,
    category: "Baleadas",
    name: "Baleada de Pollo",
    description: "Marinated grilled chicken, refried beans, crema, and queso fresco in a thick hand-pressed flour tortilla.",
    // Open flour tortilla with grilled meat, cilantro, avocado, lime (verified: pexels 5454020)
    image: "https://images.pexels.com/photos/5454020/pexels-photo-5454020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🫓",
    badges: [],
  },
  {
    id: 4,
    category: "Baleadas",
    name: "Baleada de Carne",
    description: "Slow-seasoned beef, refried beans, crema, and queso fresco wrapped in a fresh-pressed tortilla.",
    // Tortilla open face with seasoned beef filling (verified: pexels 5454020 alt crop)
    image: "https://images.pexels.com/photos/5454020/pexels-photo-5454020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop&fp-y=0.6",
    fallbackEmoji: "🫓",
    badges: [],
    spicy: true,
  },
  // ── PASTELITOS ────────────────────────────────────
  {
    id: 5,
    category: "Pastelitos",
    name: "Pastelitos de Pollo",
    description: "Golden crispy corn masa pockets packed with seasoned chicken, topped with shredded cabbage and house salsa roja.",
    // Plate of golden fried empanadas (verified: unsplash 1624128082323)
    image: "https://images.unsplash.com/photo-1624128082323-beb6b8b508db?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥟",
    badges: ["Popular"],
  },
  {
    id: 6,
    category: "Pastelitos",
    name: "Pastelitos de Carne",
    description: "Crispy fried masa shells filled with slow-cooked beef, served with pickled cabbage, crema, and hot sauce.",
    // Fried empanadas on dark plate with salad (verified: unsplash 1543738066)
    image: "https://images.unsplash.com/photo-1543738066-49621e5b1f87?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥟",
    badges: [],
    spicy: true,
  },
  {
    id: 7,
    category: "Pastelitos",
    name: "Pastelitos de Papa",
    description: "Vegetarian golden-fried corn cakes stuffed with seasoned potato, topped with crema, queso, and house salsa.",
    // Fried pastry strips in bowl (verified: unsplash 1646314230198)
    image: "https://images.unsplash.com/photo-1646314230198-e27c375e1a2a?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥟",
    badges: ["Vegetarian"],
    vegetarian: true,
  },
  // ── TAJADAS ───────────────────────────────────────
  {
    id: 8,
    category: "Tajadas",
    name: "Tajadas con Pollo",
    description: "A mountain of crispy fried green plantain slices piled with grilled chicken, cabbage slaw, crema, and queso.",
    // Tostones plate with protein and Latin sides (verified: unsplash 1567030492990)
    image: "https://images.unsplash.com/photo-1567030492990-950d9855154b?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍌",
    badges: ["Popular"],
  },
  {
    id: 9,
    category: "Tajadas",
    name: "Tajadas con Carne",
    description: "Crunchy green plantain chips loaded with seasoned beef, pickled cabbage, and house sauces.",
    // Fried whole fish with tostones, rice and salad — authentic Caribbean Latin plate (verified: pexels 5041491)
    image: "https://images.pexels.com/photos/5041491/pexels-photo-5041491.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🍌",
    badges: ["Best Seller"],
  },
  {
    id: 10,
    category: "Tajadas",
    name: "Tajadas Solas",
    description: "Classic Honduran fried green plantains — crispy, golden, and addictive. Served with fresh crema.",
    // Golden plantain chips on elegant setting (verified: unsplash 1577835371994)
    image: "https://images.unsplash.com/photo-1577835371994-379cc06f1fe5?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍌",
    badges: [],
    vegetarian: true,
  },
  // ── PLATES ────────────────────────────────────────
  {
    id: 11,
    category: "Plates",
    name: "Plato Típico",
    description: "The full Honduras experience: refried beans, white rice, tajadas, carne asada, fresh crema, and a hand-pressed tortilla.",
    // Full Latin platter with fried plantains, rice, fish, shrimp (verified: pexels 5041489)
    image: "https://images.pexels.com/photos/5041489/pexels-photo-5041489.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🍽️",
    badges: ["Popular", "Best Seller"],
  },
  {
    id: 12,
    category: "Plates",
    name: "Pollo con Arroz y Frijoles",
    description: "Grilled seasoned chicken with white rice, refried beans, sweet maduros, and crema.",
    // Grilled chicken with white rice and lime on sizzling plate (verified: unsplash 1636552550775)
    image: "https://images.unsplash.com/photo-1636552550775-9e6b065d0481?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍽️",
    badges: [],
  },
  {
    id: 13,
    category: "Plates",
    name: "Carne Asada Plate",
    description: "Chargrilled marinated skirt steak with chimol (Honduran pico de gallo), rice, beans, and warm tortillas.",
    // Grilled steak on wooden board with chimichurri and salad (verified: pexels 1251208)
    image: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🥩",
    badges: ["New"],
    spicy: true,
  },
  // ── SIDES ─────────────────────────────────────────
  {
    id: 14,
    category: "Sides",
    name: "Arroz con Frijoles",
    description: "Honduran-style white rice paired with silky slow-cooked refried black beans.",
    // Black beans and rice dish (verified: unsplash 1627906327792)
    image: "https://images.unsplash.com/photo-1627906327792-4ede6149189f?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍚",
    badges: [],
    vegetarian: true,
  },
  {
    id: 15,
    category: "Sides",
    name: "Maduros",
    description: "Sweet caramelized ripe plantains — soft, sticky, golden, and irresistible.",
    // Caramelized sweet plantains with fork (verified: unsplash 1563336522)
    image: "https://images.unsplash.com/photo-1563336522-c3bd728d3b45?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍌",
    badges: ["Popular"],
    vegetarian: true,
  },
  {
    id: 16,
    category: "Sides",
    name: "Elotes Locos",
    description: "Street-style corn smothered in crema, queso cotija, chile powder, and fresh lime juice.",
    // Elote with queso, chile powder and lime (verified: pexels 6133872)
    image: "https://images.pexels.com/photos/6133872/pexels-photo-6133872.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🌽",
    badges: ["New"],
    spicy: true,
  },
  // ── DRINKS ────────────────────────────────────────
  {
    id: 17,
    category: "Drinks",
    name: "Agua de Jamaica",
    description: "Ice-cold hibiscus water, lightly sweetened and deeply refreshing. A staple of Honduran street food.",
    // Pink/red agua fresca in glass dispenser (verified: pexels 5804024)
    image: "https://images.pexels.com/photos/5804024/pexels-photo-5804024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🥤",
    badges: ["Popular"],
    vegetarian: true,
  },
  {
    id: 18,
    category: "Drinks",
    name: "Horchata",
    description: "Creamy rice water with cinnamon and vanilla — sweet, smooth, and made fresh.",
    // Creamy white drink with star anise (verified: pexels 5946635)
    image: "https://images.pexels.com/photos/5946635/pexels-photo-5946635.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🥛",
    badges: [],
    vegetarian: true,
  },
  {
    id: 19,
    category: "Drinks",
    name: "Limonada Natural",
    description: "Fresh-squeezed lemonade with a pinch of salt — order it with a tajín rim for the full street food experience.",
    // Fresh lemonade in glass (unsplash 1513558161293)
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍋",
    badges: [],
    vegetarian: true,
  },
];

export const WEEKLY_SCHEDULE = [
  { day: "Monday",    location: "North Las Vegas Community Center", address: "1235 N. Bruce St, North Las Vegas, NV", hours: "11 AM – 7 PM", active: false },
  { day: "Tuesday",   location: "Meadows Mall Area",               address: "4300 Meadows Ln, Las Vegas, NV",        hours: "11 AM – 8 PM", active: false },
  { day: "Wednesday", location: "Downtown Las Vegas Arts District", address: "Arts District, Las Vegas, NV 89101",   hours: "11 AM – 9 PM", active: false },
  { day: "Thursday",  location: "Spring Valley Park",              address: "8425 W Spring Mountain Rd, Las Vegas", hours: "11 AM – 7 PM", active: false },
  { day: "Friday",    location: "Fremont Street Area",             address: "Fremont St, Las Vegas, NV 89101",      hours: "12 PM – 10 PM", active: false },
  { day: "Saturday",  location: "Summerlin Festival Grounds",      address: "1980 Festival Plaza Dr, Las Vegas",    hours: "10 AM – 9 PM",  active: true  },
  { day: "Sunday",    location: "Henderson Pavilion Area",         address: "200 S Green Valley Pkwy, Henderson",   hours: "11 AM – 6 PM",  active: false },
];

export const TODAY_LOCATION = {
  name: "Summerlin Festival Grounds",
  address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
  hours: "10 AM – 9 PM",
  mapsUrl: "https://maps.google.com/?q=1980+Festival+Plaza+Dr+Las+Vegas+NV",
};

export const CATERING_TYPES = [
  "Corporate Event",
  "Birthday Party / Quinceañera",
  "Wedding",
  "Church Event",
  "School Event",
  "Gym / Community Event",
  "Private Party",
  "Festival / Market",
  "Other",
];
