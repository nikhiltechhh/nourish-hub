import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check, Leaf } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState<'250g' | '500g'>('250g');
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category === 'dehydrated' ? 'Dehydrated Powders' : 'Millet Mix',
      size: selectedSize,
      price: product.prices[selectedSize],
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl shadow-soft overflow-hidden card-hover group"
    >
      {/* Product Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-accent to-muted flex items-center justify-center overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="p-6 bg-primary/10 rounded-full"
        >
          <Leaf className="w-16 h-16 text-primary" />
        </motion.div>
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
            {product.category === 'dehydrated' ? 'Powder' : 'Millet'}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h3 className="text-lg font-heading font-bold text-foreground mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Size Selector */}
        <div className="flex gap-2 mb-4">
          {(['250g', '500g'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg border-2 transition-all duration-200 ${
                selectedSize === size
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:border-primary/50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-2xl font-bold text-foreground">
              ₹{product.prices[selectedSize]}
            </span>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Add
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
