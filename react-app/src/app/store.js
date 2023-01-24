import { configureStore } from '@reduxjs/toolkit'
import hexcodeReducer from '../slices/hexPickerSlice'
import fetchFormReducer from '../features/fetchForm/FetchForm'

export default configureStore({
  reducer: {
    hexPicker: hexcodeReducer,
    fetchForm: fetchFormReducer
  }
})
