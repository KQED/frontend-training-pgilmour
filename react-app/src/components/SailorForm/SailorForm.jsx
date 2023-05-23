import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSailors } from '../../slices/sailorsSlice'


export default function SailorForm () {
  const [name, setName] = useState('')
  const [alias, setAlias] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleAliasChange = (e) => {
    setAlias(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('name:', name)
    console.log('alias:', alias)

  }
  const allSailorsData = useSelector(state => state.sailors.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllSailors())
  }, [])

  if(!allSailorsData) {
    return null
  }

  return (
    <div>
      <p>Yo! Future Home of the Sailor Form</p>
      <ul>
        {
          allSailorsData.allSailors.map((element, index) => {
            return <li key={index}>{element.name}</li>
          })
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Alias:
          <input type='text' value={alias} onChange={handleAliasChange} />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>

    </div>

  )
}