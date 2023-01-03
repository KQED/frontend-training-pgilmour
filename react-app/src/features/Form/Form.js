import React from 'react'

export function Form () {
  return (
    <div>
      <h2>Form goes here:</h2>
      {/* "Use a form on the front end to input, modify, and display the data" */}
      <form>
        <label> Enter a Sailor Scout&apos;s name:
          <input type='text' placeholder='Sailor Moon' />
        </label>
      </form>
    </div>
  )
}

export default Form