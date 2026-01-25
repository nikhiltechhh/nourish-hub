import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Categories', href: '#categories' },
    { label: 'Products', href: '#products' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="VeGa Foods" className="h-16 w-auto mb-4 rounded-lg bg-white p-2" />
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Bringing the goodness of nature to your table. Premium dehydrated 
              vegetable powders and nutritious millet products.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-heading font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#products')}
                  className="text-background/70 hover:text-primary transition-colors duration-200"
                >
                  Dehydrated Powders
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#products')}
                  className="text-background/70 hover:text-primary transition-colors duration-200"
                >
                  Millet Mix
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-heading font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>+91 98765 43210</li>
              <li>info@vegafoods.com</li>
              <li>123, Organic Lane</li>
              <li>Bangalore, India - 560001</li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm flex items-center justify-center gap-1">
            © 2026 VeGa Foods. Made with <Heart className="w-4 h-4 text-primary" /> for healthy living.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
