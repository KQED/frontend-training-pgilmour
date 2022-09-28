import { configureStore } from '@reduxjs/toolkit'
import hexcodeReducer from '../features/hexPicker/hexPickerSlice'

export default configureStore({
  reducer: {
    hexPicker: hexcodeReducer
  }
})
