export interface Product {
  id: string;
  name: string;
  category: 'dehydrated' | 'millet';
  description: string;
  prices: {
    '250g': number;
    '500g': number;
  };
  image?: string;
}

export const products: Product[] = [
  // Dehydrated Veg and Fruit Powders
  {
    id: 'abc-powder',
    name: 'ABC Powder',
    category: 'dehydrated',
    description: 'Premium quality ABC powder for everyday nutrition.',
    prices: { '250g': 199, '500g': 349 },
  },
  {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    category: 'dehydrated',
    description: 'Nutrient-rich moringa leaves powder, packed with vitamins.',
    prices: { '250g': 249, '500g': 449 },
  },
  {
    id: 'dry-dates-powder',
    name: 'Dry Dates Powder',
    category: 'dehydrated',
    description: 'Natural sweetener from premium quality dates.',
    prices: { '250g': 279, '500g': 499 },
  },
  {
    id: 'organic-jaggery-powder',
    name: 'Organic Jaggery Powder',
    category: 'dehydrated',
    description: 'Traditional organic jaggery in convenient powder form.',
    prices: { '250g': 159, '500g': 289 },
  },
  {
    id: 'banana-powder',
    name: 'Banana Powder',
    category: 'dehydrated',
    description: 'Dehydrated banana powder, perfect for smoothies and baking.',
    prices: { '250g': 189, '500g': 329 },
  },
  {
    id: 'beetroot-powder',
    name: 'Beetroot Powder',
    category: 'dehydrated',
    description: 'Vibrant beetroot powder, rich in antioxidants.',
    prices: { '250g': 219, '500g': 389 },
  },
  {
    id: 'spinach-powder',
    name: 'Spinach Powder',
    category: 'dehydrated',
    description: 'Iron-rich spinach powder for your daily greens.',
    prices: { '250g': 199, '500g': 359 },
  },
  {
    id: 'curry-leaf-powder',
    name: 'Curry Leaf Powder',
    category: 'dehydrated',
    description: 'Aromatic curry leaf powder for authentic flavor.',
    prices: { '250g': 179, '500g': 319 },
  },
  {
    id: 'amla-powder',
    name: 'Amla Powder',
    category: 'dehydrated',
    description: 'Vitamin C rich amla powder for immunity boost.',
    prices: { '250g': 229, '500g': 409 },
  },
  {
    id: 'carrot-powder',
    name: 'Carrot Powder',
    category: 'dehydrated',
    description: 'Beta-carotene rich carrot powder for healthy skin.',
    prices: { '250g': 189, '500g': 339 },
  },

  // Millet Mix
  {
    id: 'millet-dosa-mix',
    name: 'Millet Dosa Mix',
    category: 'millet',
    description: 'Ready-to-cook millet dosa mix for crispy, healthy dosas.',
    prices: { '250g': 169, '500g': 299 },
  },
  {
    id: 'millet-chapathi-mix',
    name: 'Millet Chapathi Mix',
    category: 'millet',
    description: 'Wholesome millet flour blend for soft chapathis.',
    prices: { '250g': 159, '500g': 279 },
  },
  {
    id: 'millet-ladoo-mix',
    name: 'Millet Ladoo Mix',
    category: 'millet',
    description: 'Traditional ladoo mix made with nutritious millets.',
    prices: { '250g': 199, '500g': 359 },
  },
  {
    id: 'multi-millet-milk-mix',
    name: 'Multi Millet Milk Mix',
    category: 'millet',
    description: 'Nutritious millet mix for healthy milk drinks.',
    prices: { '250g': 219, '500g': 389 },
  },
  {
    id: 'sprouted-ragi-flour',
    name: 'Sprouted Ragi Flour',
    category: 'millet',
    description: 'Sprouted ragi for enhanced nutrition and easy digestion.',
    prices: { '250g': 189, '500g': 339 },
  },
];

export const categories = [
  {
    id: 'dehydrated',
    name: 'Dehydrated Veg & Fruit Powders',
    description: 'Premium quality dehydrated vegetable and fruit powders',
  },
  {
    id: 'millet',
    name: 'Millet Mix',
    description: 'Healthy and nutritious millet-based products',
  },
];
