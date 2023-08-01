import React, { useEffect } from 'react'
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

  const applyColor = (color) => {
    document.body.classList.remove('oppositeFontColor')
    document.body.style.background = color
  }
  const applyFontColor = (color) => {
    document.body.classList.add('oppositeFontColor')
    document.body.style.color = color
  }

  console.log('generatedValue:', generatedValue)
  console.log('fontValue:', fontValue)

  useEffect(() => {
    dispatch(oppositeColor())
    applyColor(generatedValue)
    applyFontColor(fontValue)
  }, [dispatch, generatedValue, fontValue])

  const handleButtonClick = () => {
    dispatch(randomize())
    dispatch(oppositeColor())
    // applyColor(generatedValue)
    // applyFontColor(fontValue)
  }

  return (
    <div className={style}>
      <h2>Random RGB Generator</h2>
      <section>
        <p>{generatedValue}</p>
        <button
          aria-label='Generate random RGB value'
          onClick={handleButtonClick}
        >
          Click to Generate a Random RBG Value
        </button>
      </section>
      <h2>Opposite RGB Value</h2>
      <p>{fontValue}</p>
    </div>
  )
}
