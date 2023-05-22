import { createSlice } from '@reduxjs/toolkit'

// the objective is: to set global state

export const sailorsSlice = createSlice({
  name: 'sailors',
  initialState: {},
  reducers: {
    receiveAllSailors: (state, action) => {
      const data = action.payload
      state['allSailors'] = {
        data: data,
        isLoading: false,
        error: null
      }
      console.log(data)
    },
    setIsLoading: (state) => {
      state['allSailors'] = {
        data: null,
        isLoading: true,
        error: null
      }
    },
  }
})

export const { receiveAllSailors, setIsLoading } = sailorsSlice.actions

export const fetchAllSailors = (dispatch) => {

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
    // the response from the server is passed as an arg,
    // the arrow fx calls .json() on the response
    // .json() is an async method that returns another Promise
    // it reads the response and parses it as json
    // 
    .then(
      (response) => {
        if(response.ok) {
          return response.json()
        }
      },
      (error) => {
        console.log('Fetch error:', error) // change to console.warn
        // Add dispatch Error
      }
    )
    .then(
      (response) => {
        console.log(response)
        dispatch(receiveAllSailors({
          allSailors: response,
        }))
      }
    )
}

export default sailorsSlice.reducer