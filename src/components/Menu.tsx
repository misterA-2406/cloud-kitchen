import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS, WHATSAPP_NUMBER } from '../data/menu';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('Starters');
  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));
  
  const { items: cartItems, addToCart, updateQuantity, removeFromCart } = useCart();

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  const getCartItem = (id: string) => cartItems.find(item => item.id === id);

  return (
    <section className="py-24 px-4 md:px-6 bg-brand-cream" id="menu">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-3 block">Our Menu</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-dark">Curated Delights</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-6 mb-10 gap-3 justify-start md:justify-center no-scrollbar px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all text-sm font-medium tracking-wide ${
                activeCategory === category
                  ? 'bg-brand-dark text-white shadow-lg transform scale-105'
                  : 'bg-white text-stone-500 border border-stone-200 hover:bg-stone-50 hover:text-stone-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const cartItem = getCartItem(item.id);
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white p-3 sm:p-4 rounded-3xl shadow-sm border border-stone-100 hover:shadow-card hover:border-brand-primary/20 transition-all duration-300 flex gap-3 sm:gap-5 items-center"
                >
                  <div className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 rounded-2xl overflow-hidden bg-stone-100 relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>
                  
                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-serif font-semibold text-lg text-brand-dark truncate pr-2">{item.name}</h3>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-1 ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                        <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                      </div>
                    </div>
                    
                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-2 mb-4 font-light">
                      {item.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-brand-dark text-lg">₹{item.price}</span>
                      
                      {cartItem ? (
                        <div className="flex items-center gap-3 bg-brand-dark text-white rounded-full px-1 py-1 pl-3">
                          <button 
                            onClick={() => cartItem.quantity > 1 ? updateQuantity(item.id, -1) : removeFromCart(item.id)}
                            className="w-6 h-6 flex items-center justify-center hover:text-brand-primary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold w-4 text-center">{cartItem.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center bg-white text-brand-dark rounded-full hover:bg-brand-primary hover:text-white transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => addToCart(item)}
                          className="px-4 py-2 bg-brand-light text-brand-dark text-xs font-bold uppercase tracking-wider rounded-full border border-stone-200 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all flex items-center gap-2 group/btn"
                        >
                          <span>Add</span>
                          <Plus size={14} className="group-hover/btn:rotate-90 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
