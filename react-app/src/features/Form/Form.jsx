import React, { useState } from 'react'
// import { useGetScoutByAliasQuery } from '../../services/sailorScout.js'

{/* <li>Create a Form that takes the input to fetch from your sailor api</li> */}
export default function Form () {
  const [ alias, setAlias ] = useState('')
  // const { data, error, isLoading } = useGetScoutByAliasQuery('Reiko')
  // const { data, error, isLoading } = useGetScoutByAliasQuery(document.getElementById('getName'))
  const handleChange = (event) => {
    setAlias(event.target.value)
  }

  const handleSubmit = (event) => {
    alert('An alias was submitted: ' + alias)
    event.preventDefault
  }

  return (
    <div>
      <div>
        <h2 id='getData'>Get a Sailor Scout:</h2>
        <form onSubmit={handleSubmit}>
          <label>Sailor&apos;s Alias:
            <input
              type='text'
              value={alias}
              placeholder='Usagi'
              onChange={handleChange}
            />
            <br/>
          </label><br/>
          <input type='submit' value='Submit' />
        </form>
      </div>
      {/* <div>
        <h2 id='displayInput'>Your Sailor entry:</h2>
        {error ? (<>Oh no, there was an error</>) : isLoading ? (<>Loading...</>) : data ? (
          <>
            <h3>{data.alias}</h3>
            <p>{data.name}</p>
            <p>{data.alignment}</p>
          </>
        ) : null}
      </div> */}
    </div>
  )
}
