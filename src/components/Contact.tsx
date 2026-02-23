import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../data/menu';

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-brand-dark text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-3 block">Ready to Taste?</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 leading-tight">
                Your table is ready.<br />
                <span className="text-stone-400">At your home.</span>
              </h2>
              <p className="text-stone-300 text-lg mb-10 font-light">
                Skip the apps. Order directly for the best prices, hottest food, and priority service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand-primary hover:bg-amber-500 text-white rounded-full font-medium flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-amber-600/20 hover:-translate-y-1"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Order</span>
                </a>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium flex items-center justify-center gap-3 transition-all"
                >
                  <Phone size={20} />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-white/5 text-brand-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-white mb-1">Service Area</h4>
                    <p className="text-stone-400 text-sm">Indiranagar, Koramangala, HSR Layout, Domlur</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-white/5 text-brand-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-white mb-1">Working Hours</h4>
                    <p className="text-stone-400 text-sm">Mon - Sun: 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[300px] rounded-2xl overflow-hidden relative border border-white/10 group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423075!2d77.63860831482204!3d12.971774990855732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a78f81bd15%3A0xc67e534420e4d9c6!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1677834567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 pointer-events-none border-4 border-brand-dark/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
