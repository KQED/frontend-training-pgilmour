// In this example,
// the scoutFormSlice defines the initial state of the form
// with an inputValue and an empty data array.
// It also includes four action creators
// for updating the inputValue,
// starting the fetch,
// success and failure of the fetch.
// Finally, the fetchData action creator is an asynchronous thunk
// that dispatches fetchDataStart,
// fetches the data from the API using the inputValue from the state,
// and dispatches fetchDataSuccess or fetchDataFailure
// depending on the outcome of the fetch.

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputValue: '',
  data: [],
  loading: false,
  error: null
}

const scoutFormSlice = createSlice({
  name: 'scoutForm',
  initialState,
  reducers: {
    updateInputValue: (state, action) => {
      state.inputValue = action.payload
    },
    fetchDataStart: (state) => {
      state.loading = true
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    fetchDataFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { updateInputValue, fetchDataStart, fetchDataSuccess, fetchDataFailure } = scoutFormSlice.actions

export default scoutFormSlice.reducer

export const fetchData = () => async (dispatch, getState) => {
  dispatch(fetchDataStart())

  try {
    const inputValue = getState().scoutForm.inputValue
    const response = await fetch(`http://localhost:3001/users?q=${inputValue}`)
    const data = await response.json()

    dispatch(fetchDataSuccess(data))
  } catch (error) {
    dispatch(fetchDataFailure(error))
  }

}
