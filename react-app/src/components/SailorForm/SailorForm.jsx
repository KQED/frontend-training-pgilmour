import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSailor, fetchAllSailors } from '../../slices/sailorsSlice'
import styles from './SailorForm.scss'


export default function SailorForm () {
  const dispatch = useDispatch()
  const allSailorsData = useSelector(state => state.sailors.data)

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
    const sailorData = {
      name: sailorName,
      alias: sailorAlias
    }
    dispatch(addSailor(sailorData))
    setSailorName('')
    setSailorAlias('')

  }

  useEffect(() => {
    dispatch(fetchAllSailors())
  }, [])

  // console.log('allSailorsData', allSailorsData)
  return (
    <div>
      <h2>Sailor Moon Universe Character Form</h2>
      <ul className={styles.sailorList}>
        {
          allSailorsData && allSailorsData.allSailors.map((element, index) => {
            return <li key={index}>{element.name}</li>
          })
        }
      </ul>
      <h3>Add a Sailor Guardian or Dark Kingdom villain:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' value={sailorName} onChange={handleNameChange} />
        </label>
        <br />
        <br />
        <label>
          Alias:
          <input type='text' value={sailorAlias} onChange={handleAliasChange} />
        </label>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}