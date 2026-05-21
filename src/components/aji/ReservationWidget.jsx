import React, { useState } from 'react';
import { Phone, X, Clock, MapPin } from 'lucide-react';

export default function ReservationWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <a
        href="tel:+34673065073"
        onClick={(e) => { e.preventDefault(); setOpen(true); }}
        className="fixed bottom-6 right-6 z-40 bg-habanero text-cacao w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-glow"
        aria-label="Llamar al restaurante"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Expanded widget */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-4 sm:p-8">
          <div className="absolute inset-0 bg-cacao/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative bg-habanero rounded-3xl p-8 shadow-2xl w-full max-w-sm animate-fade-in-up">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-cacao/60 hover:text-cacao transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display text-3xl font-black text-cacao">LLÁMANOS</h3>
            <p className="font-body text-cacao/70 text-sm mt-1">
              Reserva tu mesa o haz tu pedido directamente.
            </p>

            <a
              href="tel:+34673065073"
              className="flex items-center justify-center gap-3 bg-cacao text-bone font-heading font-bold text-lg px-6 py-4 rounded-full mt-6 hover:bg-cacao/90 active:scale-95 transition-all duration-300 w-full"
            >
              <Phone className="w-5 h-5" />
              673 06 50 73
            </a>

            <div className="mt-6 pt-5 border-t border-cacao/20 space-y-3">
              <div className="flex items-center gap-3 text-cacao/80">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="font-body text-sm">C/ dels Borges, 3 · Ciutat Vella, Valencia</span>
              </div>
              <div className="flex items-start gap-3 text-cacao/80">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                <div className="font-body text-sm space-y-0.5">
                  <div>Lun / Mié–Vie: 11–16h / 20–23h</div>
                  <div>Sáb – Dom: 11:00 – 23:00</div>
                  <div className="text-cacao/50">Martes: Cerrado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}