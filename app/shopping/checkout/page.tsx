'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { items, getSubtotal, clearCart } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    router.push('/shopping/cart');
    return null;
  }

  const subtotal = getSubtotal();
  // Mock standard shipping rule for now, wait: User said "Do not invent shipping charges. Make shipping rules configurable."
  // Wait, I will just set standard shipping to a fixed base if none, or 0. Let's make it 0 for this demo unless explicitly calculated.
  // Actually some items have additional courier charges in their data!
  const totalCourierCharge = items.reduce((total, item) => {
    const additionalCharges = item.product.additionalCharges as { courier?: number } | undefined;
    const charge = additionalCharges?.courier || 0;
    return total + (charge * item.quantity);
  }, 0);

  const grandTotal = subtotal + totalCourierCharge;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const customer = {
      name: formData.get('name'),
      mobile: formData.get('mobile'),
      email: formData.get('email'),
      address: formData.get('address'),
      city: formData.get('city'),
      state: formData.get('state'),
      pincode: formData.get('pincode'),
      instructions: formData.get('instructions')
    };

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer,
          items,
          subtotal,
          shipping: totalCourierCharge,
          total: grandTotal
        })
      });

      const result = await response.json();
      
      if (result.success) {
        clearCart();
        router.push(`/shopping/order-success/${result.token || result.orderId}`);
      } else {
        alert(result.error || 'Failed to place order.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-playfair font-bold text-warm-white mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Checkout Form */}
        <div className="space-y-8">
          <div className="bg-bg-secondary p-6 rounded-xl border border-dark-gray/50 space-y-6">
            <h2 className="text-xl font-semibold text-warm-white">Contact & Delivery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-muted">Full Name *</label>
                <input name="name" required type="text" className="w-full bg-dark-gray/30 border border-dark-gray rounded-lg px-4 py-3 text-warm-white focus:border-gold outline-none transition-colors" placeholder="John Doe" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted">Mobile Number *</label>
                <input name="mobile" required type="tel" className="w-full bg-dark-gray/30 border border-dark-gray rounded-lg px-4 py-3 text-warm-white focus:border-gold outline-none transition-colors" placeholder="+91 9876543210" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-muted">Email Address *</label>
                <input name="email" required type="email" className="w-full bg-dark-gray/30 border border-dark-gray rounded-lg px-4 py-3 text-warm-white focus:border-gold outline-none transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-muted">Address *</label>
                <textarea name="address" required rows={3} className="w-full bg-dark-gray/30 border border-dark-gray rounded-lg px-4 py-3 text-warm-white focus:border-gold outline-none transition-colors" placeholder="House/Flat No, Street Name, Area..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted">City *</label>
                <input name="city" required type="text" className="w-full bg-dark-gray/30 border border-dark-gray rounded-lg px-4 py-3 text-warm-white focus:border-gold outline-none transition-colors" placeholder="Chennai" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted">State *</label>
                <input name="state" required type="text" className="w-full bg-dark-gray/30 border border-dark-gray rounded-lg px-4 py-3 text-warm-white focus:border-gold outline-none transition-colors" placeholder="Tamil Nadu" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted">Pincode *</label>
                <input name="pincode" required type="text" className="w-full bg-dark-gray/30 border border-dark-gray rounded-lg px-4 py-3 text-warm-white focus:border-gold outline-none transition-colors" placeholder="600001" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-muted">Delivery Instructions (Optional)</label>
                <input name="instructions" type="text" className="w-full bg-dark-gray/30 border border-dark-gray rounded-lg px-4 py-3 text-warm-white focus:border-gold outline-none transition-colors" placeholder="e.g. Leave with security" />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-bg-secondary p-6 rounded-xl border border-dark-gray/50 space-y-6 sticky top-24">
            <h2 className="text-xl font-semibold text-warm-white">Order Summary</h2>
            
            <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2">
              {items.map((item) => {
                const productImage = item.product.images && item.product.images.length > 0 ? item.product.images[0] : null;
                return (
                  <div key={item.id} className="flex items-center gap-4 text-sm">
                    <div className="w-16 h-16 bg-dark-gray rounded overflow-hidden shrink-0 border border-dark-gray relative flex items-center justify-center">
                      {productImage ? (
                         <img src={productImage} alt={item.product.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-[10px] text-gold font-playfair italic">MPC</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-warm-white line-clamp-1">{item.product.name}</p>
                      <p className="text-xs text-muted">Qty: {item.quantity} · {item.uploadedPhotos.length} Photo Attached</p>
                    </div>
                    <div className="font-semibold text-warm-white">
                      ₹{(item.product.basePrice || item.product.price || 0) * item.quantity}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-dark-gray/50 pt-4 space-y-3 text-sm text-muted">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-warm-white">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-gold text-xs font-medium">To be confirmed on WhatsApp</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-dark-gray/50">
                <span className="text-warm-white">Item Total</span>
                <span className="text-gold">₹{subtotal}</span>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-full font-semibold transition-all shadow-lg ${
                isSubmitting 
                  ? 'bg-dark-gray text-muted cursor-not-allowed' 
                  : 'bg-gold text-bg-primary hover:bg-gold-highlight hover:scale-[1.02]'
              }`}
            >
              {isSubmitting ? 'Processing Order...' : `Place Order (₹${subtotal})`}
            </button>
            <p className="text-xs text-center text-muted">
              Payment gateway integration is planned for a future phase. Clicking place order will create a PENDING_PAYMENT order.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
