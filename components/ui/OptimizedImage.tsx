'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  placeholder?: boolean;
  placeholderLabel?: string;
}

/**
 * Image abstraction layer for MITHRAN PHOTO CLICKZ.
 * Wraps Next.js Image with placeholder support and future CDN compatibility.
 * When the `src` doesn't resolve, renders an elegant dark placeholder.
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = '100vw',
  priority = false,
  className = '',
  placeholder = true,
  placeholderLabel,
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If the image source doesn't exist or there was an error, show placeholder
  if (hasError || !src || src.includes('placeholder')) {
    return (
      <div
        className={`bg-dark-gray flex items-center justify-center ${className}`}
        style={!fill ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        <div className="text-center">
          <span className="font-manrope text-[11px] uppercase tracking-[0.2em] text-muted/40">
            {placeholderLabel || 'Photograph'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${fill ? '' : ''}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 800}
          height={height || 600}
          sizes={sizes}
          priority={priority}
          className={`object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
      {placeholder && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-dark-gray animate-pulse" />
      )}
    </div>
  );
}
