import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className={`font-serif font-bold text-2xl ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            Gourmet<span className="text-brand-primary">Cloud</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Menu', 'Process', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium hover:text-brand-primary transition-colors ${
                  isScrolled ? 'text-stone-600' : 'text-white/90'
                }`}
              >
                {item}
              </a>
            ))}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="px-5 py-2 bg-brand-primary text-white rounded-full text-sm font-medium hover:bg-brand-secondary transition-colors"
            >
              Order Now
            </a>
          </nav>

          <button 
            className="md:hidden text-brand-primary"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} color={isScrolled ? '#1c1917' : '#ffffff'} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col h-[100dvh]"
          >
            <div className="p-6 flex justify-between items-center border-b border-stone-100">
              <span className="font-serif font-bold text-2xl text-stone-900">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} className="text-stone-500" />
              </button>
            </div>
            <div className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto">
              {['About', 'Menu', 'Process', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif font-medium text-stone-800"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="p-6 border-t border-stone-100">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="w-full py-4 bg-brand-primary text-white rounded-xl font-medium flex items-center justify-center gap-2 text-lg"
              >
                <ShoppingBag size={20} />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
