import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { randomize } from './hexPickerSlice'
import styles from './HexPicker.scss'

export function HexPicker () {
  const generatedValue = useSelector((state) => state.hexPicker.valueRGB)
  const dispatch = useDispatch()
  const applyColor = () => {
    document.body.style.background = generatedValue
  }
  applyColor()
  return (
    <div className={styles}>
      <h2>Random RGB Generator</h2>
      <section>
        <p>{generatedValue}</p>
        <button
          aria-label='Generate random RGB value'
          onClick={() => dispatch(randomize())}
        >
          Click to Generate a Random RBG Value
        </button>
      </section>
    </div>
  )
}
