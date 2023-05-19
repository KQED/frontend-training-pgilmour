import { configureStore } from '@reduxjs/toolkit'
import hexcodeReducer from './hexPickerSlice'

export default configureStore({
  reducer: {
    hexPicker: hexcodeReducer
  }
})
