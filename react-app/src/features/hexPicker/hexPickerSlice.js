import { createSlice } from '@reduxjs/toolkit'

const randomValGenerator = Math.floor(Math.random * 256)

export const hexPickerSlice = createSlice({
  name: 'hexPicker',
  initialState: {
    valueRGB: ''
  },
  reducers: {
    randomize: (state) => {
      state.valueRGB = `rgb(${randomValGenerator}, ${randomValGenerator}, ${randomValGenerator})`
    }
  },
})

// Action creators are generated for each case reducer fx
export const { randomize } = hexPickerSlice.actions
export default hexPickerSlice.reducer