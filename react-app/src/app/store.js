import { configureStore } from '@reduxjs/toolkit'
import hexcodeReducer from '../slices/hexPickerSlice'

export default configureStore({
  reducer: {
    hexPicker: hexcodeReducer
  }
})
