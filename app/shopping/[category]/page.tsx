import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryByName, getProductsByCategory } from '@/data/giftProducts';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = getCategoryByName(resolvedParams.category);
  if (!category) return {};

  return {
    title: `${category.name} | Mithran Gifts`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = getCategoryByName(resolvedParams.category);
  
  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(resolvedParams.category);

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted mb-6">
          <Link href="/shopping" className="hover:text-gold transition-colors">Gifts</Link>
          <span>/</span>
          <span className="text-warm-white">{category.name}</span>
        </div>
        
        <h1 className="text-4xl font-playfair font-bold text-warm-white">
          {category.name}
        </h1>
        <p className="text-muted">
          Showing {products.length} {products.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/shopping/${resolvedParams.category}/${product.slug}`}
            className="group flex flex-col bg-bg-secondary rounded-xl overflow-hidden border border-dark-gray/50 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image Box */}
            <div className="aspect-square bg-dark-gray w-full relative overflow-hidden group-hover:opacity-90 transition-opacity flex items-center justify-center">
              {product.images && product.images.length > 0 ? (
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <span className="text-muted/50 font-playfair text-xl italic">{category.name}</span>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-1 relative z-10 bg-bg-secondary">
              <h3 className="font-semibold text-lg text-warm-white mb-2 line-clamp-2">
                {product.name}
              </h3>
              <div className="mt-auto flex items-end justify-between pt-4">
                <div>
                  <p className="text-xs text-muted mb-1 uppercase tracking-wider">Starting from</p>
                  <p className="text-xl font-bold text-gold">₹{product.basePrice}</p>
                </div>
                <div className="bg-bg-primary text-warm-white text-xs px-4 py-2 rounded-full border border-dark-gray group-hover:border-gold transition-colors">
                  Customize
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
