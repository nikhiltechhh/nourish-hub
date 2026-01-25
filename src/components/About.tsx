import { motion } from 'framer-motion';
import { Leaf, Heart, Shield, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'All our products are made from naturally sourced ingredients with no additives.',
    },
    {
      icon: Heart,
      title: 'Health Focused',
      description: 'Carefully formulated to maximize nutritional benefits for your wellness.',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous quality checks ensure only the best products reach you.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handpicked ingredients processed with utmost care and precision.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="text-gradient">VeGa Foods</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At VeGa Foods, we believe that true wellness starts with pure, natural nutrition. 
              Our journey began with a simple mission: to bring the goodness of nature directly 
              to your table without any compromise on quality or purity.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We carefully source our vegetables, fruits, and millets from trusted farmers who 
              share our commitment to sustainable and organic farming practices. Every product 
              undergoes meticulous processing to retain maximum nutritional value.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '15+', label: 'Products' },
                { value: '1000+', label: 'Happy Customers' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-card rounded-xl shadow-soft"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft card-hover"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
