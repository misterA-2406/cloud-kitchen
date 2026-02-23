import { motion } from 'motion/react';
import { ChefHat, Leaf, Clock } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 bg-brand-light">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-4 block">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-dark mb-8 leading-tight">
              A modern kitchen built around <span className="italic text-brand-primary">freshness</span> and connection.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 font-light">
              We believe that great food shouldn't travel through middlemen. By connecting directly with you, we ensure that every dish retains its chef-intended flavor, temperature, and texture.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-primary shrink-0 mt-1">
                  <Leaf size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-brand-dark">Fresh Ingredients</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">Sourced daily from local premium vendors.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-primary shrink-0 mt-1">
                  <ChefHat size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-brand-dark">Master Chefs</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">Culinary experts with 10+ years of experience.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80" 
                alt="Chef Plating" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-stone-100 max-w-[200px] hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-brand-primary" size={24} />
                <span className="font-serif text-2xl font-bold text-brand-dark">35m</span>
              </div>
              <p className="text-xs text-stone-500 font-medium uppercase tracking-wide">Average Delivery Time</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
