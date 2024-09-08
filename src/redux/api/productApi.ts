import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPlayLoadProduct } from "../../interface/interface";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://keyzone-backend.vercel.app/",
  }),

  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (productData: {
        page?: number;
        sort?: string;
        value?: number[];
        keyword?: string;
        isFeatured?: boolean;
      }) => {
        const {
          page = 1,
          keyword = "",
          value = [0, 100000],
          isFeatured = false,
          sort = "",
        } = productData;

        const queryParams = new URLSearchParams({
          "price[gte]": value[0].toString(),
          "price[lte]": value[1].toString(),
          searchTerm: keyword,
          page: page.toString(),
          sort: sort === "dsc" ? "price" : sort === "asc" ? "-price" : "",
        });

        if (isFeatured) {
          queryParams.append("limit", "6");
        } else {
          queryParams.append("limit", "9");
        }

        return {
          url: `/api/v1/products?${queryParams.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
      transformErrorResponse: (error) => {
        if (error.status === "FETCH_ERROR") {
          return { message: "Internal Server Error" };
        }
        return error.data;
      },
    }),
    getProduct: builder.query({
      query: (id: string | undefined) => ({
        url: `/api/v1/products/${id}`,
        method: "GET",
      }),
      transformErrorResponse: (error) => {
        return error.data;
      },
    }),
    addProduct: builder.mutation({
      query: (product: IPlayLoadProduct) => ({
        url: "/api/v1/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (productId: string) => ({
        url: `/api/v1/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (product: IPlayLoadProduct) => ({
        url: `/api/v1/products/${product._id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
