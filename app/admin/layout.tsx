import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Admin Portal | Mithran Gifts',
  robots: {
    index: false,
    follow: false,
  }
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-primary text-warm-white flex flex-col pt-24 font-manrope">
      {/* Admin Header */}
      <header className="border-b border-dark-gray bg-bg-secondary sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-gold font-bold font-playfair tracking-widest text-sm bg-gold/10 px-3 py-1 rounded">STAFF PORTAL</span>
            <span className="text-muted text-sm hidden sm:inline">Order Production Management</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/admin/orders" className="text-warm-white hover:text-gold transition-colors font-medium">
              Orders
            </Link>
            <Link href="/" className="text-muted hover:text-warm-white transition-colors">
              Exit to Site
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Page Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        {children}
      </div>
    </div>
  );
}
