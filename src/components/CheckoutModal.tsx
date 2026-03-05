import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, Mail, MapPin, CheckCircle, Package } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { z } from 'zod';

const checkoutSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  phone: z
    .string()
    .trim()
    .regex(/^\d{8,15}$/, 'Please enter a valid phone number'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  address: z.string().trim().min(10, 'Please enter a complete address').max(500, 'Address must be less than 500 characters'),
});

// Shipping rates: Parcel Post, 5kg and under
const getShippingCost = (totalWeightG: number): number => {
  if (totalWeightG <= 250) return 9.70;
  if (totalWeightG <= 500) return 11.15;
  if (totalWeightG <= 1000) return 15.25;
  if (totalWeightG <= 3000) return 19.30;
  if (totalWeightG <= 5000) return 23.30;
  return 23.30; // max rate shown
};

const getShippingLabel = (totalWeightG: number): string => {
  if (totalWeightG <= 250) return 'Up to 250g';
  if (totalWeightG <= 500) return 'Over 250g up to 500g';
  if (totalWeightG <= 1000) return 'Over 500g up to 1kg';
  if (totalWeightG <= 3000) return 'Over 1kg up to 3kg';
  if (totalWeightG <= 5000) return 'Over 3kg up to 5kg';
  return 'Over 5kg';
};

const SHIPPING_RATES = [
  { label: 'Up to 250g', price: '$9.70' },
  { label: 'Over 250g up to 500g', price: '$11.15' },
  { label: 'Over 500g up to 1kg', price: '$15.25' },
  { label: 'Over 1kg up to 3kg', price: '$19.30' },
  { label: 'Over 3kg up to 5kg', price: '$23.30' },
];

const CheckoutModal = () => {
  const { items, totalPrice, clearCart, isCheckoutOpen, setIsCheckoutOpen } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showRates, setShowRates] = useState(false);

  // Calculate total weight from items (each item is expected to have a weightG property)
  // Falls back to size-based estimation if weightG is not present
  const totalWeightG = items.reduce((sum, item) => {
    if ((item as any).weightG) {
      return sum + (item as any).weightG * item.quantity;
    }
    // Estimate from size string e.g. "250g", "1kg", "500g"
    const sizeStr = item.size?.toLowerCase() ?? '';
    let grams = 0;
    const kgMatch = sizeStr.match(/([\d.]+)\s*kg/);
    const gMatch = sizeStr.match(/([\d.]+)\s*g/);
    if (kgMatch) grams = parseFloat(kgMatch[1]) * 1000;
    else if (gMatch) grams = parseFloat(gMatch[1]);
    return sum + grams * item.quantity;
  }, 0);

  const shippingCost = getShippingCost(totalWeightG);
  const shippingLabel = getShippingLabel(totalWeightG);
  const grandTotal = (Number(totalPrice) + shippingCost).toFixed(2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = checkoutSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    const orderItems = items
      .map(
        (item) =>
          `• ${item.name} (${item.size}) x ${item.quantity} = $${item.price * item.quantity}`
      )
      .join('\n');

    const message = ` *NEW ORDER - VeGa Foods*\n\n*Customer Details:*\n Name: ${formData.name}\n Phone: ${formData.phone}\n Email: ${formData.email}\n Address: ${formData.address}\n\n*Order Items:*\n${orderItems}\n\n*Subtotal: $${totalPrice}*\n*Shipping (${shippingLabel}): $${shippingCost.toFixed(2)}*\n\n *Grand Total: $${grandTotal}*`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/61485679799?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    clearCart();
    setIsCheckoutOpen(false);
    setFormData({ name: '', phone: '', email: '', address: '' });
  };

  const inputFields = [
    { name: 'name', label: 'Full Name', type: 'text', icon: User, placeholder: 'Enter your full name' },
    { name: 'phone', label: 'Phone Number', type: 'tel', icon: Phone, placeholder: 'Enter 10-digit number' },
    { name: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'Enter your email' },
  ];

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCheckoutOpen(false)}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container - Centers content */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border bg-accent/30">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-heading font-bold text-foreground">
                    Complete Your Order
                  </h2>
                </div>
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-5">
                {/* Order Summary */}
                <div className="mb-5 p-4 bg-muted/50 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-3 text-sm">Order Summary</h3>
                  <div className="space-y-2 text-sm max-h-32 overflow-y-auto">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="flex justify-between text-muted-foreground">
                        <span className="truncate flex-1 mr-2">{item.name} ({item.size}) × {item.quantity}</span>
                        <span className="font-medium">${item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Subtotal + Shipping + Grand Total */}
                  <div className="border-t border-border mt-3 pt-3 space-y-1.5 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${Number(totalPrice).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Package className="w-3.5 h-3.5" />
                        Shipping
                        {totalWeightG > 0 && (
                          <span className="text-xs opacity-70">({shippingLabel})</span>
                        )}
                      </span>
                      <span>${shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-foreground border-t border-border pt-2 mt-1">
                      <span>Total</span>
                      <span className="text-primary">${grandTotal}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Info Banner */}
                <div className="mb-5 rounded-xl border border-border overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setShowRates((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-accent/20 hover:bg-accent/40 transition-colors text-sm font-medium text-foreground"
                  >
                    <span className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      Parcel Post Shipping Rates (5kg &amp; under)
                    </span>
                    <span className="text-muted-foreground text-xs">{showRates ? '▲ Hide' : '▼ View rates'}</span>
                  </button>
                  <AnimatePresence>
                    {showRates && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 py-3 space-y-1.5 bg-background">
                          {SHIPPING_RATES.map((rate) => (
                            <div
                              key={rate.label}
                              className={`flex justify-between text-xs py-1 px-2 rounded-lg ${
                                shippingLabel === rate.label
                                  ? 'bg-primary/10 text-primary font-semibold'
                                  : 'text-muted-foreground'
                              }`}
                            >
                              <span>{rate.label}</span>
                              <span>{rate.price}</span>
                            </div>
                          ))}
                          <p className="text-xs text-muted-foreground pt-1 border-t border-border mt-2">
                            Shipping is calculated based on the total weight of your order.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {inputFields.map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        {field.label} *
                      </label>
                      <div className="relative">
                        <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={`w-full pl-11 pr-4 py-3 bg-background border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                            errors[field.name] ? 'border-destructive' : 'border-border'
                          }`}
                        />
                      </div>
                      {errors[field.name] && (
                        <p className="text-destructive text-xs mt-1">{errors[field.name]}</p>
                      )}
                    </motion.div>
                  ))}

                  {/* Address */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Delivery Address *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your complete delivery address"
                        rows={3}
                        className={`w-full pl-11 pr-4 py-3 bg-background border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${
                          errors.address ? 'border-destructive' : 'border-border'
                        }`}
                      />
                    </div>
                    {errors.address && (
                      <p className="text-destructive text-xs mt-1">{errors.address}</p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-glow"
                  >
                    <Send className="w-5 h-5" />
                    Send Order via WhatsApp
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;