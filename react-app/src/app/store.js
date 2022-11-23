import { configureStore } from '@reduxjs/toolkit'
import hexcodeReducer from '../features/hexPicker/hexPickerSlice'
import postsReducer from '../features/posts/postsSlice'

export default configureStore({
  reducer: {
    hexPicker: hexcodeReducer,
    posts: postsReducer
  }
})
