import React from 'react'
import { Header } from './components/Header'
import Body from './components/Body'
import { Counter } from './features/counter/Counter'

function App () {
  return (
    <div className='App'>
      <Header />
      <Body />
      <Counter />
    </div>
  )
}

export default App