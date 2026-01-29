import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, Check, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const navigate = useNavigate();
  const sizes = Object.keys(product.prices); // ✅ dynamically get sizes
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]); // default to first size
  const [quantity, setQuantity] = useState(1);
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
    setQuantity(1);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleQuickView = () => {
    navigate(`/product/${product.id}`);
  };

  const incrementQuantity = () => setQuantity((q) => Math.min(q + 1, 10));
  const decrementQuantity = () => setQuantity((q) => Math.max(q - 1, 1));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-card rounded-2xl shadow-soft overflow-hidden card-hover group h-full flex flex-col"
    >
      {/* Product Image */}
      <div className="relative h-54 sm:h-56 md:h-60 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* Category Badge */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-3 left-3"
        >
          <span className="px-3 py-1.5 bg-primary/95 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm shadow-lg">
            {product.category === 'dehydrated' ? 'Powder' : 'Millet'}
          </span>
        </motion.div>
        
        {/* Quick View Button */}
        <motion.button
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            handleQuickView();
          }}
          className="absolute top-3 right-3 w-10 h-10 bg-card/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary z-10 cursor-pointer"
        >
          <Eye className="w-5 h-5 text-primary pointer-events-none" />
        </motion.button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <motion.h3 
          className="text-base sm:text-lg font-heading font-bold text-foreground mb-1.5 line-clamp-1"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          {product.name}
        </motion.h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Size Selector */}
        <div className="flex gap-2 mb-4">
          {sizes.map((size) => (
            <motion.button
              key={size}
              onClick={() => setSelectedSize(size)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-xl border-2 transition-all duration-300 ${
                selectedSize === size
                  ? 'border-primary bg-primary/15 text-primary shadow-md'
                  : 'border-border text-muted-foreground hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              {size}
            </motion.button>
          ))}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">Quantity:</span>
          <div className="flex items-center gap-1 bg-muted rounded-xl p-1 shadow-inner">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={decrementQuantity}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-card transition-colors"
            >
              <Minus className="w-4 h-4" />
            </motion.button>
            <span className="w-10 text-center font-bold text-sm sm:text-base">{quantity}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={incrementQuantity}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-card transition-colors"
            >
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <motion.span 
              key={product.prices[selectedSize] * quantity}
              initial={{ scale: 1.2, color: '#10b981' }}
              animate={{ scale: 1, color: 'inherit' }}
              className="text-xl sm:text-2xl font-bold text-foreground block"
            >
              ${ (product.prices[selectedSize] * quantity).toFixed(2) }
            </motion.span>
            {quantity > 1 && (
              <span className="text-xs text-muted-foreground">
                ${product.prices[selectedSize].toFixed(2)} each
              </span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Added!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 sm:w-4 sm:h-4" />
                <span className=" sm:inline">Add</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
