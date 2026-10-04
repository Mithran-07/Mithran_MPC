'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { createWhatsAppOrderUrl } from '@/lib/whatsapp';

export default function OrderSuccessPage({ params }: { params: Promise<{ orderId: string }> }) {
  const [order, setOrder] = useState<any /* eslint-disable-line @typescript-eslint/no-explicit-any */>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    params.then(p => {
      
      // Fetch order details
      fetch(`/api/orders/${p.orderId}`)
        .then(res => res.json())
        .then(data => {
          if (data.order) setOrder(data.order);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    });
  }, [params]);

  if (loading) {
    return <div className="text-center py-20 text-warm-white">Loading order details...</div>;
  }

  if (!order) {
    return <div className="text-center py-20 text-red-400">Order not found.</div>;
  }

  const whatsappUrl = createWhatsAppOrderUrl({
    orderId: order.orderId,
    customerName: order.customer.name,
    customerPhone: order.customer.mobile,
    customerEmail: order.customer.email,
    items: order.items,
    total: order.total,
    address: `${order.customer.address}`,
    city: order.customer.city,
    state: order.customer.state,
    pincode: order.customer.pincode,
    deliveryInstructions: order.customer.instructions
  });

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center max-w-2xl mx-auto text-center space-y-6">
      <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center">
        <CheckCircle className="w-12 h-12 text-green-500" />
      </div>
      
      <h1 className="text-4xl font-playfair font-bold text-warm-white">
        Order Created Successfully!
      </h1>
      
      <p className="text-lg text-muted">
        Thank you for choosing Mithran Gifts. We have sent an email confirmation to <span className="text-warm-white font-semibold">{order.customer.email}</span>.
      </p>

      <div className="bg-bg-secondary border border-dark-gray/50 rounded-xl p-8 w-full">
        <p className="text-sm text-muted uppercase tracking-wider mb-2">Your Order Reference</p>
        <p className="text-2xl font-mono font-bold text-gold">{order.orderId}</p>
        <p className="text-sm text-muted mt-4">Current Status: <span className="text-yellow-500 font-semibold">{order.status.replace('_', ' ')}</span></p>
      </div>

      <div className="pt-6 w-full max-w-md space-y-4">
        <p className="text-sm text-muted mb-4">Please submit your order to our WhatsApp team for payment processing and customization review.</p>
        
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white py-4 rounded-full font-semibold hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-lg"
          onClick={() => {
             // Optionally update status to WAITING_FOR_PAYMENT via API here
             fetch(`/api/orders/${order.orderId}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'WAITING_FOR_PAYMENT' })
             });
          }}
        >
          <MessageCircle className="w-5 h-5" />
          PLACE ORDER ON WHATSAPP
        </a>

        <Link 
          href="/shopping"
          className="block w-full bg-dark-gray text-warm-white py-4 rounded-full font-semibold hover:bg-dark-gray/80 transition-colors border border-dark-gray/50"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
