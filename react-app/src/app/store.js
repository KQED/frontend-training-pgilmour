import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import hexcodeReducer from '../features/hexPicker/hexPickerSlice'
import postsReducer from '../features/posts/postsSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokemon'
// import { sailorScoutApi } from '../services/sailorScout'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    // [sailorScoutApi.reducerPath]: sailorScoutApi.reducer,
    // counter: counterReducer,
    hexPicker: hexcodeReducer,
    posts: postsReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware)
  //   getDefaultMiddleware().concat(sailorScoutApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)