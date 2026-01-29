import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { z } from 'zod';

const checkoutSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit phone number'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  address: z.string().trim().min(10, 'Please enter a complete address').max(500, 'Address must be less than 500 characters'),
});

const CheckoutModal = () => {
  const { items, totalPrice, clearCart, isCheckoutOpen, setIsCheckoutOpen } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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

    const message = ` *NEW ORDER - VeGa Foods*\n\n*Customer Details:*\n Name: ${formData.name}\n Phone: ${formData.phone}\n📧 Email: ${formData.email}\n Address: ${formData.address}\n\n*Order Items:*\n${orderItems}\n\n💰 *Total: $${totalPrice}*`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;

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
                  <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-primary">${totalPrice}</span>
                  </div>
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