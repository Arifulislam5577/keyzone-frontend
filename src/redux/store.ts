import { configureStore } from "@reduxjs/toolkit";
import { orderApi } from "./api/orderApi";
import { productApi } from "./api/productApi";
import ProductReducer from "./features/products/productSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    product: ProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware, orderApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
