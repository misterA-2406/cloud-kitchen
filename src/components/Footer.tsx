import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../data/menu';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-6 border-t border-stone-800">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-4">Gourmet Cloud</h3>
            <p className="text-sm mb-4">
              Premium cloud kitchen delivering happiness directly to your doorstep.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-stone-800 rounded text-xs">FSSAI Lic. 1234567890</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Service Area</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Indiranagar, Koramangala, HSR Layout, Domlur</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>Mon-Sun: 11:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Gourmet Cloud Kitchen. All rights reserved.</p>
          <p>Designed for Demo Purposes</p>
        </div>
      </div>
    </footer>
  );
}
