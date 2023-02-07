import React, { useState } from 'react'
import { useGetScoutByAliasQuery } from '../../services/sailorScout.js'

{/* Create a Form that takes the input to fetch from your sailor api */}
export default function Form () {
  const [ alias, setAlias ] = useState('')
  const { data, error, isLoading } = useGetScoutByAliasQuery(alias)

  const handleChange = (event) => {
    setAlias(event.target.value)
  }

  const handleSubmit = (event) => {
    alert('An alias was submitted: ' + alias) // This is working
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
      </div>
    </div>
  )
}
