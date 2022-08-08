import React from 'react'
import { createRoot } from 'react-dom/client'
import { Greet } from './components/Header'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<Greet />)