import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import categoryDehydrated from '@/assets/category-dehydrated.jpg';
import categoryMillet from '@/assets/category-millet.jpg';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'dehydrated',
      name: 'Dehydrated Fruit & Veg Powders',
      image: categoryDehydrated,
    },
    {
      id: 'millet',
      name: 'Multi Millet Mixes',
      image: categoryMillet,
    },
  ];

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
            Everything You Need for a{' '}
            <span className="text-gradient">Healthier Kitchen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore naturally crafted, premium-quality products curated for your well-being.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/products?category=${category.id}`)}
            >
              {/* Circular Image */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden ring-4 ring-primary/40 group-hover:ring-primary group-hover:ring-[6px] transition-all duration-300 shadow-lg"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  {/* Decorative outer ring */}
                  <div className="absolute inset-[-8px] rounded-full ring-2 ring-primary/20 pointer-events-none" />
                </div>

                {/* Category Name */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-foreground text-center group-hover:text-primary transition-colors duration-300 max-w-[200px]">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
