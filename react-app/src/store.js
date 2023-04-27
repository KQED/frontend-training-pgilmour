import { configureStore } from '@reduxjs/toolkit'
import hexcodeReducer from './slices/hexPickerSlice'
import scoutFormReducer from './slices/sailorSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
// import { sailorScoutApi } from './services/sailorScout'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // [sailorScoutApi.reducerPath]: sailorScoutApi.reducer,
    hexPicker: hexcodeReducer,
    scoutForm: scoutFormReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat([sailorScoutApi.middleware])
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)