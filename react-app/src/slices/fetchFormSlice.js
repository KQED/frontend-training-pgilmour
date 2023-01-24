import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

export const fetchFormSlice = createSlice({
  name: 'fetchForm',
  initialState,
  reducers: {
  //     randomize: (state) => {
  //       state.valueRGB = `rgb(${Math.floor(Math.random() * 256)},
  //         ${Math.floor(Math.random() * 256)},
  //         ${Math.floor(Math.random() * 256)})`
  //     }
  }
})

// Action creators are generated for each case reducer fx
// export const { randomize } = hexPickerSlice.actions
export default formFetchSlice.reducer