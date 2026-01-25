import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Check, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState<'250g' | '500g'>('250g');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        category: product.category === 'dehydrated' ? 'Dehydrated Powders' : 'Millet Mix',
        size: selectedSize,
        price: product.prices[selectedSize],
      });
    }
    setIsAdded(true);
    setQuantity(1);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const incrementQuantity = () => setQuantity((q) => Math.min(q + 1, 10));
  const decrementQuantity = () => setQuantity((q) => Math.max(q - 1, 1));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-card rounded-2xl shadow-soft overflow-hidden card-hover group"
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
            {product.category === 'dehydrated' ? 'Powder' : 'Millet'}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-heading font-bold text-foreground mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Size Selector */}
        <div className="flex gap-2 mb-3">
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

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground">Quantity:</span>
          <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
            <button
              onClick={decrementQuantity}
              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-card transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-semibold">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-card transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-xl font-bold text-foreground">
              ₹{product.prices[selectedSize] * quantity}
            </span>
            {quantity > 1 && (
              <span className="text-xs text-muted-foreground block">
                ₹{product.prices[selectedSize]} each
              </span>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
              isAdded
                ? 'bg-primary text-primary-foreground'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added!
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
