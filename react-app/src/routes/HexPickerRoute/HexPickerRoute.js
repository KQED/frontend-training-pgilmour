import React from 'react'
import { HexPicker } from '../../components/hexPicker/HexPicker'
import styles from './HexPickerRoute.scss'

export default function HexPickerRoute () {
  return (
    <div className={styles.hexGenerator}>
      <HexPicker />
    </div>
  )
}
