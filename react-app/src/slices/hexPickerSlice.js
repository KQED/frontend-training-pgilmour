import { createSlice } from '@reduxjs/toolkit'

// In a future ticket, we will have the api create the hex code and deliver it to the frontend

export const hexPickerSlice = createSlice({
  name: 'hexPicker',
  initialState: {
    valueRGB: `rgb(${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    )`,
    oppositeValueRGB: ''
  },
  reducers: {
    randomize: (state) => {
      state.valueRGB = `rgb(${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
      )`
    },
    // create a reducer that generates a value
    // depending on the state.valueRGB from the randomize reducer, seen above 
    oppositeColor: (state) => {
      // Take the state.valueRGB, split the values at the commas
      // and put them into an array using map
      const oppositeColor = state.valueRGB.split(',').map((item) => {
        // process the strings
        // the match method uses regex to retrive a matching result
        // here, `\d+` is a regex expression symbolizing one or more consecutive digits
        // the back slashes are delimiters symbolizing the beginning and end of a pattern
        const value = parseInt(item.match(/\d+/)[0])
        const oppositeValue = 255 - value
        return oppositeValue.toString()
      })

      // console.log('From oppositeColor reducer:', oppositeColor)
      state.oppositeValueRGB = `rgb(${oppositeColor.join(',')})` // joins the values in the map array
    }
  }
})

export const { randomize, oppositeColor } = hexPickerSlice.actions
export default hexPickerSlice.reducer