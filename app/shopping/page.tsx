import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '@/data/giftProducts';

export const metadata = {
  title: 'Customized Gifts | Mithran Photo Clickz',
  description: 'Shop premium customized gifts, frames, mugs, keychains, crystals, clocks and more.',
};

export default function ShoppingCategoriesPage() {
  const categories = getCategories();

  // Primary featured category priority order: Keychains, Frames, Crystals, Mugs, Clocks
  const featuredOrder = ['keychains', 'frames', 'photo-frames', 'mdf-frames', 'crystals', '3d-crystals', 'mug-prints', 'clocks', 'wall-clocks'];
  
  const featuredCategories = categories
    .filter(c => c.isFeatured)
    .sort((a, b) => {
      const idxA = featuredOrder.findIndex(f => a.slug.includes(f));
      const idxB = featuredOrder.findIndex(f => b.slug.includes(f));
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.name.localeCompare(b.name);
    });

  const otherCategories = categories.filter(c => !featuredCategories.includes(c));

  const renderCategoryGrid = (items: typeof categories) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((category) => (
        <Link
          key={category.slug}
          href={`/shopping/${category.slug}`}
          className="group block"
        >
          <div className="bg-bg-secondary border border-dark-gray/50 rounded-xl overflow-hidden h-full transition-all duration-300 hover:border-gold/50 hover:-translate-y-1 flex flex-col">
            
            <div className="relative aspect-[16/10] w-full bg-dark-gray overflow-hidden">
              {category.cleanImage ? (
                <Image 
                  src={category.cleanImage} 
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* Neutral gold-on-black category tile for categories without clean cropped imagery */
                <div className="absolute inset-0 bg-bg-primary flex flex-col items-center justify-center p-6 text-center border border-gold/10">
                  <span className="font-playfair text-xl md:text-2xl font-semibold text-gold tracking-wide">
                    {category.name}
                  </span>
                  <span className="font-manrope text-[10px] uppercase tracking-[0.2em] text-muted/50 mt-2">
                    Customized Collection
                  </span>
                </div>
              )}
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between bg-bg-secondary relative z-10">
              <div>
                <h3 className="text-lg font-playfair font-semibold text-warm-white group-hover:text-gold transition-colors mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-muted">
                  {category.count} {category.count === 1 ? 'Product' : 'Products'}
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium uppercase tracking-wider text-gold/80 group-hover:text-gold transition-colors">
                Explore Collection <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-warm-white">
          Customized <span className="text-gold italic">Gifts</span>
        </h1>
        <p className="text-muted text-base md:text-lg">
          Personalize your memories with our collection of customized gifts, meticulously crafted for your special moments.
        </p>
      </div>

      {/* Featured Categories Row */}
      {featuredCategories.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-dark-gray pb-3">
            <h2 className="text-2xl font-playfair font-bold text-warm-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold inline-block"></span>
              Featured Categories
            </h2>
            <span className="text-xs text-muted font-manrope uppercase tracking-wider">
              {featuredCategories.length} Popular Categories
            </span>
          </div>
          {renderCategoryGrid(featuredCategories)}
        </div>
      )}

      {/* All Categories Row */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-dark-gray pb-3">
          <h2 className="text-2xl font-playfair font-bold text-warm-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold/50 inline-block"></span>
            All Gift Categories
          </h2>
          <span className="text-xs text-muted font-manrope uppercase tracking-wider">
            {otherCategories.length} Categories
          </span>
        </div>
        {renderCategoryGrid(otherCategories)}
      </div>
    </div>
  );
}
