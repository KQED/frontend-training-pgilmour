import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { randomize } from './hexPickerSlice'
import style from './hexPicker.css'

export function HexPicker () {
  const generatedValue = useSelector((state) => state.hexPicker.valueRGB)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Random RGB Generator</h2>
      <section>
        <button
          aria-label='Generate random RGB value'
          onClick={() => dispatch(randomize())}
        >
          Click to Generate a Random RBG Value
        </button>
        <p>{generatedValue}</p>
        <div className={style.swatch}></div>
      </section>
    </div>
  )
}
