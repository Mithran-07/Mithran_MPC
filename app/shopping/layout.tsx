import React from 'react';
import Link from 'next/link';
import CartIcon from '@/components/shopping/CartIcon';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  const isShoppingEnabled = process.env.NEXT_PUBLIC_ENABLE_SHOPPING === 'true';
  return {
    robots: {
      index: isShoppingEnabled,
      follow: isShoppingEnabled,
    },
  };
}

export default function ShoppingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-primary text-warm-white flex flex-col pt-24">
      {/* Page Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        {children}
      </div>
    </div>
  );
}
