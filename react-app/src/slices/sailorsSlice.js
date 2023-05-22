import { createSlice } from '@reduxjs/toolkit'

export const sailorsSlice = createSlice({
  name: 'sailors',
  initialState: {},
  reducers: {
    receiveAllSailors: (state, action) => {
      const data = action.payload
      state['allSailors'] =  {
        data: data,
        isLoading: false,
        error: null
      }
    },
    // setIsLoading: (state, action) => {
    //   state['allSailors'] =  {
    //     data: null,
    //     isLoading: true,
    //     error: null
    //   }
    // },
    // setError: (state, action) => {

    // }
  }
})

export const { receiveSailors } = sailorsSlice.actions

export const fetchAllSailors = () => {

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
    .then(response => response.json() )
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log('Fetch error:', error)
    })

}

export default sailorsSlice.reducer