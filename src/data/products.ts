/* =========================
   Pricing Constants
========================= */
export const BASE_PRICE = 9.99;

/* =========================
   Types
========================= */
export interface Product {
  id: string;
  name: string;
  category: 'dehydrated' | 'millet';
  description: string;
  prices: {
    [size: string]: number; // dynamic sizes
  };
  image: string;
  benefits?: string[];
}

/* =========================
   Products
========================= */
export const products: Product[] = [
  // Dehydrated Powders (200g)
  {
    id: 'abc-powder',
    name: 'ABC Powder',
    category: 'dehydrated',
    description: 'Premium quality ABC powder for everyday nutrition.',
    prices: { '200g': 11.99 },
    image: "https://i.ibb.co/tpkRjXf2/ABC-POWDER.jpg",
  },
  {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    category: 'dehydrated',
    description: 'Nutrient-rich moringa leaves powder, packed with vitamins.',
    prices: { '200g': 10.99 },
    image: "https://i.ibb.co/TM6nWRbn/MORINGA-POWDER.jpg",
  },
  {
    id: 'dry-dates-powder',
    name: 'Dry Dates Powder',
    category: 'dehydrated',
    description: 'Natural sweetener from premium quality dates.',
    prices: { '200g': 11.99 },
    image: "https://i.ibb.co/0psB2q0s/DRY-DATES-POWDER.jpg",
  },
  {
    id: 'banana-powder',
    name: 'Banana Powder',
    category: 'dehydrated',
    description: 'Dehydrated banana powder, perfect for smoothies and baking.',
    prices: { '200g': 10.99 },
    image: "https://i.ibb.co/MkcDzKJQ/BANANA-POWDER.jpg",
  },
  {
    id: 'beetroot-powder',
    name: 'Beetroot Powder',
    category: 'dehydrated',
    description: 'Vibrant beetroot powder, rich in antioxidants.',
    prices: { '200g': 11.99 },
    image: "https://i.ibb.co/MDwTjPx7/BEETROOT-PODER.jpg",
  },
  {
    id: 'spinach-powder',
    name: 'Spinach Powder',
    category: 'dehydrated',
    description: 'Iron-rich spinach powder for your daily greens.',
    prices: { '200g': 9.99 },
    image: "https://i.ibb.co/KpGY2CNY/SPANISH-POWDER.jpg",
  },
  {
    id: 'amla-powder',
    name: 'Amla Powder',
    category: 'dehydrated',
    description: 'Vitamin C rich amla powder for immunity boost.',
    prices: { '200g': 10.99 },
    image: "https://i.ibb.co/b5j5S5Xp/AMLA-POWDER.jpg",
  },
  {
    id: 'organic-jaggery-powder',
    name: 'Organic Jaggery Powder',
    category: 'dehydrated',
    description: 'Traditional organic jaggery in convenient powder form.',
    prices: { '200g': 7.99 },
    image: "https://i.ibb.co/35n3g0rZ/ORGANIC-JAGGIARY.jpg",
  },

  // Millet Mix (500g)
  {
    id: 'millet-ladoo-mix',
    name: 'Millet Ladoo Mix',
    category: 'millet',
    description: 'Traditional ladoo mix made with nutritious millets.',
    prices: { '500g': 15.99 },
    image: "https://i.ibb.co/jvyNFzq8/MILLETS-LADOO-MIC.jpg",
  },
  {
    id: 'multi-millet-milk-mix',
    name: 'Multi Millet Milk Mix',
    category: 'millet',
    description: 'Nutritious millet mix for healthy milk drinks.',
    prices: { '500g': 19.99 },
    image: "https://i.ibb.co/GQSbTcyR/Multi-Millet-Milk-Mix.jpg",
  },
  {
    id: 'millet-dosa-mix',
    name: 'Millet Dosa Mix',
    category: 'millet',
    description: 'Ready-to-cook millet dosa mix for crispy, healthy dosas.',
    prices: { '500g': 16.99 },
    image:  "https://i.ibb.co/MDzbP3LQ/upscalemedia-transformed.jpg",
  },
  {
    id: 'millet-chapathi-mix',
    name: 'Millet Chapathi Mix',
    category: 'millet',
    description: 'Wholesome millet flour blend for soft chapathis.',
    prices: { '500g': 16.99 },
    image: "https://i.ibb.co/S4TJLvn5/MILLETS-CHAPATI-MIX.jpg",
  },
];

/* =========================
   Categories
========================= */
export const categories = [
  {
    id: 'dehydrated',
    name: 'Dehydrated Veg & Fruit Powders',
    shortName: 'Dehydrated Powders',
    description: 'Premium quality dehydrated vegetable and fruit powders',
  },
  {
    id: 'millet',
    name: 'Millet Mix',
    shortName: 'Millet Mix',
    description: 'Healthy and nutritious millet-based products',
  },
];