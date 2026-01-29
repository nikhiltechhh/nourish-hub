import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowLeft, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import FloatingCart from '@/components/FloatingCart';
import CheckoutModal from '@/components/CheckoutModal';
import { products, categories } from '@/data/products';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');
  
  const [activeCategory, setActiveCategory] = useState<'all' | 'dehydrated' | 'millet'>(
    (categoryParam as 'dehydrated' | 'millet') || 'all'
  );
  const [searchQuery, setSearchQuery] = useState(searchParam || '');

  useEffect(() => {
    if (categoryParam === 'dehydrated' || categoryParam === 'millet') {
      setActiveCategory(categoryParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [categoryParam, searchParam]);

  const handleCategoryChange = (category: 'all' | 'dehydrated' | 'millet') => {
    setActiveCategory(category);
    const newParams = new URLSearchParams(searchParams);
    if (category === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    const newParams = new URLSearchParams(searchParams);
    if (value.trim()) {
      newParams.set('search', value.trim());
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryOptions = [
    { id: 'all', label: 'All Products' },
    ...categories.map((cat) => ({ id: cat.id, label: cat.shortName })),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Link & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              {activeCategory === 'dehydrated' 
                ? 'Dehydrated Veg & Fruit Powders' 
                : activeCategory === 'millet' 
                ? 'Millet Mix' 
                : 'Our Products'}
            </h1>
          </motion.div>

          {/* Search & Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4 mb-8"
          >
            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categoryOptions.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id as 'all' | 'dehydrated' | 'millet')}
                  className={`px-4 md:px-5 py-2 md:py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-glow'
                      : 'bg-card border border-border text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mb-6"
          >
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
          </motion.p>

          {/* Products Grid - Responsive: Single column on mobile, Grid on desktop */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-lg sm:text-xl text-muted-foreground mb-4">No products found</p>
              <button
                onClick={() => {
                  handleSearchChange('');
                  handleCategoryChange('all');
                }}
                className="text-primary hover:underline font-medium"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
      <CartSidebar />
      <FloatingCart />
      <CheckoutModal />
    </div>
  );
};

export default ProductsPage;