import { createSlice } from '@reduxjs/toolkit'

export const hexPickerSlice = createSlice({
  name: 'hexPicker',
  initialState: {
    valueR: 0,
    valueB: 0,
    valueG: 0
  },
  reducers: {
    randomize: (state) => {
      state.valueR = Math.floor(Math.random() * 256)
      state.valueB = Math.floor(Math.random() * 256)
      state.valueG = Math.floor(Math.random() * 256)
    }
  },
})

// Action creators are generated for each case reducer fx
export const { randomize } = hexPickerSlice.actions
export default hexPickerSlice.reducer