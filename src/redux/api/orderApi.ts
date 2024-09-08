import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IOrder } from "../../interface/interface";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://keyzone-backend.vercel.app/",
  }),

  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (orderData: IOrder) => ({
        url: "api/v1/order",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useAddOrderMutation } = orderApi;
