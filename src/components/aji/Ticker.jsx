import React from 'react';

const ITEMS = [
  'SABOR AUTÉNTICO',
  'COLOMBIA',
  'VENEZUELA',
  'PASIÓN LATINA',
  'EL MEJOR AJÍ DE VALENCIA',
  'AREPAS',
  'TEQUEÑOS',
  'CACHAPAS',
  'BANDEJA PAISA',
  'EMPANADAS',
];

export default function Ticker() {
  const content = ITEMS.map(t => `• ${t} `).join('');

  return (
    <div className="bg-cacao border-y border-bone/10 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-display text-xl sm:text-2xl font-bold text-bone/30 tracking-widest uppercase mx-4">
          {content}
        </span>
        <span className="font-display text-xl sm:text-2xl font-bold text-bone/30 tracking-widest uppercase mx-4" aria-hidden="true">
          {content}
        </span>
      </div>
    </div>
  );
}