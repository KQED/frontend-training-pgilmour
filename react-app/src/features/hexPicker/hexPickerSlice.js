import { createSlice } from '@reduxjs/toolkit'

// In a future ticket, we will have the api create the hex code and deliver it to the frontend

export const hexPickerSlice = createSlice({
  name: 'hexPicker',
  initialState: {
    valueRGB: `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`
  },
  reducers: { // We need 2 values one for the background one for the font
    // and the ratio between them is 7:1
    // https://www.had2know.org/technology/color-contrast-calculator-web-design.html
    randomize: (state) => {
      state.valueRGB = `rgb(${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)})`
    }
  }
})

// Action creators are generated for each case reducer fx
export const { randomize } = hexPickerSlice.actions
export default hexPickerSlice.reducer