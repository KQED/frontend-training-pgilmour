import React, { useState } from 'react'
import { useGetScoutByAliasQuery } from '../../services/sailorScout.js'

export default function Form () {
  const [ alias, setAlias ] = useState('')
  // const { data, error, isLoading } = useGetScoutByAliasQuery(alias)

  const { data, error, isLoading } = alias ? useGetScoutByAliasQuery(alias)
    : {
      data: null,
      error: null,
      isLoading: false
    }
  const handleChange = (event) => {
    setAlias(event.target.value)
  }

  const handleSubmit = (event) => {
    console.log('An alias was submitted: ' + alias)
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
        {/* Adjust the code below to render to design.
        It is working but we need it to render when we want it to not immediately */}
        {
          error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              <h3>Your fetch for &apos;{alias}&apos; returned the following:</h3>
              <p>{data.alias}</p>
              <p>{data.name}</p>
              <p>{data.alignment}</p>
            </>
          ): null
        }
        <h3> Next tasks:</h3>
        <ul>
          <li>completed - Create a form in React</li>
          <li>completed - Create a Form that takes the input to fetch from your sailor api</li>
          <li> create a field to add a new sailor</li>
          <li> create a field to modify an existing sailor</li>
          <li> |_ then fetch the newly modified data directly from the modification mentioned above</li>
        </ul>
        <h3> Stretch goal is get a gif from giphy</h3>
      </div>
    </div>
  )
}
