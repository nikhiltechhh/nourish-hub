import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@vegafoods.com'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123, Organic Lane', 'Bangalore, India - 560001'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9AM - 6PM', 'Sunday: Closed'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
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
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to place an order? We&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-soft text-center card-hover"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-muted-foreground text-sm">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
