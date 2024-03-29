import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.scss'

export default function Header () {
  return (
    <div className={styles.rootHeader}>
      <h1 className={styles}>KQED Initial Training Project - Pamela Gilmour</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='cats'>Click for Cats</Link>
          </li>
          <li>
            <Link to='hex-picker'>Click for Hex Picker Page</Link>
          </li>
          <li>
            <Link to='sailorForm'>Sailor Form</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
