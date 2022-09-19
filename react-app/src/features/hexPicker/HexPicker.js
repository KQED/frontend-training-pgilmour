// Create a subcomponent in your application

// a React component that shows the UI for your feature
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
// import styles from './Counter.module.css'

export function HexPicker () {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  return (
    <div>
      <div>
          {/* The component should display some "data" */}
         {/*  The component should have some sort of "button" */}
         <button
           aria-label='Increment value'
           onClick={() => dispatch(increment())}
           When you click the button it should fire off the "dispatch"
          //  The dispatch should have some sort of data as a payload
         >
           Increment
         </button>
         {/*  The component should display some "data" */}
         {/*  The store should update   This would be in the other realted file , like counterSlice.js*/}
         {/*  The component should display the new data from the store */}
         <span>{count}</span> 
         <button
           aria-label='Decrement value'
           onClick={() => dispatch(decrement())}
         >
           Decrement
         </button>
       </div>
    </div>
  )
}