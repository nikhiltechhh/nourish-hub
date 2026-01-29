import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Products from '@/components/Products';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import FloatingCart from '@/components/FloatingCart';
import CheckoutModal from '@/components/CheckoutModal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        {/* <Products /> */}
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <CartSidebar />
      <FloatingCart />
      <CheckoutModal />
    </div>
  );
};

export default Index;
