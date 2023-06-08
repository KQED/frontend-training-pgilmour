import { createSlice } from '@reduxjs/toolkit'

export const sailorsSlice = createSlice({
  name: 'sailors',
  initialState: {
    data: null,
    isLoading: false,
    error: null
  },
  reducers: {
    receiveAllSailors: (state, action) => {
      const data = action.payload
      state.data = data
      state.isLoading = false
      state.error = null
    },
    addSailor: (state, action) => {
      const sailor = action.payload
      const existingIds = state.data.allSailors.map(sailor => sailor.id) // create an array of exisiting ids
      let sailorId = generateUUID(existingIds)
      sailor.id = sailorId
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

// A function that generates a unique user id and checks if it exists in the array of existing ids
const generateUUID = (existingIds) => {
  let id = Math.floor(Math.random() * 100)
  while (existingIds.includes(id)) {
    id = Math.floor(Math.random() * 100)
  }
  return id
}

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
          return response.json()
        } else {
          throw new Error('response did not return "ok"')
        }
      })
      .then(
        (response) => {
          dispatch(receiveAllSailors({ allSailors: response }))
        }
      )
      .catch(error => {
        dispatch(setError(error.message))
      })
  }
}

export default sailorsSlice.reducer