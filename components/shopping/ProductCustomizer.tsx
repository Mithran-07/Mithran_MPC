'use client';

import React, { useState, useRef } from 'react';
import { Upload, X, Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { GiftProduct } from '@/data/giftProducts';
import { useCartStore } from '@/store/cartStore';

interface ProductCustomizerProps {
  product: GiftProduct;
}

export default function ProductCustomizer({ product }: ProductCustomizerProps) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const addItem = useCartStore(state => state.addItem);
  
  // Determine how many photos the product needs based on its customization config
  const maxPhotos = product.customization?.maxPhotos || 1;
  const isCaricature = product.category.toLowerCase().includes('caricature');

  const [isUploading, setIsUploading] = useState(false);

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const newPhotos: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append('file', files[i]);

      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();
        if (data.originalUrl) {
          newPhotos.push(data.originalUrl); // Store the actual URL
        }
      } catch (err) {
        console.error('Upload failed', err);
      }
    }
    
    setPhotos(prev => {
      const combined = [...prev, ...newPhotos];
      return combined.slice(0, maxPhotos);
    });
    setIsUploading(false);
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const hasAllPhotos = photos.length >= maxPhotos;

  return (
    <div className="space-y-6">
      {/* Visual Preview Area */}
      <div className="relative aspect-square w-full bg-dark-gray rounded-2xl overflow-hidden border border-dark-gray/50 flex flex-col items-center justify-center group">
        {/* Placeholder background representing the product */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        
        <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider text-muted z-10">
          Live Preview
        </span>

        {photos.length > 0 ? (
          <div className="relative w-3/4 h-3/4 flex items-center justify-center">
            {/* Simple rectangular clip representation for now. Real implementation would use product.printArea / mask */}
            <div className="relative w-full h-full border-2 border-dashed border-gold/50 rounded-lg overflow-hidden shadow-2xl bg-black">
               <img 
                 src={photos[0]} 
                 alt="Preview" 
                 className="w-full h-full object-cover"
               />
               {/* If it's a caricature, show a text overlay */}
               {isCaricature && (
                 <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 text-center">
                   <p className="text-gold font-playfair font-semibold">Face extracted for Caricature Design</p>
                 </div>
               )}
            </div>
          </div>
        ) : (
          <div className="text-center p-6 z-10">
            <Camera className="w-12 h-12 mx-auto text-muted mb-4 opacity-50" />
            <p className="text-muted font-medium">Your personalized product</p>
            <p className="text-xs text-muted/70 mt-2">Upload {maxPhotos > 1 ? `${maxPhotos} photos` : 'a photo'} to see preview</p>
          </div>
        )}
      </div>

      {/* Upload Controls */}
      <div className="bg-bg-secondary border border-dark-gray/50 rounded-xl p-6 space-y-6 shadow-lg">
        <div>
          <h3 className="text-lg font-semibold text-warm-white mb-1">Personalize this product</h3>
          <p className="text-sm text-muted">
            {isCaricature 
              ? "Upload a clear front-facing photo for the caricature." 
              : `Upload ${maxPhotos} high-quality ${maxPhotos === 1 ? 'photo' : 'photos'}.`}
          </p>
        </div>

        {/* Upload Slots */}
        <div className="space-y-4">
          {Array.from({ length: maxPhotos }).map((_, index) => {
            const hasPhoto = !!photos[index];
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-dark-gray flex items-center justify-center text-xs font-bold text-muted border border-dark-gray/50">
                  {index + 1}
                </div>
                
                {hasPhoto ? (
                  <div className="flex-1 flex items-center justify-between bg-dark-gray/30 border border-gold/30 rounded-lg p-2 pr-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded overflow-hidden bg-black">
                        <img src={photos[index]} alt="Uploaded thumbnail" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm text-warm-white">Photo ready</span>
                    </div>
                    <button 
                      onClick={() => removePhoto(index)}
                      className="text-muted hover:text-red-400 p-1 transition-colors"
                      title="Remove photo"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                    className="flex-1 flex items-center justify-center gap-2 border border-dashed border-dark-gray hover:border-gold/50 bg-dark-gray/10 hover:bg-dark-gray/30 transition-all rounded-lg py-3 text-sm text-gold disabled:opacity-50"
                  >
                    <Upload className="w-4 h-4" />
                    {isUploading ? 'Uploading...' : 'Upload Photo'}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept=".jpg,.jpeg,.png,.webp"
          multiple={maxPhotos > 1}
          onChange={handlePhotoUpload}
        />

        {isCaricature && (
           <p className="text-xs text-gold/80 italic text-center">
             Final caricature artwork will be prepared by our design team.
           </p>
        )}

        <button 
          onClick={() => {
            setIsAdding(true);
            addItem(product, photos);
            setIsAdding(false);
            router.push('/shopping/cart');
          }}
          className={`w-full py-4 rounded-full font-semibold transition-all shadow-lg ${
            hasAllPhotos 
              ? 'bg-gold text-bg-primary hover:bg-gold-highlight hover:scale-[1.02]' 
              : 'bg-dark-gray text-muted cursor-not-allowed'
          }`}
          disabled={!hasAllPhotos || isAdding}
        >
          {isAdding ? 'Adding...' : (hasAllPhotos ? 'Add to Cart' : 'Upload Photos to Continue')}
        </button>
      </div>
    </div>
  );
}
