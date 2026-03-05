import { motion } from 'framer-motion';
import { Facebook, Instagram, Heart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Categories', href: '#categories' },
    { label: 'Products', to: '/products' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/VeGaFoods', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/Vegafoods.au', label: 'Instagram' },
    { icon: Mail, href: 'mailto:Vegafoods.enquiry@gmail.com', label: 'Email' },
  ];

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
              At VeGa Foods, we believe good food should nourish not only the body but also the planet.
              Fresh • Pure • Natural
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
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
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-background/70 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => link.href && scrollToSection(link.href)}
                      className="text-background/70 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  )}
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
                <Link
                  to="/products?category=dehydrated"
                  className="text-background/70 hover:text-primary transition-colors duration-200"
                >
                  Dehydrated Powders
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=millet"
                  className="text-background/70 hover:text-primary transition-colors duration-200"
                >
                  Millet Mix
                </Link>
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
              <li>
                <a href="mailto:Vegafoods.enquiry@gmail.com" className="hover:text-primary transition-colors">
                  Vegafoods.enquiry@gmail.com
                </a>
              </li>
              <li>
                <a href="https://facebook.com/VeGaFoods" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Facebook: VeGa Foods
                </a>
              </li>
              <li>
                <a href="https://instagram.com/Vegafoods.au" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Instagram: @Vegafoods.au
                </a>
              </li>
              <li>Westmead, NSW, Australia</li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm flex items-center justify-center gap-1">
            © 2026 VeGa Foods. Fresh • Pure • Natural
          </p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Link to="/privacy" className="text-background/50 hover:text-primary text-xs transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-background/30 text-xs">•</span>
            <Link to="/terms" className="text-background/50 hover:text-primary text-xs transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;