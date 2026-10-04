import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, getCategoryByName } from '@/data/giftProducts';
import ProductCustomizer from '@/components/shopping/ProductCustomizer';

interface ProductPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.category, resolvedParams.slug);
  if (!product) return {};

  return {
    title: `${product.name} | Mithran Gifts`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.category, resolvedParams.slug);
  const category = getCategoryByName(resolvedParams.category);
  
  if (!product || !category) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-muted">
        <Link href="/shopping" className="hover:text-gold transition-colors">Gifts</Link>
        <span>/</span>
        <Link href={`/shopping/${category.slug}`} className="hover:text-gold transition-colors">
          {category.name}
        </Link>
        <span>/</span>
        <span className="text-warm-white truncate max-w-xs" title={product.name}>
          {product.name}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Customizer & Preview (Client Component) */}
        <div className="lg:sticky lg:top-24 h-fit">
          <ProductCustomizer product={product} />
        </div>

        {/* Right Column: Product Details */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-warm-white mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-gold">₹{product.basePrice}</p>
          </div>

          {product.description && (
            <div className="prose prose-invert max-w-none text-muted">
              <p>{product.description}</p>
            </div>
          )}

          <div className="bg-bg-secondary p-6 rounded-xl border border-dark-gray/50 space-y-4">
            <h3 className="font-semibold text-warm-white border-b border-dark-gray pb-2">Product Specifications</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex justify-between">
                <span>Category</span>
                <span className="text-warm-white">{product.category}</span>
              </li>
              {product.sizes && product.sizes.length > 0 && (
                <li className="flex justify-between">
                  <span>Available Sizes</span>
                  <span className="text-warm-white">{product.sizes.join(', ')}</span>
                </li>
              )}
              {product.colors && product.colors.length > 0 && (
                <li className="flex justify-between">
                  <span>Available Colors</span>
                  <span className="text-warm-white">{product.colors.join(', ')}</span>
                </li>
              )}
              {(String((product as unknown as { notes?: string }).notes || '').toLowerCase().includes('print') || String(product.description || '').toLowerCase().includes('print')) && (
                <li className="flex justify-between border-t border-dark-gray/40 pt-2 mt-2">
                  <span>Photo Print Cost</span>
                  <span className="text-warm-white font-medium">
                    {typeof ((product as unknown as { additionalCharges?: { photoPrint?: number } }).additionalCharges)?.photoPrint === 'number'
                      ? `₹${((product as unknown as { additionalCharges?: { photoPrint?: number } }).additionalCharges)?.photoPrint}`
                      : 'Confirmed on WhatsApp'}
                  </span>
                </li>
              )}
            </ul>
          </div>
          
          {/* Important Preview Rule Note */}
          <div className="bg-dark-gray/30 p-4 rounded-lg border border-dark-gray text-xs text-muted flex gap-3">
            <div className="text-gold mt-0.5">ℹ</div>
            <p>
              <strong>Preview Note:</strong> Preview is for visual reference. Final print may vary slightly depending on product shape, crop, and production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
