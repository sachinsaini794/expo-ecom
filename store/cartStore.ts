import { create } from 'zustand'
import { Product } from "@/types/Product";


interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addProduct: (product: Product) => void;
}

export const useCart = create<CartStore>((set) => ({
    items: [], // Correctly return the initial state
    addProduct: (product: Product) => set((state) => {
        const existingItem = state.items.find(item => item.product.id === product.id);
        if (existingItem) {
            // If the product already exists, increase the quantity
            return { items: state.items.map(item => 
                item.product.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            ) };
        } else {
            // If the product does not exist, add it to the cart
            return { items: [...state.items, { product, quantity: 1 }] };
        }
    }),

    resetCart : () => set({ items: []})
}))