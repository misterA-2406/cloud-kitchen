import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, Trash2, MessageCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_NUMBER } from '../data/menu';

export default function CartDrawer() {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    totalAmount, 
    totalItems, 
    isCartOpen, 
    setIsCartOpen,
    clearCart
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const restaurantName = "Gourmet Cloud Kitchen";
    let message = `Hi, I'd like to place an order at *${restaurantName}*.\n\n*Order Details:*\n`;

    items.forEach(item => {
      message += `${item.quantity} x ${item.name} - ₹${item.price * item.quantity}\n`;
    });

    message += `\n*Total Amount: ₹${totalAmount}*\n\nPlease confirm availability and delivery time.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Clear cart after a slight delay to allow the user to return if needed, 
    // but typically for this flow we might want to keep it or clear it. 
    // The requirement says "Cart clears after order is sent".
    window.open(url, '_blank');
    setTimeout(() => {
      clearCart();
      setIsCartOpen(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Cart Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-brand-dark text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-black transition-colors border border-white/10"
        onClick={() => setIsCartOpen(true)}
      >
        <div className="relative">
          <ShoppingBag size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-3 -right-3 w-6 h-6 bg-brand-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-brand-dark">
              {totalItems}
            </span>
          )}
        </div>
      </motion.button>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-[100dvh] w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-brand-light">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark">Your Order</h2>
                  <p className="text-stone-500 text-sm">{totalItems} items selected</p>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-stone-400 space-y-4">
                    <ShoppingBag size={64} className="opacity-20" />
                    <p className="text-lg font-medium text-stone-600">Your cart is empty</p>
                    <p className="text-sm max-w-xs">Looks like you haven't added anything to your cart yet.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 px-6 py-2 bg-brand-primary text-white rounded-full text-sm font-medium"
                    >
                      Browse Menu
                    </button>
                  </div>
                ) : (
                  items.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-medium text-brand-dark truncate pr-2">{item.name}</h3>
                          <span className="font-semibold text-brand-dark">₹{item.price * item.quantity}</span>
                        </div>
                        <p className="text-xs text-stone-500 mb-3">₹{item.price} per item</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 bg-stone-50 rounded-lg p-1 border border-stone-100">
                            <button 
                              onClick={() => item.quantity > 1 ? updateQuantity(item.id, -1) : removeFromCart(item.id)}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-md shadow-sm text-stone-600 hover:text-red-500 transition-colors"
                            >
                              {item.quantity === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                            </button>
                            <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-md shadow-sm text-stone-600 hover:text-green-600 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 bg-white border-t border-stone-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-stone-500 font-medium">Total Amount</span>
                    <span className="text-2xl font-serif font-bold text-brand-dark">₹{totalAmount}</span>
                  </div>
                  
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-900/20 transition-all hover:-translate-y-1"
                  >
                    <span>Order on WhatsApp</span>
                    <MessageCircle size={20} />
                  </button>
                  <p className="text-center text-[10px] text-stone-400 mt-3">
                    No payment required now. Pay on delivery/pickup.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
