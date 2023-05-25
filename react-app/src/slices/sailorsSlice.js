import { createSlice } from '@reduxjs/toolkit'

export const sailorsSlice = createSlice({
  name: 'sailors',
  initialState: {
    data: JSON.parse(localStorage.getItem('sailors')) || null,
    isLoading: false,
    error: null
  },
  reducers: {
    receiveAllSailors: (state, action) => {
      const data = action.payload
      // console.log('data = action.payload in recieveAllSailors', typeof data) // object
      state.data = data
      state.isLoading = false
      state.error = null
      localStorage.setItem('sailors', JSON.stringify(data))
    },
    addSailor: (state, action) => {
      const sailor = action.payload
      state.data.allSailors.push(sailor)
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
  addSailor,
  setIsLoading,
  setError
} = sailorsSlice.actions

export const fetchAllSailors = () => {
  return (dispatch, getState) => {
    const { sailors } = getState()

    if (sailors.data) { // Checks if data is present, prevents state reset on route switch
      return
    }

    dispatch(setIsLoading())

    const url = 'http://localhost:3001/sailors'
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(url, requestOptions)
      .then((response) => {
        if(response.ok) {
          // console.log('response from first then in the fetch', response)
          return response.json()
        } else {
          throw new Error('response did not return "ok"')
        }
      })
      .then(
        (response) => {
        // console.log('response from second then in the fetch', response)
          dispatch(receiveAllSailors({ allSailors: response }))
        }
      )
      .catch(error => {
        dispatch(setError(error.message))
      })
  }
}

export default sailorsSlice.reducer