//  the Redux logic for the counter feature
// This file exports a reducer fx for the counter logic.
import { createSlice } from '@reduxjs/toolkit'

// Creating a slice requires 
// a string name to identify the slice, 
// an initial state value, 
// and one or more reducer functions to define how the state can be updated. 
// Once a slice is created, 
// we can export the generated Redux action creators and the reducer function for the whole slice.

// Redux requires that we write all state updates immutably,
//  by making copies of data and updating the copies. 
// However, 
// Redux Toolkit's createSlice and createReducer APIs 
// use Immer inside to allow us to write "mutating" update 
// logic that becomes correct immutable updates.

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }, 
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer fx
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer