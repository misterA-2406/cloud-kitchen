import { ShieldCheck, Zap, Heart, IndianRupee } from 'lucide-react';

export default function WhyDirect() {
  const benefits = [
    {
      icon: <IndianRupee size={24} />,
      title: "Zero Commissions",
      desc: "You pay only for the food. No hidden service fees or surge pricing."
    },
    {
      icon: <Zap size={24} />,
      title: "Priority Delivery",
      desc: "Direct orders skip the queue. Your food leaves our kitchen first."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Quality Guarantee",
      desc: "We take full responsibility for the hygiene and packaging."
    },
    {
      icon: <Heart size={24} />,
      title: "Personal Care",
      desc: "Special requests? Allergies? Tell us directly, we listen."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-3 block">The Direct Advantage</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-dark">Why Order Direct?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 rounded-3xl bg-brand-light border border-stone-100 hover:shadow-card hover:-translate-y-1 transition-all duration-300 text-center group">
              <div className="w-14 h-14 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="font-serif text-xl font-medium text-brand-dark mb-3">{benefit.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
