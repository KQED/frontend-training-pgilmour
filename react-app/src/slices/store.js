import { configureStore } from '@reduxjs/toolkit'
import hexCodeReducer from './hexPickerSlice'
import sailorsReducer from './sailorsSlice'

export default configureStore({
  reducer: {
    hexPicker: hexCodeReducer,
    sailors: sailorsReducer
  }
})
