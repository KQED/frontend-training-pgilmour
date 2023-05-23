import { createSlice } from '@reduxjs/toolkit'

// the objective is: to set global state

export const sailorsSlice = createSlice({
  name: 'sailors',
  initialState: {},
  reducers: {
    receiveAllSailors: (state, action) => {
      const data = action.payload
      state.data = data
      state.isLoading = false
      state.error = null
    },
    setIsLoading: (state) => {
      state.data = null
      state.isLoading = true
      state.error = null
    },
    setError: (state, action) => {
      const error = action.payload
      state.data = null
      state.isLoading = false
      state.error = error
    },
  }
})

export const {
  receiveAllSailors,
  setIsLoading,
  setError
} = sailorsSlice.actions

export const fetchAllSailors = () => {
  return (dispatch) => { // pass diapatch function as an arg
    dispatch(setIsLoading())

    const url = 'http://localhost:3001/sailors'
    const requestOptions = {
      // method specifies HTTP method to be used, usually required
      method: 'GET',
      // headers provide more info about the request
      // can do a deep dive on headers, especially with POST
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(url, requestOptions)
      .then(
        (response) => {
          if(response.ok) {
            // console.log('response from first then in the fetch', response)
            return response.json()
          }
        },
        (error) => {
          console.warn('Fetch error:', error)
          // dispatch(setError(error))
        }
      )
      .then(
        (response) => {
          console.log('response from second then in the fetch', response)
          dispatch(receiveAllSailors({ allSailors: response }))
        }
      )
  }
}

export default sailorsSlice.reducer