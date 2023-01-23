import React, { useState } from 'react'
import styles from './Form.scss'
// https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd

const Form = () => {
  // To Do 1.18.23: Review the links below to figure out your form
  // https://blog.isquaredsoftware.com/presentations/react-redux-ts-intro-2020-12/#/46
  // https://blog.isquaredsoftware.com/presentations/react-redux-ts-intro-2020-12/#/47
  // https://blog.isquaredsoftware.com/presentations/react-redux-ts-intro-2020-12/#/82
  // https://blog.isquaredsoftware.com/presentations/react-redux-ts-intro-2020-12/#/86
  // https://redux.js.org/tutorials/essentials/part-5-async-logic
  
  const [name, setName] = useState('')

  const handleChange = event => {
    setName(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    // submit the form
  }
  return (
    <div className={styles}>
      <p className={styles}>Your input was:</p>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Sailor Scout&apos;s Name (Sailor Moon): <br /><br />
          <input type='text' value={name} onChange={handleChange} />
        </label><br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Form
