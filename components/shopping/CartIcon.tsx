'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function CartIcon() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/shopping/cart" className="relative p-2 hover:text-gold transition-colors group flex items-center">
      <ShoppingBag className="w-5 h-5" />
      {mounted && totalItems > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 bg-gold text-bg-primary text-xs font-bold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
