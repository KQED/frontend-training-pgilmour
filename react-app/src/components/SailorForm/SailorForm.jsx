import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSailors } from '../../slices/sailorsSlice'


export default function SailorForm () {

  const allSailorsData = useSelector(state => state.sailors.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllSailors())
  }, [])

  if(!allSailorsData) {
    return null
  }

  return (
    <div>
      <p>Yo! Future Home of the Sailor Form</p>
      <ul>
        {
          allSailorsData.allSailors.map((element, index) => {
            return <li key={index}>{element.name}</li>
          })
        }
      </ul>
    </div>

  )
}