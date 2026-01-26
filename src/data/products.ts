// Product images
import abcImg from '@/assets/products/abc.jpg';
import moringaImg from '@/assets/products/moringa.jpg';
import datesImg from '@/assets/products/dates.jpg';
import jaggeryImg from '@/assets/products/jaggery.jpg';
import bananaImg from '@/assets/products/banana.jpg';
import beetrootImg from '@/assets/products/beetroot.jpg';
import spinachImg from '@/assets/products/spinach.jpg';
import curryleafImg from '@/assets/products/curryleaf.jpg';
import amlaImg from '@/assets/products/amla.jpg';
import carrotImg from '@/assets/products/carrot.jpg';
import dosaImg from '@/assets/products/dosa.jpg';
import chapathiImg from '@/assets/products/chapathi.jpg';
import ladooImg from '@/assets/products/ladoo.jpg';
import milkmixImg from '@/assets/products/milkmix.jpg';
import ragiImg from '@/assets/products/ragi.jpg';

export interface Product {
  id: string;
  name: string;
  category: 'dehydrated' | 'millet';
  description: string;
  prices: {
    '250g': number;
    '500g': number;
  };
  image: string;
  benefits?: string[];
}

export const products: Product[] = [
  // Dehydrated Veg and Fruit Powders
  {
    id: 'abc-powder',
    name: 'ABC Powder',
    category: 'dehydrated',
    description: 'Premium quality ABC powder for everyday nutrition.',
    prices: { '250g': 199, '500g': 349 },
    image: abcImg,
    benefits: [
      'Boosts immunity with essential vitamins A, B & C',
      '100% natural with no added preservatives',
      'Supports healthy digestion and metabolism',
      'Perfect for smoothies, shakes and cooking',
    ],
  },
  {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    category: 'dehydrated',
    description: 'Nutrient-rich moringa leaves powder, packed with vitamins.',
    prices: { '250g': 249, '500g': 449 },
    image: moringaImg,
    benefits: [
      'Rich in antioxidants and anti-inflammatory compounds',
      'Contains 7x more Vitamin C than oranges',
      'Supports bone health with high calcium content',
      'Helps regulate blood sugar levels naturally',
    ],
  },
  {
    id: 'dry-dates-powder',
    name: 'Dry Dates Powder',
    category: 'dehydrated',
    description: 'Natural sweetener from premium quality dates.',
    prices: { '250g': 279, '500g': 499 },
    image: datesImg,
    benefits: [
      'Natural energy booster with complex carbohydrates',
      'Rich in iron, potassium and magnesium',
      'Healthy alternative to refined sugar',
      'Supports digestive health with natural fiber',
    ],
  },
  {
    id: 'organic-jaggery-powder',
    name: 'Organic Jaggery Powder',
    category: 'dehydrated',
    description: 'Traditional organic jaggery in convenient powder form.',
    prices: { '250g': 159, '500g': 289 },
    image: jaggeryImg,
    benefits: [
      'Unrefined natural sweetener with minerals intact',
      'Aids in detoxification and cleansing',
      'Rich in iron, helps prevent anemia',
      'Boosts immunity and respiratory health',
    ],
  },
  {
    id: 'banana-powder',
    name: 'Banana Powder',
    category: 'dehydrated',
    description: 'Dehydrated banana powder, perfect for smoothies and baking.',
    prices: { '250g': 189, '500g': 329 },
    image: bananaImg,
    benefits: [
      'Excellent source of potassium for heart health',
      'Natural energy booster for active lifestyles',
      'Supports healthy digestion with prebiotics',
      'Perfect for baby food and healthy desserts',
    ],
  },
  {
    id: 'beetroot-powder',
    name: 'Beetroot Powder',
    category: 'dehydrated',
    description: 'Vibrant beetroot powder, rich in antioxidants.',
    prices: { '250g': 219, '500g': 389 },
    image: beetrootImg,
    benefits: [
      'Improves blood flow and cardiovascular health',
      'Enhances athletic performance and stamina',
      'Rich in nitrates for healthy blood pressure',
      'Natural food coloring for healthy recipes',
    ],
  },
  {
    id: 'spinach-powder',
    name: 'Spinach Powder',
    category: 'dehydrated',
    description: 'Iron-rich spinach powder for your daily greens.',
    prices: { '250g': 199, '500g': 359 },
    image: spinachImg,
    benefits: [
      'Packed with iron for healthy blood cells',
      'Rich in Vitamin K for bone strength',
      'Contains lutein for eye health protection',
      'Easy way to add greens to any meal',
    ],
  },
  {
    id: 'curry-leaf-powder',
    name: 'Curry Leaf Powder',
    category: 'dehydrated',
    description: 'Aromatic curry leaf powder for authentic flavor.',
    prices: { '250g': 179, '500g': 319 },
    image: curryleafImg,
    benefits: [
      'Promotes healthy hair growth naturally',
      'Aids in weight management and digestion',
      'Rich in antioxidants and Vitamin A',
      'Traditional remedy for diabetes management',
    ],
  },
  {
    id: 'amla-powder',
    name: 'Amla Powder',
    category: 'dehydrated',
    description: 'Vitamin C rich amla powder for immunity boost.',
    prices: { '250g': 229, '500g': 409 },
    image: amlaImg,
    benefits: [
      '20x more Vitamin C than oranges',
      'Strengthens immune system naturally',
      'Promotes healthy skin and hair',
      'Supports liver health and detoxification',
    ],
  },
  {
    id: 'carrot-powder',
    name: 'Carrot Powder',
    category: 'dehydrated',
    description: 'Beta-carotene rich carrot powder for healthy skin.',
    prices: { '250g': 189, '500g': 339 },
    image: carrotImg,
    benefits: [
      'Rich in beta-carotene for eye health',
      'Promotes glowing skin naturally',
      'Supports immune function with Vitamin A',
      'Perfect for soups, smoothies and baking',
    ],
  },

  // Millet Mix
  {
    id: 'millet-dosa-mix',
    name: 'Millet Dosa Mix',
    category: 'millet',
    description: 'Ready-to-cook millet dosa mix for crispy, healthy dosas.',
    prices: { '250g': 169, '500g': 299 },
    image: dosaImg,
    benefits: [
      'High in fiber for better digestion',
      'Low glycemic index, diabetic-friendly',
      'Quick and easy to prepare in minutes',
      'Gluten-free alternative to regular dosa',
    ],
  },
  {
    id: 'millet-chapathi-mix',
    name: 'Millet Chapathi Mix',
    category: 'millet',
    description: 'Wholesome millet flour blend for soft chapathis.',
    prices: { '250g': 159, '500g': 279 },
    image: chapathiImg,
    benefits: [
      'Soft and nutritious chapathis every time',
      'Rich in dietary fiber and minerals',
      'Helps maintain healthy blood sugar levels',
      'Perfect for weight-conscious individuals',
    ],
  },
  {
    id: 'millet-ladoo-mix',
    name: 'Millet Ladoo Mix',
    category: 'millet',
    description: 'Traditional ladoo mix made with nutritious millets.',
    prices: { '250g': 199, '500g': 359 },
    image: ladooImg,
    benefits: [
      'Healthy traditional sweet with natural ingredients',
      'Rich in protein and essential minerals',
      'No refined sugar, naturally sweetened',
      'Perfect for festivals and daily snacking',
    ],
  },
  {
    id: 'multi-millet-milk-mix',
    name: 'Multi Millet Milk Mix',
    category: 'millet',
    description: 'Nutritious millet mix for healthy milk drinks.',
    prices: { '250g': 219, '500g': 389 },
    image: milkmixImg,
    benefits: [
      'Complete nutrition drink for all ages',
      'Blend of 5 nutritious millets',
      'Rich in calcium and protein',
      'Perfect breakfast or evening drink',
    ],
  },
  {
    id: 'sprouted-ragi-flour',
    name: 'Sprouted Ragi Flour',
    category: 'millet',
    description: 'Sprouted ragi for enhanced nutrition and easy digestion.',
    prices: { '250g': 189, '500g': 339 },
    image: ragiImg,
    benefits: [
      'Sprouting increases nutrient absorption',
      'Excellent source of calcium for bones',
      'Perfect for babies, elderly and athletes',
      'Helps in weight management naturally',
    ],
  },
];

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
