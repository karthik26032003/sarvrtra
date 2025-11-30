// SARVRTRA Product Catalog
// Brass, Wood, and Hindu Artifacts for Home Decor

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  image: string;
  images?: string[];
  materials: string[];
  category: string;
  subcategory?: string;
  room?: string[];
  dimensions?: string;
  weight?: string;
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  rating?: number;
  reviews?: number;
}

// Using placeholder images - these would be replaced with actual product images
// Format: https://images.unsplash.com/photo-[ID]?w=800&q=80

export const products: Product[] = [
  // ==================== BRASS IDOLS ====================
  {
    id: "brass-ganesha-001",
    name: "Brass Ganesha Idol - Blessing Pose",
    price: 4999,
    originalPrice: 5999,
    description: "This exquisite brass Ganesha idol depicts Lord Ganesha in the Abhaya Mudra (blessing pose), symbolizing protection and fearlessness. Handcrafted by skilled artisans from Moradabad, known as 'Pital Nagri' (Brass City), this piece showcases traditional lost-wax casting technique. Perfect for your pooja room or as a statement piece in your living area.",
    shortDescription: "Handcrafted brass Ganesha in blessing pose",
    image: "https://images.unsplash.com/photo-1567591414240-e9c1e838eb0e?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Idols",
    subcategory: "Ganesha",
    room: ["Pooja Room", "Living Room", "Entrance"],
    dimensions: "8\" H x 5\" W x 4\" D",
    weight: "1.2 kg",
    inStock: true,
    featured: true,
    bestSeller: true,
    rating: 4.9,
    reviews: 128
  },
  {
    id: "brass-lakshmi-002",
    name: "Brass Lakshmi Statue - Standing",
    price: 5499,
    originalPrice: 6499,
    description: "Beautiful brass statue of Goddess Lakshmi, the deity of wealth and prosperity. Standing gracefully on a lotus pedestal, she holds symbolic items representing spiritual and material abundance. This statue brings auspiciousness to your home and is ideal for Diwali decorations or year-round worship.",
    shortDescription: "Goddess Lakshmi standing on lotus pedestal",
    image: "https://images.unsplash.com/photo-1609902726285-00668009f004?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Idols",
    subcategory: "Lakshmi",
    room: ["Pooja Room", "Living Room"],
    dimensions: "10\" H x 4\" W x 3\" D",
    weight: "1.5 kg",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 95
  },
  {
    id: "brass-nataraja-003",
    name: "Brass Nataraja - Dancing Shiva",
    price: 8999,
    originalPrice: 10999,
    description: "Magnificent brass Nataraja depicting Lord Shiva performing the cosmic dance of creation and destruction. This iconic representation shows Shiva within the ring of fire (Prabha Mandala), standing on the demon of ignorance. A masterpiece of South Indian bronze casting tradition, perfect as a centerpiece for art collectors.",
    shortDescription: "Lord Shiva performing the cosmic dance",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    materials: ["Brass", "Handcrafted", "Antique Finish"],
    category: "Idols",
    subcategory: "Shiva",
    room: ["Living Room", "Study", "Pooja Room"],
    dimensions: "12\" H x 10\" W x 4\" D",
    weight: "2.8 kg",
    inStock: true,
    featured: true,
    bestSeller: true,
    rating: 5.0,
    reviews: 67
  },
  {
    id: "brass-krishna-004",
    name: "Brass Krishna with Flute",
    price: 3999,
    originalPrice: 4799,
    description: "Enchanting brass idol of Lord Krishna playing his divine flute. This beautifully crafted piece captures the essence of Krishna's playful and loving nature. The intricate detailing on the peacock feather crown and ornaments showcase exceptional craftsmanship. Ideal for devotees and art enthusiasts alike.",
    shortDescription: "Lord Krishna playing divine flute",
    image: "https://images.unsplash.com/photo-1606293926249-ed22e446d476?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Idols",
    subcategory: "Krishna",
    room: ["Pooja Room", "Living Room", "Bedroom"],
    dimensions: "7\" H x 3\" W x 3\" D",
    weight: "800 g",
    inStock: true,
    newArrival: true,
    rating: 4.7,
    reviews: 83
  },
  {
    id: "brass-buddha-005",
    name: "Brass Meditating Buddha",
    price: 4499,
    originalPrice: 5299,
    description: "Serene brass Buddha statue in deep meditation pose (Dhyana Mudra). This peaceful representation brings tranquility and mindfulness to any space. Features fine detailing on the robes and serene facial expression. Perfect for meditation corners, zen gardens, or as a calming presence in your home.",
    shortDescription: "Peaceful Buddha in meditation pose",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Idols",
    subcategory: "Buddha",
    room: ["Living Room", "Meditation Room", "Garden"],
    dimensions: "8\" H x 6\" W x 4\" D",
    weight: "1.3 kg",
    inStock: true,
    rating: 4.8,
    reviews: 112
  },

  // ==================== BRASS DIYAS & LAMPS ====================
  {
    id: "brass-diya-006",
    name: "Traditional Brass Diya Set (5 Pcs)",
    price: 1299,
    originalPrice: 1599,
    description: "Set of 5 traditional brass diyas with intricate floral patterns. These oil lamps are essential for Hindu rituals, festivals, and daily pooja. The classic design with lotus petal edges creates a beautiful pattern when lit. Perfect for Diwali, weddings, and spiritual ceremonies.",
    shortDescription: "Set of 5 traditional oil lamps",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Lighting",
    subcategory: "Diyas",
    room: ["Pooja Room", "Living Room"],
    dimensions: "3\" diameter each",
    weight: "400 g (set)",
    inStock: true,
    bestSeller: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: "brass-vilakku-007",
    name: "Brass Nilavilakku (Kerala Lamp)",
    price: 3499,
    originalPrice: 4199,
    description: "Traditional Kerala-style Nilavilakku (standing lamp) in brass. This iconic South Indian lamp is lit during auspicious occasions and daily worship. Features a graceful multi-tiered design with detailed engravings. A symbol of prosperity and divine light in Hindu households.",
    shortDescription: "Traditional Kerala standing lamp",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Lighting",
    subcategory: "Standing Lamps",
    room: ["Pooja Room", "Entrance", "Living Room"],
    dimensions: "18\" H x 6\" W",
    weight: "1.8 kg",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: "brass-peacock-lamp-008",
    name: "Brass Peacock Diya Lamp",
    price: 2799,
    originalPrice: 3299,
    description: "Stunning brass diya featuring an ornate peacock design. The peacock, India's national bird and a symbol of grace, is beautifully rendered with detailed feather work. Multiple oil cups allow for a gorgeous display of lights. Perfect for festive decorations and special occasions.",
    shortDescription: "Ornate peacock design oil lamp",
    image: "https://images.unsplash.com/photo-1606293926249-ed22e446d476?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Lighting",
    subcategory: "Decorative Lamps",
    room: ["Living Room", "Pooja Room"],
    dimensions: "10\" H x 8\" W",
    weight: "1.1 kg",
    inStock: true,
    newArrival: true,
    rating: 4.7,
    reviews: 56
  },

  // ==================== BRASS BELLS & POOJA ITEMS ====================
  {
    id: "brass-bell-009",
    name: "Brass Temple Bell (Ghanta)",
    price: 1899,
    originalPrice: 2299,
    description: "Traditional brass temple bell with a deep, resonant tone. The sound of this bell is believed to ward off evil spirits and invoke divine blessings. Features intricate engravings and a comfortable grip handle. Essential for daily pooja and temple rituals.",
    shortDescription: "Traditional temple bell with resonant tone",
    image: "https://images.unsplash.com/photo-1567591414240-e9c1e838eb0e?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Pooja Items",
    subcategory: "Bells",
    room: ["Pooja Room", "Temple"],
    dimensions: "6\" H x 3\" diameter",
    weight: "450 g",
    inStock: true,
    rating: 4.9,
    reviews: 167
  },
  {
    id: "brass-pooja-thali-010",
    name: "Brass Pooja Thali Set (7 Pcs)",
    price: 2499,
    originalPrice: 2999,
    description: "Complete brass pooja thali set including the main plate, small bowls for kumkum and haldi, incense holder, diya, bell, and spoon. Each piece features traditional engravings. This comprehensive set has everything needed for daily worship rituals.",
    shortDescription: "Complete 7-piece pooja thali set",
    image: "https://images.unsplash.com/photo-1609902726285-00668009f004?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Pooja Items",
    subcategory: "Thali Sets",
    room: ["Pooja Room"],
    dimensions: "10\" diameter plate",
    weight: "900 g (set)",
    inStock: true,
    bestSeller: true,
    rating: 4.8,
    reviews: 198
  },
  {
    id: "brass-shankh-011",
    name: "Brass Decorative Shankh (Conch)",
    price: 1599,
    originalPrice: 1899,
    description: "Sacred brass conch shell (Shankh) for pooja and decoration. The conch is one of the most auspicious symbols in Hinduism, associated with Lord Vishnu. This brass replica features detailed carving and can be used for rituals or as a decorative piece.",
    shortDescription: "Sacred conch for pooja and decoration",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Pooja Items",
    subcategory: "Ritual Items",
    room: ["Pooja Room", "Living Room"],
    dimensions: "5\" L x 3\" W",
    weight: "350 g",
    inStock: true,
    rating: 4.6,
    reviews: 78
  },

  // ==================== BRASS WALL DECOR ====================
  {
    id: "brass-wall-ganesha-012",
    name: "Brass Ganesha Wall Hanging",
    price: 3299,
    originalPrice: 3999,
    description: "Elegant brass wall hanging featuring Lord Ganesha on a decorative frame. This piece combines spiritual significance with artistic beauty. The detailed relief work showcases traditional Dhokra art techniques. Perfect for entrance walls or living room focal points.",
    shortDescription: "Decorative Ganesha wall piece",
    image: "https://images.unsplash.com/photo-1567591414240-e9c1e838eb0e?w=800&q=80",
    materials: ["Brass", "Dhokra Art", "Handcrafted"],
    category: "Wall Art",
    subcategory: "Wall Hangings",
    room: ["Entrance", "Living Room"],
    dimensions: "12\" H x 8\" W",
    weight: "800 g",
    inStock: true,
    newArrival: true,
    rating: 4.7,
    reviews: 45
  },
  {
    id: "brass-sun-013",
    name: "Brass Sun Face Wall Decor",
    price: 2799,
    originalPrice: 3399,
    description: "Radiant brass sun face wall decor symbolizing the Sun God (Surya). Features intricate ray patterns and a serene face at the center. In Hindu tradition, the sun represents energy, power, and enlightenment. A stunning piece that brings warmth to any wall.",
    shortDescription: "Radiant sun face for wall decoration",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Wall Art",
    subcategory: "Wall Decor",
    room: ["Living Room", "Balcony", "Entrance"],
    dimensions: "14\" diameter",
    weight: "1.2 kg",
    inStock: true,
    rating: 4.8,
    reviews: 92
  },

  // ==================== WOODEN ARTIFACTS ====================
  {
    id: "wood-ganesha-014",
    name: "Wooden Carved Ganesha Panel",
    price: 6999,
    originalPrice: 8499,
    description: "Exquisite hand-carved wooden panel featuring Lord Ganesha. Crafted from premium Sheesham wood by master carvers from Saharanpur. The intricate details include floral borders and traditional motifs. A statement piece that adds warmth and spirituality to your decor.",
    shortDescription: "Hand-carved Sheesham wood Ganesha panel",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    materials: ["Sheesham Wood", "Hand-Carved"],
    category: "Wall Art",
    subcategory: "Wood Panels",
    room: ["Living Room", "Pooja Room", "Entrance"],
    dimensions: "24\" H x 18\" W x 2\" D",
    weight: "3.5 kg",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 54
  },
  {
    id: "wood-elephant-015",
    name: "Wooden Elephant Set (3 Pcs)",
    price: 3499,
    originalPrice: 4199,
    description: "Set of 3 decorative wooden elephants in descending sizes. Hand-carved from Kadam wood with intricate Kashmiri-style painted details. Elephants symbolize wisdom, strength, and good luck in Indian culture. Perfect for console tables, shelves, or as a centerpiece.",
    shortDescription: "Hand-painted decorative elephant set",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    materials: ["Kadam Wood", "Hand-Painted"],
    category: "Décor",
    subcategory: "Figurines",
    room: ["Living Room", "Bedroom", "Study"],
    dimensions: "8\", 6\", 4\" H",
    weight: "1.2 kg (set)",
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviews: 143
  },
  {
    id: "wood-mandir-016",
    name: "Wooden Home Temple (Mandir)",
    price: 12999,
    originalPrice: 15999,
    description: "Beautiful Sheesham wood home temple with traditional Rajasthani carvings. Features a domed top (Shikhara), intricate jali work, and a spacious interior for idols. The natural wood grain adds warmth while the detailed craftsmanship reflects temple architecture. Includes LED lighting inside.",
    shortDescription: "Sheesham wood temple with LED lighting",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    materials: ["Sheesham Wood", "LED Lights", "Hand-Carved"],
    category: "Furniture",
    subcategory: "Mandirs",
    room: ["Pooja Room", "Living Room"],
    dimensions: "24\" H x 18\" W x 12\" D",
    weight: "8 kg",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 67
  },
  {
    id: "wood-frame-017",
    name: "Wooden Jharokha Mirror Frame",
    price: 4999,
    originalPrice: 5999,
    description: "Traditional Rajasthani Jharokha-style mirror frame in mango wood. The ornate design mimics the famous window balconies of Rajasthani havelis. Hand-carved and finished with antique polish. Adds a regal touch to entryways or living rooms.",
    shortDescription: "Rajasthani style ornate mirror frame",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    materials: ["Mango Wood", "Mirror", "Hand-Carved"],
    category: "Wall Art",
    subcategory: "Mirrors",
    room: ["Entrance", "Living Room", "Bedroom"],
    dimensions: "30\" H x 20\" W",
    weight: "4 kg",
    inStock: true,
    newArrival: true,
    rating: 4.6,
    reviews: 38
  },

  // ==================== BRASS URLI & BOWLS ====================
  {
    id: "brass-urli-018",
    name: "Brass Urli Bowl with Stand",
    price: 3999,
    originalPrice: 4799,
    description: "Traditional Kerala-style brass urli (decorative bowl) with matching stand. Urlis are used to float flowers, candles, and diyas for decoration and rituals. Features hammered texture and traditional patterns. Perfect for creating stunning centerpieces during festivals.",
    shortDescription: "Decorative bowl for floating flowers",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Décor",
    subcategory: "Urli Bowls",
    room: ["Living Room", "Entrance", "Pooja Room"],
    dimensions: "12\" diameter x 4\" H",
    weight: "1.5 kg",
    inStock: true,
    bestSeller: true,
    rating: 4.8,
    reviews: 156
  },

  // ==================== DHOKRA ART ====================
  {
    id: "dhokra-tribal-019",
    name: "Dhokra Tribal Musician Set",
    price: 4499,
    originalPrice: 5499,
    description: "Set of 3 Dhokra brass figurines depicting tribal musicians. Dhokra is an ancient lost-wax casting technique practiced by the tribal artisans of West Bengal and Odisha. Each piece has a rustic, earthy finish with distinctive patterns. A celebration of India's tribal art heritage.",
    shortDescription: "Tribal art brass musician figurines",
    image: "https://images.unsplash.com/photo-1567591414240-e9c1e838eb0e?w=800&q=80",
    materials: ["Brass", "Dhokra Art", "Handcrafted"],
    category: "Décor",
    subcategory: "Figurines",
    room: ["Living Room", "Study", "Office"],
    dimensions: "6-8\" H each",
    weight: "1.5 kg (set)",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 87
  },
  {
    id: "dhokra-horse-020",
    name: "Dhokra Horse Figurine",
    price: 2999,
    originalPrice: 3599,
    description: "Majestic Dhokra brass horse figurine showcasing the unique tribal art form. The horse represents power and grace in Indian symbolism. Features characteristic Dhokra textured surface and stylized design. A conversation starter for any contemporary or traditional setting.",
    shortDescription: "Tribal art brass horse sculpture",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    materials: ["Brass", "Dhokra Art", "Handcrafted"],
    category: "Décor",
    subcategory: "Figurines",
    room: ["Living Room", "Study"],
    dimensions: "8\" H x 10\" L",
    weight: "900 g",
    inStock: true,
    rating: 4.7,
    reviews: 62
  },

  // ==================== BRONZE SCULPTURES ====================
  {
    id: "bronze-dancer-021",
    name: "Bronze Bharatanatyam Dancer",
    price: 7999,
    originalPrice: 9499,
    description: "Graceful bronze sculpture of a Bharatanatyam dancer in a classic pose. Captures the elegance and dynamism of this ancient South Indian classical dance form. Created using traditional lost-wax (Madhuchista Vidhana) technique by Swamimalai artisans. A tribute to Indian performing arts.",
    shortDescription: "Classical dancer bronze sculpture",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    materials: ["Bronze", "Lost-Wax Casting"],
    category: "Sculptures",
    subcategory: "Figurines",
    room: ["Living Room", "Dance Studio", "Office"],
    dimensions: "14\" H x 8\" W",
    weight: "2.5 kg",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 43
  },
  {
    id: "bronze-saraswati-022",
    name: "Bronze Saraswati Statue",
    price: 6499,
    originalPrice: 7799,
    description: "Elegant bronze statue of Goddess Saraswati, the deity of knowledge, music, and arts. Depicted seated on a lotus playing the veena (traditional instrument). The fine detailing showcases her serene expression and flowing garments. Ideal for students and artists.",
    shortDescription: "Goddess of knowledge and arts",
    image: "https://images.unsplash.com/photo-1609902726285-00668009f004?w=800&q=80",
    materials: ["Bronze", "Handcrafted"],
    category: "Idols",
    subcategory: "Saraswati",
    room: ["Study", "Pooja Room", "Office"],
    dimensions: "10\" H x 6\" W",
    weight: "1.8 kg",
    inStock: true,
    rating: 4.8,
    reviews: 76
  },

  // ==================== BRASS HOME ACCENTS ====================
  {
    id: "brass-candle-023",
    name: "Brass Candle Holders (Pair)",
    price: 1999,
    originalPrice: 2399,
    description: "Elegant pair of brass candle holders with traditional design. Features a sturdy base and intricate engravings. Perfect for dining tables, mantels, or romantic dinners. The warm brass finish complements both traditional and contemporary interiors.",
    shortDescription: "Traditional brass candle holder pair",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Lighting",
    subcategory: "Candle Holders",
    room: ["Dining Room", "Living Room", "Bedroom"],
    dimensions: "8\" H each",
    weight: "600 g (pair)",
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: "brass-incense-024",
    name: "Brass Incense Holder - Elephant",
    price: 899,
    originalPrice: 1099,
    description: "Charming brass incense holder shaped like a decorated elephant. The trunk holds the incense stick while the body catches ash. Functional and decorative, this piece adds a touch of whimsy to your meditation or pooja space.",
    shortDescription: "Elephant-shaped incense holder",
    image: "https://images.unsplash.com/photo-1567591414240-e9c1e838eb0e?w=800&q=80",
    materials: ["Brass", "Handcrafted"],
    category: "Pooja Items",
    subcategory: "Incense Holders",
    room: ["Pooja Room", "Meditation Room", "Bedroom"],
    dimensions: "4\" H x 5\" L",
    weight: "250 g",
    inStock: true,
    newArrival: true,
    rating: 4.5,
    reviews: 134
  },
];

// Filter functions
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getBestSellers = () => products.filter(p => p.bestSeller);
export const getNewArrivals = () => products.filter(p => p.newArrival);
export const getByCategory = (category: string) => products.filter(p => p.category.toLowerCase() === category.toLowerCase());
export const getByMaterial = (material: string) => products.filter(p => p.materials.some(m => m.toLowerCase().includes(material.toLowerCase())));
export const getByRoom = (room: string) => products.filter(p => p.room?.some(r => r.toLowerCase().includes(room.toLowerCase())));
export const getById = (id: string) => products.find(p => p.id === id);

// Categories
export const categories = [
  { id: "idols", name: "Idols & Statues", count: products.filter(p => p.category === "Idols").length },
  { id: "lighting", name: "Diyas & Lamps", count: products.filter(p => p.category === "Lighting").length },
  { id: "pooja-items", name: "Pooja Items", count: products.filter(p => p.category === "Pooja Items").length },
  { id: "wall-art", name: "Wall Art", count: products.filter(p => p.category === "Wall Art").length },
  { id: "decor", name: "Home Décor", count: products.filter(p => p.category === "Décor").length },
  { id: "sculptures", name: "Sculptures", count: products.filter(p => p.category === "Sculptures").length },
  { id: "furniture", name: "Furniture", count: products.filter(p => p.category === "Furniture").length },
];

// Materials
export const materials = [
  { id: "brass", name: "Brass", count: products.filter(p => p.materials.includes("Brass")).length },
  { id: "bronze", name: "Bronze", count: products.filter(p => p.materials.includes("Bronze")).length },
  { id: "wood", name: "Wood", count: products.filter(p => p.materials.some(m => m.includes("Wood"))).length },
  { id: "dhokra", name: "Dhokra Art", count: products.filter(p => p.materials.includes("Dhokra Art")).length },
];

// Rooms
export const rooms = [
  { id: "pooja-room", name: "Pooja Room" },
  { id: "living-room", name: "Living Room" },
  { id: "bedroom", name: "Bedroom" },
  { id: "entrance", name: "Entrance" },
  { id: "dining-room", name: "Dining Room" },
  { id: "study", name: "Study" },
];
