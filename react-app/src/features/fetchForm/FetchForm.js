import React from 'react'
import { useSelector } from 'react-redux'
// import { randomize } from '../../slices/hexPickerSlice'
// import style from './HexPicker.scss'

export const FetchForm = () => {
  const users = useSelector(state => state.users)

  const renderedUsers = users.map(user => (
    <div key={user.id}>
      <h3>{user.name}</h3>
    </div>
  ))
  return (
    <div>
      <h2>JSON response:</h2>
      {renderedUsers}
      <p>Hello FetchForm.js</p>
      <p>Results from Redux fetch for all users: </p>
    </div>
  )
}
