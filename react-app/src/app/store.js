import { configureStore } from '@reduxjs/toolkit' // creates the Redux store instance

// The Redux store is created using the configureStore fx from ReduxToolkit
//configureStore requires that we pass in a `reducer` argument

// Our app may be built of several features,
// each of those features might have its own reducer fx.
// When we call configureStore,
// we can pass in all of the different reducers in an object
// The key names in the object will define the keys in our final state value.

// We have a file in the features dir that exports a reducer fx
// We can import that counterReducer here and include it when we create the store.

import counterReducer from '../features/counter/counterSlice'

// wHen we pass in an object like `{counter: counterReducer}`
// that says that we want to have a `state.counter` section in our Rewdux state object
// and that we want the counterReducer fx 
// to be in charge of deciding if and how the update
// the state.counter section whenever an action is dispatched

//configureStore automatically adds several middleware to the store setup by default

// Next, we need to import the reducer function 
// from the counter slice and add it to our store. 
// By defining a field inside the reducers parameter, 
// we tell the store to use this slice reducer 
// function to handle all updates to that state.

import hexcodeReducer from '../features/hexPicker/hexPickerSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    hexPicker: hexcodeReducer
  },
})
