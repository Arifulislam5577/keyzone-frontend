import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface/interface";

type CartProduct = IProduct & { quantity: number };
type CartQuantity = { _id: string; type: "inc" | "dec" };

export interface CounterState {
  cart: CartProduct[];
}

const initialState: CounterState = {
  cart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const currentCart = state.cart;

      const productExists = currentCart.find(
        (product) => product._id === action.payload._id
      );

      if (productExists) {
        state.cart = currentCart.map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        state.cart = [...currentCart, { ...action.payload, quantity: 1 }];
      }
    },
    quantityManage: (state, action: PayloadAction<CartQuantity>) => {
      if (action.payload.type === "inc") {
        state.cart = state.cart.map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        state.cart = state.cart
          .map((product) =>
            product._id === action.payload._id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0);
      }
    },
    removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload._id
      );
    },

    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, quantityManage, resetCart } =
  productSlice.actions;

export default productSlice.reducer;
