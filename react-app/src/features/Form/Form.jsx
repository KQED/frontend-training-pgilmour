import React from 'react'
// https://redux.js.org/style-guide/
// Redux recommends avoiding putting form state in Redux
// prefer keeping the form edits themselves in local component state,
// and only dispatching an action to update the Redux store 
// once the user has completed the form.
// https://reactjs.org/docs/forms.html
import { useGetScoutByAliasQuery } from '../../services/sailorScout.js'


export default function Form () {
  console.log('Hello from From.jsx')
  const { data, error, isLoading } = useGetScoutByAliasQuery('Amy')
  console.log('From Form.jsx: ', data)
  return (
    <div>
      <div>
        <h2 id='getData'>Get a Sailor Scout:</h2>
        <form>
          <label>Sailor&apos;s Alias:
            <input type='text' id='getName' name='getName' placeholder='Usagi' /><br/>
          </label><br/>
          <input type='submit' value='Submit' />
        </form>
      </div>
      <div>
        <h2 id='displayInput'>Your Sailor entry:</h2>
        {error ? (<>Oh no, there was an error</>) : isLoading ? (<>Loading...</>) : data ? (
          <>
            <h3>{data.alias}</h3>
            <p>{data.name}</p>
            <p>{data.alignment}</p>
          </>
        ) : null}
      </div>
    </div>
  )
}
