import { createSlice } from '@reduxjs/toolkit'

export const hexPickerSlice = createSlice({
  name: 'hexPicker',
  initialState: {
    valueRGB: `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`
  },
  reducers: {
    randomize: (state) => {
      state.valueRGB = `rgb(${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)})`
    }
  },
})

// Action creators are generated for each case reducer fx
export const { randomize } = hexPickerSlice.actions
export default hexPickerSlice.reducer