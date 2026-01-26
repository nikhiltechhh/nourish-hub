import { motion } from 'framer-motion';
import { Leaf, Eye, Heart, Sparkles, CheckCircle } from 'lucide-react';
import whyChooseImage from '@/assets/why-choose-us.jpg';

const WhyChooseUs = () => {
  const reasons = [
    { icon: Leaf, text: 'Farm-fresh quality' },
    { icon: Eye, text: 'Honest and transparent sourcing' },
    { icon: Heart, text: 'Sustainable practices' },
    { icon: Sparkles, text: 'Trusted by families' },
    { icon: CheckCircle, text: 'Consistent freshness and taste' },
  ];

  const productBenefits = [
    '100% natural, no additives or preservatives',
    'Retains natural flavour, colour, and nutrients',
    'Long shelf life and easy to store',
    'Quick and convenient to use in recipes',
    'Perfect for smoothies, baking, cooking, and more',
    'Clean-label and versatile for all culinary applications',
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Why Choose <span className="text-gradient">VeGa Foods?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At VeGa Foods, we believe that better food leads to better living. That's why we 
              source responsibly, prioritize quality, and deliver products that nourish your 
              family and support a healthier planet.
            </p>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{reason.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={whyChooseImage}
                alt="Sustainable farming at VeGa Foods"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Key Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-accent/30 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8">
            Key Benefits of Our Products
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-soft"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
