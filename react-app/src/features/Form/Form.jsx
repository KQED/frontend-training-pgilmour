import React, { useState } from 'react'
// import { useGetScoutByAliasQuery, usePostScoutMutation } from '../../services/sailorScout.js'
import  { fetchSailor, sailorError, sailorLoading, selectSailor } from '../../slices/sailorSlice'
import { useSelector } from 'react-redux'

export default function Form () {
  const [ alias, setAlias ] = useState('')
  const [ postedSailor, setPostedSailor ] = useState('')
  const sailor = useSelector((state) => {
    return selectSailor(state, alias)
  })
  const error = useSelector(sailorError)
  const isLoading = useSelector(sailorLoading)
  // const { data, error, isLoading } = useGetScoutByAliasQuery(alias)
  // const { data, error, isLoading } = usePostScoutMutation(body) // 


  const handleChange = (event) => {
    setAlias(event.target.value)
  }

  const handleSubmit = (event) => {
    
    // fetchSailor(alias)
    // alert('An alias was submitted: ' + alias)
    const aliasInput = event.target.elements.aliasInput.value
    setAlias(aliasInput)
    fetchSailor(aliasInput)
    event.preventDefault()
  }

  const handlePostChange = (event) => {
    setPostedSailor(event.target.value)
  }

  const handlePostSubmit = (event) => {
    alert('A sailor scout was added: ' + postedSailor)
    event.preventDefault()
  }

  return (
    <div>
      <div>
        <h2 id='getData'>Get a Sailor Scout:</h2>
        <form onSubmit={handleSubmit}>
          <label>Sailor&apos;s Alias:
            <input
              name='aliasInput'
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
          ) : sailor ? (
            <>
              <h3>Your fetch for &apos;{alias}&apos; returned the following:</h3>
              <p>{sailor.alias}</p>
              <p>{sailor.name}</p>
              <p>{sailor.alignment}</p>
            </>
          ): null
        }
      </div>
      <div>
        <h2>Add a Sailor Scout:</h2>
        <form onSubmit={handlePostSubmit}>
          <label>Add Alias:
            <input
              type='text'
              value={postedSailor}
              placeholder='Enter sailor scout'
              onChange={handlePostChange}
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
