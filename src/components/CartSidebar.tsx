import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CheckoutForm from './CheckoutForm';

const CartSidebar = () => {
  const { items, isCartOpen, setIsCartOpen, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsCartOpen(false);
              setShowCheckout(false);
            }}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-heading font-bold text-foreground">
                    {showCheckout ? 'Checkout' : `Your Cart (${totalItems})`}
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setShowCheckout(false);
                  }}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                {showCheckout ? (
                  <CheckoutForm onBack={() => setShowCheckout(false)} />
                ) : items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <ShoppingBag className="w-20 h-20 text-muted-foreground/30 mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground text-sm">
                      Add some products to get started!
                    </p>
                  </div>
                ) : (
                  <div className="p-4 space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={`${item.id}-${item.size}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 p-4 bg-muted/50 rounded-xl"
                      >
                        {/* Product Info */}
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.size}</p>
                          <p className="text-primary font-bold mt-1">₹{item.price}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex flex-col items-end gap-2">
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="p-1 text-destructive hover:bg-destructive/10 rounded"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>

                          <div className="flex items-center gap-2 bg-card rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center rounded hover:bg-muted"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center rounded hover:bg-muted"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {!showCheckout && items.length > 0 && (
                <div className="p-6 border-t border-border bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground">Total Amount</span>
                    <span className="text-2xl font-bold text-foreground">₹{totalPrice}</span>
                  </div>

                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-glow"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
