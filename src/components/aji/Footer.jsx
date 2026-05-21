import React from 'react';
import { MapPin, Phone, Clock, Instagram, ExternalLink } from 'lucide-react';

const HOURS = [
  { day: 'Lunes', hours: '11:00 – 16:00 · 20:00 – 23:00' },
  { day: 'Martes', hours: 'Cerrado', closed: true },
  { day: 'Miércoles', hours: '11:00 – 16:00 · 20:00 – 23:00' },
  { day: 'Jueves', hours: '11:00 – 16:00 · 20:00 – 23:00' },
  { day: 'Viernes', hours: '11:00 – 16:00 · 20:00 – 23:00' },
  { day: 'Sábado', hours: '11:00 – 23:00' },
  { day: 'Domingo', hours: '11:00 – 23:00' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-cacao text-bone">
      {/* Map band */}
      <div className="w-full h-56 sm:h-72 relative overflow-hidden">
        <iframe
          title="Ubicación de Ají Cocina Latina en Valencia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.292928!2d-0.37969!3d39.47701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048b0e6d9eb69%3A0x9e8a0c1bb3a9a38!2sC%2F%20dels%20Borges%2C%203%2C%2046003%20Val%C3%A8ncia!5e0!3m2!1ses!2ses!4v1"
          className="w-full h-full border-0 grayscale contrast-125 opacity-50"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cacao via-transparent to-cacao pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="font-display text-5xl font-black text-habanero">AJÍ</span>
            <p className="font-body text-bone/50 text-sm mt-3 leading-relaxed max-w-xs">
              La mayor variedad de cocina latina en Valencia. Disfruta de Colombia, Venezuela y México en el corazón de Ciutat Vella.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/ajilatino"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bone/10 flex items-center justify-center hover:bg-habanero hover:text-cacao transition-all duration-300"
                aria-label="Instagram de Ají"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tripadvisor.es/Restaurant_Review-g187529-d24969153-Reviews-Aji_Cocina_Latina-Valencia_Province_of_Valencia_Valencian_Community.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bone/10 flex items-center justify-center hover:bg-[#34E0A1] hover:text-cacao transition-all duration-300"
                aria-label="TripAdvisor de Ají"
              >
                <span className="font-display font-black text-xs">TA</span>
              </a>
            </div>

            {/* TripAdvisor badge */}
            <a
              href="https://www.tripadvisor.es/Restaurant_Review-g187529-d24969153-Reviews-Aji_Cocina_Latina-Valencia_Province_of_Valencia_Valencian_Community.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-[#34E0A1]/10 border border-[#34E0A1]/20 rounded-xl px-4 py-3 hover:bg-[#34E0A1]/20 transition-all"
            >
              <div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-[#34E0A1] text-sm">●</span>
                  ))}
                </div>
                <span className="block font-heading font-bold text-bone text-sm mt-0.5">4.8 · TripAdvisor</span>
                <span className="block font-body text-bone/40 text-xs">Travellers' Choice 2024</span>
              </div>
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-bone text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-habanero shrink-0 mt-0.5" />
                <span className="font-body text-bone/60 text-sm">
                  C/ dels Borges, 3<br />Ciutat Vella, 46003<br />València, España
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-habanero shrink-0" />
                <a href="tel:+34673065073" className="font-body text-bone/60 text-sm hover:text-habanero transition-colors font-medium">
                  673 06 50 73
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-habanero shrink-0" />
                <a
                  href="https://instagram.com/ajilatino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-bone/60 text-sm hover:text-habanero transition-colors"
                >
                  @ajilatino
                </a>
              </li>
            </ul>

            <a
              href="tel:+34673065073"
              className="inline-flex items-center gap-2 bg-habanero text-cacao font-heading font-bold text-sm px-6 py-3 rounded-full mt-8 hover:bg-habanero/90 active:scale-95 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Llamar Ahora
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-bold text-bone text-lg mb-6">Horario</h3>
            <ul className="space-y-2.5">
              {HOURS.map(h => (
                <li key={h.day} className="flex justify-between font-body text-sm gap-4">
                  <span className="text-bone/60 shrink-0">{h.day}</span>
                  <span className={h.closed ? 'text-habanero/70' : 'text-bone/80 text-right'}>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-bone/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-body text-bone/30 text-xs">
            © 2026 Ají Cocina Latina. Todos los derechos reservados.
          </span>
          <span className="font-body text-bone/30 text-xs">
            C/ dels Borges, 3 · Ciutat Vella · Valencia
          </span>
        </div>
      </div>
    </footer>
  );
}