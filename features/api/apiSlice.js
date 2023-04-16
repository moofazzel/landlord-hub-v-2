import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "createApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),

  tagTypes: ["User", "Property", "Calculation"],

  endpoints: (builder) => ({
    // ALL GET REQUESTS ARE HERE

    // Get all users
    getUsers: builder.query({
      query: () => ({
        url: "/users",
      }),
    }),

    // Get all Properties
    getProperties: builder.query({
      query: () => ({
        url: "/property",
      }),
      providesTags: ["Property"],
    }),

    // Get a single property
    getProperty: builder.query({
      query: (id) => ({
        url: `/property/${id}`,
      }),
      providesTags: ["Property"],
    }),

    // Get calculations by property id
    getCalculations: builder.query({
      query: (id) => ({
        url: `/calculations/${id}`,
      }),
      providesTags: ["Calculation"],
    }),

    // ALL POST REQUESTS ARE HERE
    // Save a new user
    saveUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),

    // Save a new property
    createProperty: builder.mutation({
      query: (data) => ({
        url: "/property",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Property"],
    }),

    // ALL PATCH REQUESTS ARE HERE
    // Update a property
    updateProperty: builder.mutation({
      query: (data) => ({
        url: `/property/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Property"],
    }),

    // ALL DELETE REQUESTS ARE HERE

    // Delete a property
    deleteProperty: builder.mutation({
      query: (id) => ({
        url: `/property/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Property"],
    }),

    // Save a new calculation(Expense and payment) to a property
    createCalculation: builder.mutation({
      query: (data) => ({
        url: "/calculations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Calculation"],
    }),
  }),
});

export const {
  // Get requests
  useGetUsersQuery,
  useGetPropertiesQuery,
  useGetPropertyQuery,
  useGetCalculationsQuery,
  // Post requests
  useSaveUserMutation,
  useCreatePropertyMutation,
  useCreateCalculationMutation,
  // Patch requests

  // Delete requests
  useDeletePropertyMutation,
} = userApi;
