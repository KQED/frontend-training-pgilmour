import React from 'react'
import { HexPicker } from '../../features/hexPicker/HexPicker'
import styles from './HexCodePicker.scss'

export default function HexCodePicker () {
  return (
    <div className={styles.hexGenerator}>
      <HexPicker />
    </div>
  )
}
