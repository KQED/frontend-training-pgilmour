import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllSailors } from '../../slices/sailorsSlice'


export default function SailorForm () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllSailors)
  }, [])

  return (
    <p>Yo! Future Home of the Sailor Form</p>
  )
}