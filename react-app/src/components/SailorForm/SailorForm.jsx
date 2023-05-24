import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSailor, fetchAllSailors } from '../../slices/sailorsSlice'


export default function SailorForm () {
  const [sailorName, setSailorName] = useState('')
  const [sailorAlias, setSailorAlias] = useState('')

  const handleNameChange = (e) => {
    setSailorName(e.target.value)
  }

  const handleAliasChange = (e) => {
    setSailorAlias(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('name:', sailorName)
    console.log('alias:', sailorAlias)
    const sailorData = {
      name: sailorName,
      alias: sailorAlias
    }
    dispatch(addSailor(sailorData))

  }
  const allSailorsData = useSelector(state => state.sailors.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllSailors())
  }, [])

  useEffect(() => {
    console.log('State changed:', { sailorName, sailorAlias })
  }, [sailorName, sailorAlias])

  if(!allSailorsData) {
    return null
  }

  console.log('allSailorsData', allSailorsData)
  return (
    <div>
      <h2>Sailor Moon Universe Character Form</h2>
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
          <input type='text' value={sailorName} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Alias:
          <input type='text' value={sailorAlias} onChange={handleAliasChange} />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}