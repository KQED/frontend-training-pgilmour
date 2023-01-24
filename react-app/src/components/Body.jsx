import React from 'react'
import { HexPicker } from '../features/hexPicker/HexPicker'
import { FetchForm } from '../features/fetchForm/FetchForm'

export function Body () {
  return (
    <div>
      <HexPicker />
      <FetchForm />
    </div>
  )
}

export default Body