import { motion } from 'framer-motion';
import { Leaf, Heart, Shield, Award, Eye, Sparkles } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

const About = () => {
  const coreValues = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We prioritize freshness, purity, and safety in every product.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source responsibly and support earth-friendly farming practices.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: "Honesty matters—our customers know exactly what they're buying.",
    },
    {
      icon: Heart,
      title: 'Community Care',
      description: 'Supporting healthier living within families and local producers.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Fresh organic ingredients from VeGa Foods"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-glow hidden md:block"
            >
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Natural</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="text-gradient">VeGa Foods</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              VeGa Foods was born from a simple yet powerful belief: good food should nourish 
              not only the body but also the planet. Rooted in a passion for natural, wholesome 
              ingredients, VeGa Foods brings together freshness, sustainability, and trust in every product.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From vibrant farms to your kitchen shelves, we work closely with growers and suppliers 
              who share our values—ensuring every item we offer is pure, safe, and responsibly sourced. 
              At VeGa Foods, we're not just delivering products—we're sharing a lifestyle built on 
              quality, care, and conscious choices.
            </p>

            {/* Mission Statement */}
            <div className="bg-primary/10 p-6 rounded-2xl mb-8 border-l-4 border-primary">
              <h3 className="font-heading font-bold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To provide fresh, wholesome, and responsibly sourced food that enriches everyday living, 
                while promoting transparency, sustainability, and trust in every product we offer.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '15+', label: 'Products' },
                { value: '1000+', label: 'Happy Families' },
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
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft card-hover text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
