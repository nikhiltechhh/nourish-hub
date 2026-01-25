import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, User, Phone, Mail, MapPin } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { z } from 'zod';

const checkoutSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit phone number'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  address: z.string().trim().min(10, 'Please enter a complete address').max(500, 'Address must be less than 500 characters'),
});

interface CheckoutFormProps {
  onBack: () => void;
}

const CheckoutForm = ({ onBack }: CheckoutFormProps) => {
  const { items, totalPrice, clearCart, setIsCartOpen } = useCart();
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
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
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

    // Create order message
    const orderItems = items
      .map(
        (item) =>
          `• ${item.name} (${item.size}) x ${item.quantity} = ₹${item.price * item.quantity}`
      )
      .join('\n');

    const message = `🛒 *NEW ORDER - VeGa Foods*\n\n*Customer Details:*\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email}\n📍 Address: ${formData.address}\n\n*Order Items:*\n${orderItems}\n\n💰 *Total: ₹${totalPrice}*`;

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Clear cart and close sidebar
    clearCart();
    setIsCartOpen(false);
  };

  const inputFields = [
    { name: 'name', label: 'Full Name', type: 'text', icon: User, placeholder: 'Enter your full name' },
    { name: 'phone', label: 'Phone Number', type: 'tel', icon: Phone, placeholder: 'Enter 10-digit number' },
    { name: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'Enter your email' },
  ];

  return (
    <div className="p-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Cart
      </button>

      {/* Order Summary */}
      <div className="mb-6 p-4 bg-accent/50 rounded-xl">
        <h3 className="font-semibold text-foreground mb-3">Order Summary</h3>
        <div className="space-y-2 text-sm">
          {items.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex justify-between text-muted-foreground">
              <span>{item.name} ({item.size}) × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t border-border pt-2 flex justify-between font-bold text-foreground">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {inputFields.map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <label className="block text-sm font-medium text-foreground mb-1.5">
              {field.label}
            </label>
            <div className="relative">
              <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`w-full pl-11 pr-4 py-3 bg-muted border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
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
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Delivery Address
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your complete delivery address"
              rows={3}
              className={`w-full pl-11 pr-4 py-3 bg-muted border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${
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
          transition={{ delay: 0.4 }}
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 mt-6"
        >
          <Send className="w-5 h-5" />
          Send Order via WhatsApp
        </motion.button>
      </form>
    </div>
  );
};

export default CheckoutForm;
