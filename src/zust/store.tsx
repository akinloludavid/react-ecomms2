import create from "zustand";
import { persist } from "zustand/middleware";
import { IGetAllProducts, IProductInCart } from "../types";

export const useStore = create((set: Function) => ({
  category: "",
  searchTerm: "",
  setSearchTerm: (query: string) =>
    set((state: any) => ({ ...state, searchTerm: query })),
  selectCategory: (cat: string) =>
    set((state: any) => ({ ...state, category: cat })),
}));

export const categorySelector = (state: any) => state.selectCategory;
export const searchTermSelector = (state: any) => state.setSearchTerm;

export const useCartStore = create(
  persist(
    (set: Function, get: Function) => ({
      cart: [],
      totalAmt: get(),
      // .cart.map((pr: any) => pr.totalPrice)
      // .reduce((acc: any, curr: any) => acc + curr, 0),
      getTotalAmount: () => {
        set({
          totalAmt: get()
            .cart.map((pr: any) => pr.totalPrice)
            .reduce((acc: any, curr: any) => acc + curr, 0),
        });
      },
      addToCart: (product: IGetAllProducts) =>
        set({
          cart: [
            ...get().cart,
            { ...product, quantity: 1, totalPrice: product.price },
          ],
        }),
      removeFromCart: (product: IProductInCart) =>
        set({
          cart: get().cart.filter(
            (item: IGetAllProducts) => item.id !== product.id
          ),
        }),

      increaseProductQty: (product: IProductInCart) => {
        const updatedProducts = get().cart.map((item: any) => {
          if (item.id === product.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
              totalPrice: Number(product.price) * (product.quantity + 1),
            };
          } else {
            return item;
          }
        });
        set({
          cart: updatedProducts,
        });
      },
      reduceProductQuantity: (product: IProductInCart) => {
        const updatedProducts = get().cart.map((item: any) => {
          if (item.id === product.id) {
            return {
              ...product,
              quantity: Math.max(1, product.quantity - 1),
              totalPrice: Number(product.price) * (product.quantity - 1),
            };
          } else {
            return item;
          }
        });
        set({
          cart: updatedProducts,
        });
      },
      emptyCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-items", // unique name
    }
  )
);

export const useUserStore = create(
  persist(
    (set: Function) => ({
      user: undefined,

      saveUserDetails: (userInfo: any) =>
        set({
          user: userInfo,
        }),
      saveUserSignupDetails: (userInfo: any) =>
        set({
          user: userInfo,
        }),

      removeUserDetails: () => {
        set({
          user: null,
        });
      },
    }),

    {
      name: "user-info", // unique name
    }
  )
);
