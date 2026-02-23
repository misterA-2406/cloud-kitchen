/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import HowItWorks from './components/HowItWorks';
import WhyDirect from './components/WhyDirect';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-50 font-sans selection:bg-brand-primary/30">
        <Header />
        
        <main>
          <Hero />
          <div id="about"><About /></div>
          <div id="menu"><Menu /></div>
          <div id="process"><HowItWorks /></div>
          <WhyDirect />
          <div id="contact"><Contact /></div>
        </main>

        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
