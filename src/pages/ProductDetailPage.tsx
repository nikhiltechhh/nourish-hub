import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Plus, Check, ShoppingCart, Leaf, Heart, Shield, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import FloatingCart from '@/components/FloatingCart';
import CheckoutModal from '@/components/CheckoutModal';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">
            Browse all products
          </Link>
        </div>
      </div>
    );
  }

  // ✅ Dynamically get sizes from product.prices
  const sizes = Object.keys(product.prices);
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

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

  const incrementQuantity = () => setQuantity((q) => Math.min(q + 10, 10));
  const decrementQuantity = () => setQuantity((q) => Math.max(q - 1, 1));

  const benefits = product.benefits || [
    'Rich in essential nutrients and vitamins',
    '100% natural and preservative-free',
    'Carefully processed to retain nutrition',
    'Perfect for daily health supplementation',
  ];

  const benefitIcons = [Leaf, Heart, Shield, Sparkles];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-md mx-auto lg:mx-0"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-card shadow-soft">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
                  {product.category === 'dehydrated' ? 'Dehydrated Powder' : 'Millet Mix'}
                </span>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

              {/* Benefits Section */}
              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Key Benefits</h3>
                <div className="space-y-2">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefitIcons[index % benefitIcons.length];
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <IconComponent className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground leading-relaxed">{benefit}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Select Size</h3>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex-1 py-3 px-6 text-base font-medium rounded-xl border-2 transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      {size} - ₹{product.prices[size]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 bg-muted rounded-xl p-2">
                    <button
                      onClick={decrementQuantity}
                      className="w-8 h-6 flex items-center justify-center rounded-lg hover:bg-card transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-12 text-center text-xl font-semibold">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-card transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-auto pt-2 border-t border-border">
                <div className="flex-1">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">
                    ₹{(product.prices[selectedSize] * quantity).toFixed(2)}
                  </span>
                  {quantity > 1 && (
                    <span className="text-sm text-muted-foreground block mt-1">
                      ₹{product.prices[selectedSize].toFixed(2)} × {quantity}
                    </span>
                  )}
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-lg transition-all duration-300 w-full sm:w-auto ${
                    isAdded
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Related Products Suggestion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link
              to={`/products?category=${product.category}`}
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View more {product.category === 'dehydrated' ? 'Dehydrated Powders' : 'Millet Mix'}
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
      <CartSidebar />
      <FloatingCart />
      <CheckoutModal />
    </div>
  );
};

export default ProductDetailPage;
