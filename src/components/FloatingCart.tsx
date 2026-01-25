import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const FloatingCart = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:shadow-glow transition-shadow duration-300"
        >
          <ShoppingCart className="w-6 h-6" />
          <motion.span
            key={totalItems}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-secondary text-secondary-foreground text-xs font-bold rounded-full flex items-center justify-center"
          >
            {totalItems}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingCart;
