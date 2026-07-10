import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products } from "./products";

export type CartItem = {
  slug: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (slug, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((item) => item.slug === slug);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.slug === slug
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return { items: [...state.items, { slug, quantity }] };
        }),
      removeItem: (slug) =>
        set((state) => ({
          items: state.items.filter((item) => item.slug !== slug),
        })),
      setQuantity: (slug, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((item) => item.slug !== slug)
              : state.items.map((item) =>
                  item.slug === slug ? { ...item, quantity } : item
                ),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: "pulso-cart" }
  )
);

export function cartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => {
    const product = products.find((p) => p.slug === item.slug);
    if (!product) return total;
    return total + product.price * item.quantity;
  }, 0);
}

export function cartCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}
