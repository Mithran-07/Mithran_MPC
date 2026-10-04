import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GiftProduct } from '@/data/giftProducts';
import { v4 as uuidv4 } from 'uuid';

export interface CartItem {
  id: string; // Unique cart item ID (since we can have same product customized differently)
  product: GiftProduct;
  quantity: number;
  uploadedPhotos: string[]; // Blob URLs or server URLs
}

interface CartStore {
  items: CartItem[];
  addItem: (product: GiftProduct, uploadedPhotos: string[]) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, uploadedPhotos) => {
        set((state) => {
          // Add as a new item because each customization is unique
          const newItem: CartItem = {
            id: uuidv4(),
            product,
            quantity: 1,
            uploadedPhotos,
          };
          return { items: [...state.items, newItem] };
        });
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getSubtotal: () => {
        const { items } = get();
        return items.reduce((total, item) => total + (item.product.basePrice || item.product.price || 0) * item.quantity, 0);
      },
    }),
    {
      name: 'mithran-gifts-cart', // local storage key
    }
  )
);
