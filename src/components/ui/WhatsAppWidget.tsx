'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const phoneNumber = '4917790708811';
  const message = encodeURIComponent('Hi! Ich interessiere mich für ein Training.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
