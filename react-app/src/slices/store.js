import { configureStore } from '@reduxjs/toolkit'
import hexCodeReducer from './hexPickerSlice'
import sailorsReducer from './sailorsSlice'

const rootReducer = {
  hexPicker: hexCodeReducer,
  sailors: sailorsReducer
}

const store = configureStore({
// export default configureStore({
  // reducer: {
  //   hexPicker: hexCodeReducer,
  //   sailors: sailorsReducer
  // },
  reducer: rootReducer,
  devTools: true
})

export { store, rootReducer }
