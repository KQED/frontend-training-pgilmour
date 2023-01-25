import { configureStore } from '@reduxjs/toolkit'
import hexcodeReducer from '../slices/hexPickerSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokemon'
// import { sailorScoutApi } from '../services/sailorScout'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    // [sailorScoutApi.reducerPath]: sailorScoutApi.reducer,
    hexPicker: hexcodeReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware)
    // getDefaultMiddleware().concat(sailorScoutApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)


// The following is a different way of doing all of the code above:

// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import type { PreloadedState } from '@reduxjs/toolkit'
// import { pokemonApi } from './services/pokemon'

// const rootReducer = combineReducers({
//   [pokemonApi.reducerPath]: pokemonApi.reducer,
// })

// export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
//   return configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//       // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
//       getDefaultMiddleware().concat(pokemonApi.middleware),
//     preloadedState,
//   })
// }

// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']