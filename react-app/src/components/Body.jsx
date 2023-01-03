import React from 'react'
import { HexPicker } from '../features/hexPicker/HexPicker'
import Form from '../features/Form/Form'

export function Body () {
  return (
    <div>
      <HexPicker />
      <Form />
    </div>
  )
}

export default Body