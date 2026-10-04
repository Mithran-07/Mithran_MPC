'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';

const serviceOptions = [
  'Wedding Photography & Film',
  'Event Photography & Broadcasting',
  'Studio Portrait Session',
  'Commercial / Brand Shoot',
  'Customized Gifts',
  '4K Video Production',
  'Live Streaming Services',
  'LED Video Wall Setup',
  'Legacy Media Conversion (VHS/VCD/DVD)',
  'Other Inquiries',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceOptions[0],
    eventDate: '',
    message: '',
  });

  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const buildWhatsAppUrl = (data = formData) => {
    const lines = [
      `*MITHRAN PHOTO CLICKZ — Studio Inquiry*`,
      ``,
      `*Name:* ${data.name || 'Not provided'}`,
      `*Phone:* ${data.phone || 'Not provided'}`,
      data.email ? `*Email:* ${data.email}` : null,
      `*Service:* ${data.service}`,
      data.eventDate ? `*Estimated Date:* ${data.eventDate}` : null,
      data.message ? `*Vision / Details:* ${data.message}` : null,
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    return {
      url: `https://wa.me/919884858190?text=${encodeURIComponent(fullMessage)}`,
      text: fullMessage,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { url, text } = buildWhatsAppUrl();
    setSubmittedMessage(text);

    // Open WhatsApp directly
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (submittedMessage) {
    const { url } = buildWhatsAppUrl();

    return (
      <div className="bg-bg-secondary p-8 md:p-12 border border-gold/40 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full border border-gold flex items-center justify-center text-gold text-2xl">
          ✓
        </div>
        <h3 className="font-playfair text-3xl text-warm-white">
          WhatsApp Inquiry Prepared
        </h3>
        <p className="font-manrope text-base text-muted max-w-md mx-auto leading-relaxed">
          Your inquiry has been formatted and opened in WhatsApp to chat directly with Lion B. Anand Kumar / MITHRAN PHOTO CLICKZ.
        </p>

        {/* Formatted Summary Box */}
        <div className="bg-bg-primary p-6 border border-white/5 text-left max-w-lg mx-auto font-manrope text-xs text-muted space-y-2">
          <p className="font-semibold text-gold uppercase tracking-wider mb-2">Inquiry Summary:</p>
          <p><span className="text-warm-white">Name:</span> {formData.name}</p>
          <p><span className="text-warm-white">Phone:</span> {formData.phone}</p>
          {formData.email && <p><span className="text-warm-white">Email:</span> {formData.email}</p>}
          <p><span className="text-warm-white">Service:</span> {formData.service}</p>
          {formData.eventDate && <p><span className="text-warm-white">Date:</span> {formData.eventDate}</p>}
          {formData.message && <p><span className="text-warm-white">Details:</span> {formData.message}</p>}
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center font-manrope text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 px-8 py-4 bg-gold text-bg-primary hover:bg-gold-highlight"
          >
            Reopen WhatsApp &rarr;
          </a>
          <button
            onClick={() => setSubmittedMessage(null)}
            className="font-manrope text-xs uppercase tracking-widest text-muted hover:text-warm-white underline"
          >
            Edit Inquiry Details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block font-manrope text-[11px] uppercase tracking-[0.2em] text-gold font-medium">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Anand Kumar"
            className="w-full bg-bg-secondary border border-white/10 px-4 py-3.5 text-warm-white font-manrope text-sm focus:border-gold focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block font-manrope text-[11px] uppercase tracking-[0.2em] text-gold font-medium">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 98765 43210"
            className="w-full bg-bg-secondary border border-white/10 px-4 py-3.5 text-warm-white font-manrope text-sm focus:border-gold focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Email & Event Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block font-manrope text-[11px] uppercase tracking-[0.2em] text-gold font-medium">
            Email Address (Optional)
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. yourname@example.com"
            className="w-full bg-bg-secondary border border-white/10 px-4 py-3.5 text-warm-white font-manrope text-sm focus:border-gold focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="eventDate" className="block font-manrope text-[11px] uppercase tracking-[0.2em] text-gold font-medium">
            Estimated Event Date (Optional)
          </label>
          <input
            id="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full bg-bg-secondary border border-white/10 px-4 py-3.5 text-warm-white font-manrope text-sm focus:border-gold focus:outline-none transition-colors [color-scheme:dark]"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div className="space-y-2">
        <label htmlFor="service" className="block font-manrope text-[11px] uppercase tracking-[0.2em] text-gold font-medium">
          Service Required *
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full bg-bg-secondary border border-white/10 px-4 py-3.5 text-warm-white font-manrope text-sm focus:border-gold focus:outline-none transition-colors cursor-pointer"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-bg-secondary text-warm-white">
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block font-manrope text-[11px] uppercase tracking-[0.2em] text-gold font-medium">
          Tell Us About Your Vision &amp; Requirements
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please share event details, venue in Chennai or Tamil Nadu, specific coverage requirements..."
          className="w-full bg-bg-secondary border border-white/10 px-4 py-3.5 text-warm-white font-manrope text-sm focus:border-gold focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center font-manrope text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 px-10 py-4 border border-gold text-warm-white hover:bg-gold hover:text-bg-primary focus-visible:bg-gold focus-visible:text-bg-primary"
        >
          Send Inquiry via WhatsApp &rarr;
        </button>

        <a
          href={siteConfig.phoneHref}
          className="w-full sm:w-auto inline-flex items-center justify-center font-manrope text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 px-8 py-4 border border-white/10 text-muted hover:border-gold/60 hover:text-gold"
        >
          Call Studio: {siteConfig.phone}
        </a>
      </div>
    </form>
  );
}

