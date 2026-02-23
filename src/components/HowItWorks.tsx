import { motion } from 'motion/react';
import { Utensils, MessageSquare, MapPin, Check } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Select Meal",
      desc: "Browse our curated menu."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp Us",
      desc: "One tap to start your order."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Share Location",
      desc: "We deliver to your doorstep."
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Enjoy Food",
      desc: "Fresh, hot, and delicious."
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-4 block">Simple Process</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 leading-tight">
              From our kitchen to your table in <span className="text-brand-primary">4 simple steps</span>.
            </h2>
            <p className="text-stone-400 text-lg font-light mb-8">
              We've stripped away the complexity. No apps to download, no accounts to create. Just good food, ordered simply.
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-4 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-stone-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
