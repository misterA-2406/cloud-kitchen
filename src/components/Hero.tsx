import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../data/menu';

export default function Hero() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20would%20like%20to%20place%20an%20order.`;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark text-white">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80" 
          alt="Gourmet Dining Experience" 
          className="w-full h-full object-cover opacity-50 scale-105 animate-subtle-zoom"
        />
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-brand-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-lg"
          >
            Est. 2024 • Premium Cloud Kitchen
          </motion.span>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-6 tracking-tight">
            Crafted Fresh.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-200">
              Delivered Direct.
            </span>
          </h1>
          
          <p className="text-stone-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 font-light leading-relaxed px-4">
            Experience restaurant-quality dining in the comfort of your home. 
            Order directly from our kitchen — no middlemen, just pure flavor.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-amber-500 text-white rounded-full font-medium flex items-center justify-center gap-3 transition-all shadow-[0_0_40px_-10px_rgba(217,119,6,0.5)] hover:shadow-[0_0_60px_-15px_rgba(217,119,6,0.7)] hover:-translate-y-1"
            >
              <span>Order on WhatsApp</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full font-medium flex items-center justify-center gap-3 transition-all hover:border-white/30"
            >
              <Phone size={18} />
              <span>Call to Order</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
