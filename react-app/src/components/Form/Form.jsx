import React from 'react'
import styles from './Form.scss'
// https://reactjs.org/docs/forms.html

function Form () {
  console.log('Hello')
  return (
    <div className={styles}>
      <h2>Fill out form:</h2>
      <form>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Form