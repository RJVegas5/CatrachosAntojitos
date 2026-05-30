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

// All images use Unsplash with explicit photo IDs that are reliable
// fallbackEmoji is shown if the image fails to load
export const MENU_ITEMS: MenuItem[] = [
  // BALEADAS
  {
    id: 1,
    category: "Baleadas",
    name: "Baleada Sencilla",
    description: "Thick hand-pressed flour tortilla filled with creamy refried beans, fresh crema, and crumbled queso fresco — the Honduran staple.",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🫓",
    badges: ["Popular"],
    vegetarian: true,
  },
  {
    id: 2,
    category: "Baleadas",
    name: "Baleada Especial",
    description: "Our signature baleada loaded with refried beans, crema, queso, scrambled eggs, and your choice of chicken or beef.",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🫓",
    badges: ["Best Seller", "Popular"],
  },
  {
    id: 3,
    category: "Baleadas",
    name: "Baleada de Pollo",
    description: "Marinated grilled chicken, refried beans, crema, and queso fresco in a thick hand-pressed flour tortilla.",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🫓",
    badges: [],
  },
  {
    id: 4,
    category: "Baleadas",
    name: "Baleada de Carne",
    description: "Slow-seasoned beef, refried beans, crema, and queso fresco wrapped in a fresh-pressed tortilla.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🫓",
    badges: [],
    spicy: true,
  },
  // PASTELITOS
  {
    id: 5,
    category: "Pastelitos",
    name: "Pastelitos de Pollo",
    description: "Golden crispy corn masa pockets packed with seasoned chicken, topped with shredded cabbage and house salsa roja.",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥟",
    badges: ["Popular"],
  },
  {
    id: 6,
    category: "Pastelitos",
    name: "Pastelitos de Carne",
    description: "Crispy fried masa shells filled with slow-cooked beef, served with pickled cabbage, crema, and hot sauce.",
    image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥟",
    badges: [],
    spicy: true,
  },
  {
    id: 7,
    category: "Pastelitos",
    name: "Pastelitos de Papa",
    description: "Vegetarian golden-fried corn cakes stuffed with seasoned potato, topped with crema, queso, and house salsa.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥟",
    badges: ["Vegetarian"],
    vegetarian: true,
  },
  // TAJADAS
  {
    id: 8,
    category: "Tajadas",
    name: "Tajadas con Pollo",
    description: "A mountain of crispy fried green plantain slices piled with grilled chicken, cabbage slaw, crema, and queso.",
    image: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍌",
    badges: ["Popular"],
  },
  {
    id: 9,
    category: "Tajadas",
    name: "Tajadas con Carne",
    description: "Crunchy green plantain chips loaded with seasoned beef, pickled cabbage, and house sauces.",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍌",
    badges: ["Best Seller"],
  },
  {
    id: 10,
    category: "Tajadas",
    name: "Tajadas Solas",
    description: "Classic Honduran fried green plantains — crispy, golden, and addictive. Served with fresh crema.",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍌",
    badges: [],
    vegetarian: true,
  },
  // PLATES
  {
    id: 11,
    category: "Plates",
    name: "Plato Típico",
    description: "The full Honduras experience: refried beans, white rice, tajadas, carne asada, fresh crema, and a hand-pressed tortilla.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍽️",
    badges: ["Popular", "Best Seller"],
  },
  {
    id: 12,
    category: "Plates",
    name: "Pollo con Arroz y Frijoles",
    description: "Grilled seasoned chicken with white rice, refried beans, sweet maduros, and crema.",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c8?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍽️",
    badges: [],
  },
  {
    id: 13,
    category: "Plates",
    name: "Carne Asada Plate",
    description: "Chargrilled marinated skirt steak with chimol (Honduran pico de gallo), rice, beans, and warm tortillas.",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥩",
    badges: ["New"],
    spicy: true,
  },
  // SIDES
  {
    id: 14,
    category: "Sides",
    name: "Arroz con Frijoles",
    description: "Honduran-style white rice paired with silky slow-cooked refried black beans.",
    image: "https://images.unsplash.com/photo-1536304993881-ff86e0c9b775?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍚",
    badges: [],
    vegetarian: true,
  },
  {
    id: 15,
    category: "Sides",
    name: "Maduros",
    description: "Sweet caramelized ripe plantains — soft, sticky, golden, and irresistible.",
    image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🍌",
    badges: ["Popular"],
    vegetarian: true,
  },
  {
    id: 16,
    category: "Sides",
    name: "Elotes Locos",
    description: "Street-style corn smothered in crema, queso cotija, chile powder, and fresh lime juice.",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🌽",
    badges: ["New"],
    spicy: true,
  },
  // DRINKS
  {
    id: 17,
    category: "Drinks",
    name: "Agua de Jamaica",
    description: "Ice-cold hibiscus water, lightly sweetened and deeply refreshing. A staple of Honduran street food.",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥤",
    badges: ["Popular"],
    vegetarian: true,
  },
  {
    id: 18,
    category: "Drinks",
    name: "Horchata",
    description: "Creamy rice water with cinnamon and vanilla — sweet, smooth, and made fresh.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop&q=80",
    fallbackEmoji: "🥛",
    badges: [],
    vegetarian: true,
  },
  {
    id: 19,
    category: "Drinks",
    name: "Limonada Natural",
    description: "Fresh-squeezed lemonade with a pinch of salt — order it with a tajín rim for the full street food experience.",
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
