import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  // fetch doesnt work in this instance
  // need to look at createAsyncThunk to put this fetch call into a fx or something like that
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  console.log('response', response)
  return response.data
})

const initialState = {
  loading: false,
  posts: [],
  error: ''
}

export const postSlice = createSlice(({
  name: 'posts',
  initialState,
  reducers: {
    pending: (state) => {
      state.loading = true
    },
    fulfilled: (state, action) => {
      state.loading = false
      state.posts = action.payload
      state.error = ''
    },
    rejected: (state, action) => {
      state.loading = false
      state.posts = []
      state.error = action.error.message
    }
  }
}))

export const { pending, fulfilled, rejected } = postSlice.actions
export default postSlice.reducer