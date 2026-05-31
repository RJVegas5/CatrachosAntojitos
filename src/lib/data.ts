export const BRAND = {
  name: "Catrachos Antojitos",
  tagline: "Authentic Honduran Street Food — Coming to Las Vegas",
  phone: "(725) 555-0190",
  email: "info@catrachosantojitos.com",
  instagram: "https://instagram.com/catrachosantojitos",
  tiktok: "https://tiktok.com/@catrachosantojitos",
  facebook: "https://facebook.com/catrachosantojitos",
};

// Grand opening target — Labor Day weekend Las Vegas
export const LAUNCH_DATE = new Date("2026-09-05T11:00:00-07:00");
export const LAUNCH_LOCATION = "Las Vegas, NV & Surrounding Areas";
export const LAUNCH_AREA = "Serving Las Vegas · Henderson · Summerlin · North Las Vegas";

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
    id: 1, category: "Baleadas", name: "Baleada Sencilla",
    description: "Thick hand-pressed flour tortilla filled with creamy refried beans, fresh crema, and crumbled queso fresco — the Honduran staple.",
    image: "https://images.pexels.com/photos/7613678/pexels-photo-7613678.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🫓", badges: ["Popular"], vegetarian: true,
  },
  {
    id: 2, category: "Baleadas", name: "Baleada Especial",
    description: "Our signature baleada loaded with refried beans, crema, queso, scrambled eggs, and your choice of chicken or beef.",
    image: "https://images.pexels.com/photos/13752942/pexels-photo-13752942.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🫓", badges: ["Best Seller", "Popular"],
  },
  {
    id: 3, category: "Baleadas", name: "Baleada de Pollo",
    description: "Marinated grilled chicken, refried beans, crema, and queso fresco in a thick hand-pressed flour tortilla.",
    image: "https://images.pexels.com/photos/5454020/pexels-photo-5454020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🫓", badges: [],
  },
  {
    id: 4, category: "Baleadas", name: "Baleada de Carne",
    description: "Slow-seasoned beef, refried beans, crema, and queso fresco wrapped in a fresh-pressed tortilla.",
    image: "https://images.pexels.com/photos/5454020/pexels-photo-5454020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop&fp-y=0.6",
    fallbackEmoji: "🫓", badges: [], spicy: true,
  },
  // ── PASTELITOS ────────────────────────────────────
  {
    id: 5, category: "Pastelitos", name: "Pastelitos de Pollo",
    description: "Golden crispy corn masa pockets packed with seasoned chicken, topped with shredded cabbage and house salsa roja.",
    image: "https://images.unsplash.com/photo-1624128082323-beb6b8b508db?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥟", badges: ["Popular"],
  },
  {
    id: 6, category: "Pastelitos", name: "Pastelitos de Carne",
    description: "Crispy fried masa shells filled with slow-cooked beef, served with pickled cabbage, crema, and hot sauce.",
    image: "https://images.unsplash.com/photo-1543738066-49621e5b1f87?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥟", badges: [], spicy: true,
  },
  {
    id: 7, category: "Pastelitos", name: "Pastelitos de Papa",
    description: "Vegetarian golden-fried corn cakes stuffed with seasoned potato, topped with crema, queso, and house salsa.",
    image: "https://images.unsplash.com/photo-1646314230198-e27c375e1a2a?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥟", badges: ["Vegetarian"], vegetarian: true,
  },
  // ── TAJADAS ───────────────────────────────────────
  {
    id: 8, category: "Tajadas", name: "Tajadas con Pollo",
    description: "A mountain of crispy fried green plantain slices piled with grilled chicken, cabbage slaw, crema, and queso.",
    image: "https://images.unsplash.com/photo-1567030492990-950d9855154b?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍌", badges: ["Popular"],
  },
  {
    id: 9, category: "Tajadas", name: "Tajadas con Carne",
    description: "Crunchy green plantain chips loaded with seasoned beef, pickled cabbage, and house sauces.",
    image: "https://images.pexels.com/photos/5041491/pexels-photo-5041491.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🍌", badges: ["Best Seller"],
  },
  {
    id: 10, category: "Tajadas", name: "Tajadas Solas",
    description: "Classic Honduran fried green plantains — crispy, golden, and addictive. Served with fresh crema.",
    image: "https://images.unsplash.com/photo-1577835371994-379cc06f1fe5?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍌", badges: [], vegetarian: true,
  },
  // ── PLATES ────────────────────────────────────────
  {
    id: 11, category: "Plates", name: "Plato Típico",
    description: "The full Honduras experience: refried beans, white rice, tajadas, carne asada, fresh crema, and a hand-pressed tortilla.",
    image: "https://images.pexels.com/photos/5041489/pexels-photo-5041489.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🍽️", badges: ["Popular", "Best Seller"],
  },
  {
    id: 12, category: "Plates", name: "Pollo con Arroz y Frijoles",
    description: "Grilled seasoned chicken with white rice, refried beans, sweet maduros, and crema.",
    image: "https://images.unsplash.com/photo-1636552550775-9e6b065d0481?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍽️", badges: [],
  },
  {
    id: 13, category: "Plates", name: "Carne Asada Plate",
    description: "Chargrilled marinated skirt steak with chimol (Honduran pico de gallo), rice, beans, and warm tortillas.",
    image: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🥩", badges: ["New"], spicy: true,
  },
  // ── SIDES ─────────────────────────────────────────
  {
    id: 14, category: "Sides", name: "Arroz con Frijoles",
    description: "Honduran-style white rice paired with silky slow-cooked refried black beans.",
    image: "https://images.unsplash.com/photo-1627906327792-4ede6149189f?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍚", badges: [], vegetarian: true,
  },
  {
    id: 15, category: "Sides", name: "Maduros",
    description: "Sweet caramelized ripe plantains — soft, sticky, golden, and irresistible.",
    image: "https://images.unsplash.com/photo-1563336522-c3bd728d3b45?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍌", badges: ["Popular"], vegetarian: true,
  },
  {
    id: 16, category: "Sides", name: "Elotes Locos",
    description: "Street-style corn smothered in crema, queso cotija, chile powder, and fresh lime juice.",
    image: "https://images.pexels.com/photos/6133872/pexels-photo-6133872.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🌽", badges: ["New"], spicy: true,
  },
  // ── DRINKS ────────────────────────────────────────
  {
    id: 17, category: "Drinks", name: "Agua de Jamaica",
    description: "Ice-cold hibiscus water, lightly sweetened and deeply refreshing. A staple of Honduran street food.",
    image: "https://images.pexels.com/photos/5804024/pexels-photo-5804024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🥤", badges: ["Popular"], vegetarian: true,
  },
  {
    id: 18, category: "Drinks", name: "Horchata",
    description: "Creamy rice water with cinnamon and vanilla — sweet, smooth, and made fresh.",
    image: "https://images.pexels.com/photos/5946635/pexels-photo-5946635.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    fallbackEmoji: "🥛", badges: [], vegetarian: true,
  },
  {
    id: 19, category: "Drinks", name: "Limonada Natural",
    description: "Fresh-squeezed lemonade with a pinch of salt — order it with a tajín rim for the full street food experience.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍋", badges: [], vegetarian: true,
  },
];

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

export const CATERING_EVENT_CARDS = [
  { emoji: "💍", title: "Weddings",        desc: "Make your reception unforgettable with authentic Honduran street food." },
  { emoji: "🏢", title: "Corporate",       desc: "Impress your team and clients with a food truck experience at your event." },
  { emoji: "🎂", title: "Birthdays",       desc: "Quince, milestone birthdays, kids' parties — we bring the fiesta." },
  { emoji: "👑", title: "Quinceañeras",    desc: "The most important day deserves the most authentic Honduran flavors." },
  { emoji: "⛪", title: "Church Events",   desc: "Community gatherings, fundraisers, and potlucks done right." },
  { emoji: "🎪", title: "Festivals",       desc: "Markets, outdoor events, and community festivals across Las Vegas." },
];
