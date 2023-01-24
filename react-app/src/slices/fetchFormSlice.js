import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

export const fetchFormSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  }
})

// Action creators are generated for each case reducer fx
// export const { randomize } = hexPickerSlice.actions
export default formFetchSlice.reducer