'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { Trash2, Minus, Plus, ArrowRight, RefreshCw, ShoppingBag } from 'lucide-react';

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity, clearCart, getSubtotal } = useCartStore();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = getSubtotal();
  const hasItems = items.length > 0;

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-playfair font-bold text-warm-white">Your Shopping Cart</h1>
          <p className="text-sm text-muted mt-1">Review your customized gift orders before proceeding</p>
        </div>
        {hasItems && (
          <div className="flex items-center gap-4">
            <Link
              href="/shopping"
              className="text-xs uppercase tracking-wider text-muted hover:text-warm-white transition-colors"
            >
              &larr; Continue Shopping
            </Link>
            <button
              onClick={clearCart}
              className="text-xs uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>

      {!hasItems ? (
        <div className="bg-bg-secondary border border-dark-gray/50 rounded-xl p-12 text-center space-y-6">
          <div className="w-20 h-20 bg-dark-gray rounded-full mx-auto flex items-center justify-center">
            <ShoppingBag className="w-8 h-8 text-gold" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-warm-white">Your cart is empty</h2>
            <p className="text-muted mt-2">Looks like you haven&apos;t added any customized gifts yet.</p>
          </div>
          <Link 
            href="/shopping" 
            className="inline-block bg-gold text-bg-primary px-8 py-3 rounded-full font-semibold hover:bg-gold-highlight transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => {
              const categorySlug = slugify(item.product.category);
              const productImage = item.product.images && item.product.images.length > 0 ? item.product.images[0] : null;

              return (
                <div key={item.id} className="bg-bg-secondary border border-dark-gray/50 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
                  
                  {/* Thumbnail: Product Catalogue Image with "Photo Attached" badge (Never raw upload) */}
                  <div className="relative w-full sm:w-32 aspect-square bg-dark-gray rounded-lg overflow-hidden shrink-0 border border-dark-gray/50 flex items-center justify-center">
                    {productImage ? (
                      <Image 
                        src={productImage} 
                        alt={item.product.name}
                        fill
                        sizes="128px"
                        className="object-cover object-center"
                      />
                    ) : (
                      <span className="text-xs font-playfair italic text-gold">{item.product.category}</span>
                    )}
                    
                    {/* "Photo Attached" Badge */}
                    <div className="absolute bottom-1 left-1 right-1 bg-bg-primary/95 text-gold text-[10px] uppercase font-semibold text-center py-1 px-1 rounded border border-gold/30 shadow-md">
                      Photo Attached ({item.uploadedPhotos.length})
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <Link href={`/shopping/${categorySlug}/${item.product.slug}`}>
                            <h3 className="text-lg font-semibold text-warm-white hover:text-gold transition-colors">{item.product.name}</h3>
                          </Link>
                          <p className="text-sm text-muted">{item.product.category}</p>
                        </div>
                        <p className="font-bold text-gold shrink-0">₹{(item.product.basePrice || item.product.price || 0)}</p>
                      </div>

                      {/* Customization Details & Edit Action */}
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
                        <span className="bg-dark-gray/60 border border-white/5 px-2.5 py-1 rounded text-warm-white/80">
                          {item.uploadedPhotos.length} {item.uploadedPhotos.length === 1 ? 'Photo' : 'Photos'} Attached
                        </span>
                        <Link
                          href={`/shopping/${categorySlug}/${item.product.slug}`}
                          className="text-gold hover:text-gold-highlight inline-flex items-center gap-1 font-medium transition-colors"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          Edit Customization
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                      <div className="flex items-center border border-dark-gray rounded-full overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 text-muted hover:text-warm-white hover:bg-dark-gray transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 text-muted hover:text-warm-white hover:bg-dark-gray transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-bg-secondary border border-dark-gray/50 rounded-xl p-6 space-y-6 sticky top-24">
              <h3 className="text-xl font-playfair font-semibold text-warm-white">Order Summary</h3>
              
              <div className="space-y-3 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-warm-white font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-gold text-xs font-medium">To be confirmed on WhatsApp</span>
                </div>
                <div className="border-t border-dark-gray/50 pt-3 flex justify-between font-bold text-lg">
                  <span className="text-warm-white">Item Total</span>
                  <span className="text-gold">₹{subtotal}</span>
                </div>
              </div>

              <Link 
                href="/shopping/checkout"
                className="w-full bg-gold text-bg-primary py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gold-highlight hover:scale-[1.02] transition-all shadow-lg"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
