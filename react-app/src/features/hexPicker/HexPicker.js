// Create a subcomponent in your application
// a React component that shows the UI for your feature
import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { randomize } from './hexPickerSlice'
// import styles from './Counter.module.css'

export function HexPicker () {
  // const generatedValue = useSelector((state) => state.hexPicker.valueRGB)
  // const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label='Generate random RGB value'
          // onClick={() => dispatch(randomize())}
        >
          Click to Generate a Random RBG Value
        </button>
        {/* <span>{generatedValue}</span> */}
      </div>
    </div>
  )
}
