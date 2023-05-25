import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  randomize,
  oppositeColor
} from '../../slices/hexPickerSlice'
import style from './HexPicker.scss'

export default function HexPicker () {
  const generatedValue = useSelector((state) => state.hexPicker.valueRGB)
  const fontValue = useSelector((state) => state.hexPicker.oppositeValueRGB)

  const dispatch = useDispatch()

  const applyColor = () => {
    document.body.style.background = generatedValue
  }
  const applyFontColor = () => {
    document.body.style.color = fontValue
  }

  // console.log('generatedValue:', generatedValue)
  // console.log('fontValue:', fontValue)
  applyColor()
  applyFontColor()

  return (
    <div className={style}>
      <h2>Random RGB Generator</h2>
      <section>
        <p>{generatedValue}</p>
        <button
          aria-label='Generate random RGB value'
          onClick={() => {
            dispatch(randomize())
            dispatch(oppositeColor())
          }
          }
        >
          Click to Generate a Random RBG Value
        </button>
      </section>
      <h2>Opposite RGB Value</h2>
      <p>{fontValue}</p>
    </div>
  )
}
