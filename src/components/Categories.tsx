import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import categoryDehydrated from '@/assets/category-dehydrated.jpg';
import categoryMillet from '@/assets/category-millet.jpg';

const Categories = () => {
  const categories = [
    {
      id: 'dehydrated',
      name: 'Dehydrated Veg & Fruit Powders',
      description: 'Premium quality powders packed with natural nutrition',
      image: categoryDehydrated,
    },
    {
      id: 'millet',
      name: 'Millet Mix',
      description: 'Healthy and nutritious millet-based products',
      image: categoryMillet,
    },
  ];

  const scrollToProducts = (category: string) => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Discover Our Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore naturally crafted, premium-quality products curated for your well-being.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-3xl p-8 shadow-soft card-hover">
                {/* Circular Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300 shadow-lg">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full ring-2 ring-primary/20 ring-offset-4 ring-offset-card pointer-events-none" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>

                  <button
                    onClick={() => scrollToProducts(category.id)}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
                  >
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
