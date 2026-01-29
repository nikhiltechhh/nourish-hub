import { motion } from 'framer-motion';
import { Leaf, Heart, Award, Eye } from 'lucide-react';
import aboutImage from '@/assets/dehydrate.jpeg';

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
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-1 " />
              <div className="relative  w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 transform group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={aboutImage}
                  alt="Fresh organic ingredients from VeGa Foods"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 " />
              </div>
            </div>

            {/* Floating Badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring", bounce: 0.4 }}
              className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-4 bg-gradient-to-br from-primary to-primary/80 text-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-2xl hover:scale-110 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-xs sm:text-sm font-medium">Natural</div>
            </motion.div> */}

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2 space-y-4 md:space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-full">
                  Who We Are
                </span>
              </motion.div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-4 md:mb-6 leading-tight">
                About <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">VeGa Foods</span>
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                VeGa Foods was born from a simple yet powerful belief: good food should nourish 
                not only the body but also the planet. Rooted in a passion for natural, wholesome 
                ingredients, we bring together freshness, sustainability, and trust.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                From vibrant farms to your kitchen shelves, we work closely with growers and suppliers 
                who share our values—ensuring every item is pure, safe, and responsibly sourced.
              </p>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative bg-gradient-to-r from-primary/5 to-primary/10 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/50 rounded-l-xl md:rounded-l-2xl" />
              <h3 className="font-heading font-bold text-foreground mb-2 text-sm sm:text-base md:text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Our Mission
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed pl-4">
                To provide fresh, wholesome, and responsibly sourced food that enriches everyday living, 
                while promoting transparency, sustainability, and trust in every product we offer.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-2">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '15+', label: 'Products' },
                { value: '1000+', label: 'Happy Families' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative text-center p-3 sm:p-4 md:p-5  transition-all duration-300  overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 max-w-7xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4"
            >
              What Drives Us
            </motion.span>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Our Core Values
            </h3>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white p-5 sm:p-6 md:p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Container */}
                <div className="relative mb-4 sm:mb-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
                    <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h4 className="text-base sm:text-lg md:text-xl font-heading font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;