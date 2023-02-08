import React, { useState } from 'react'
import { useGetScoutByAliasQuery } from '../../services/sailorScout.js'

export default function Form () {
  const [ alias, setAlias ] = useState('')
  const [ addedSailor, setAddedSailor ] = useState('')
  const { data, error, isLoading } = useGetScoutByAliasQuery(alias)
  // const { data, error, isLoading } = useAddScoutQuery()


  const handleChange = (event) => {
    setAlias(event.target.value)
  }

  const handleSubmit = (event) => {
    alert('An alias was submitted: ' + alias)
    event.preventDefault()
  }

  const handleAddChange = (event) => {
    setAddedSailor(event.target.value)
  }

  const handleAddSubmit = (event) => {
    alert('A sailor scout was added: ' + addedSailor)
    event.preventDefault()
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
        {/* Bug: The form fetches the input before clicking submit button
          and so the error message displays until an input is entered */}
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
      <div>
        <h2 id='getData'>Add a Sailor Scout:</h2>
        <form onSubmit={handleAddSubmit}>
          <label>Add Alias:
            <input
              type='text'
              value={addedSailor}
              placeholder='Enter sailor scout'
              onChange={handleAddChange}
            />
            <br/>
          </label><br/>
          <label>Add Name:
            <input
              type='text'
              placeholder='Enter a sailor&apos;s alias'
            />
            <br/>
          </label><br/>
          <label>Add Alignment:
            <input
              type='text'
              placeholder='Enter a sailor&apos;s affiliation'
            />
            <br/>
          </label><br/>
          <input type='submit' value='Submit' />
        </form>
      </div>
      <div>
        <h3> Next tasks:</h3>
        <ul>
          <li>completed - Create a form in React</li>
          <li>completed - Create a Form that takes the input to fetch from your sailor api</li>
          <li>in progress - create a field to add a new sailor</li>
          <li> |_ then fetch the newly modified data directly from the modification mentioned above</li>
        </ul>
      </div>
    </div>
  )
}
