import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import data from "../../public/desc.json";

export type Item = {
  id:string
  name:string
  description?:string
  price:number;
  images:string,
};

type CartStore = {
  cart: Item[];
  discountCode: string | null;
  discountedTotal: number | null;
  totalValue: number;
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
  applyDiscount: (code: string) => Promise<void>;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      discountCode: null,
      discountedTotal: null,

      totalValue: 0,

      addToCart: (item) =>
        set((state) => {
          const itemExists = state.cart.some(
            (cartItem) => cartItem.id === item.id
          );

          if (!itemExists) {
            toast.success("Documento adicionado ao carrinho!", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            const updatedCart = [...state.cart, item];
            return {
              cart: updatedCart,
              totalValue: updatedCart.reduce(
                (acc, item) => acc + item.price,
                0
              ),
            };
          }
          toast.warn("Este já foi adicionado ao carrinho!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return state;
        }),

      removeFromCart: (id) =>
        set((state) => {
          const updatedCart = state.cart.filter((item) => item.id !== id);
          return {
            cart: updatedCart,
            totalValue: updatedCart.reduce((acc, item) => acc + item.price, 0),
          };
        }),

      applyDiscount: async (code) => {
        const { discountCode, totalValue } = get();

        if (discountCode) {
          toast.warn("Cupom já aplicado!", {
            position: "top-left",
            autoClose: 5000,
            theme: "light",
          });
          return;
        }
        const find = data.filter(
          (desc: { code: string; discountPercentage: number }) =>
            desc.code === code
        );
         console.log(code)
        if (find.length > 0) {
          const discount = (totalValue * find[0]?.discountPercentage) / 100;
          const newTotal = totalValue - discount;
          set({ discountCode: code, discountedTotal: newTotal });
          toast.success("Desconto aplicado com sucesso!", {
            position: "top-left",
            autoClose: 5000,
            theme: "light",
          });
        } else {
          toast.error("Cupom inválido!", {
            position: "top-left",
            autoClose: 5000,
            theme: "light",
          });
        }
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
