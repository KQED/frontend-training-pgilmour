import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from './Home.scss'
import { fetchAllSailors } from '../../slices/sailorsSlice'

export default function Home () {
  // fetchAllSailors()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllSailors)
  }, [])

  const fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  return (
    <div className={styles.homeSection}>
      <h2>Home Page Route</h2>
      <p>{fillerText}
      </p>
    </div>
  )
}