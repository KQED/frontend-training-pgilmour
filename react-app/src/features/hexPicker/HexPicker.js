import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { randomize } from '../../slices/hexPickerSlice'
import style from './HexPicker.scss'

export function HexPicker () {
  const generatedValue = useSelector((state) => state.hexPicker.valueRGB)
  const dispatch = useDispatch()
  const applyColor = () => {
    document.body.style.background = generatedValue
  }
  applyColor()
  return (
    <div className={style}>
      <h2>Random RGB Generator</h2>
      <div>
        <p>{generatedValue}</p>
        <button
          aria-label='Generate random RGB value'
          onClick={() => dispatch(randomize())}
        >
          Click to Generate a Random RBG Value
        </button>
      </div>
    </div>
  )
}
