// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// This is a different example of the code block above:
// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   tagTypes: [],
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query({
//       query: (name: string) => `pokemon/${name}`,
//     }),
//   }),
// })


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi

// Typically, you should only have one API slice per base URL that your application needs to communicate with.
// For example, if your site fetches data from both /api/posts and /api/users,
// you would have a single API slice with /api/ as the base URL, and separate endpoint definitions for posts and users.
// This allows you to effectively take advantage of automated re-fetching by defining tag relationships across
// endpoints.

// For maintainability purposes, you may wish to split up endpoint definitions across multiple files,
// while still maintaining a single API slice which includes all of these endpoints.
// See code splitting for how you can use the injectEndpoints property to inject API endpoints from
// other files into a single API slice definition.