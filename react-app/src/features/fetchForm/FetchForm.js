import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { randomize } from '../../slices/hexPickerSlice'
// import style from './HexPicker.scss'

export function FetchForm () {
  // const generatedValue = useSelector((state) => state.hexPicker.valueRGB)
  // const dispatch = useDispatch()
  // const applyColor = () => {
  //   document.body.style.background = generatedValue
  // }
  // applyColor()
  return (
    <div>
      {/*
      <section>
        <p>{generatedValue}</p>
        <button
          aria-label='Generate random RGB value'
          onClick={() => dispatch(randomize())}
        >
          Click to Generate a Random RBG Value
        </button>
      </section> */}
      <p>Hello FetchForm.js</p>
      <p>Results from Redux fetch for all users: </p>
    </div>
  )
}
