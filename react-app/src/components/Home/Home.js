import React from 'react'
import styles from './Home.scss'

// Write a fetch to get all sailors from api-server.js
const fetchAllSailors = () => {
  // url keeps the url endpoint we will make a call to
  const url = 'http://localhost:3001/sailors'

  // requestOptions are configurations for the fetch
  const requestOptions = {
    // method specifies HTTP method to be used, usually required
    method: 'GET',
    // headers provide more info about the request
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // fetch Promise chain follows:
  fetch (url, requestOptions)
    // the response from the server is passed as an arg,
    // the arrow fx calls .json() on the response
    // .json() is an async method that returns another Promise
    // it reads the response and parses it as json
    // 
    .then(response => response.json() )
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log('Fetch error:', error)
    })
}

export default function Home () {
  fetchAllSailors()
  const fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  return (
    <div className={styles.homeSection}>
      <h2>Home Page Route</h2>
      <p>{fillerText}
      </p>
    </div>
  )
}