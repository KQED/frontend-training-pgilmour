import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSailors } from '../../slices/sailorsSlice'


export default function SailorForm () {

  const allSailorsData = useSelector(state => state.sailors.data)

  const dispatch = useDispatch()

  useEffect(() => {
    // console.log('Hello from useEffect with fetch')
    dispatch(fetchAllSailors())
  }, [])

  if(!allSailorsData) {
    return null
  }

  console.log('allSailorsData', allSailorsData)
  return (
    <div>
      <p>Yo! Future Home of the Sailor Form</p>
      {
        allSailorsData.map((element, index) => {
          return (
            <p key={index}>{element.name}</p>
          )
        })
      }
    </div>

  )
}