// import React, { useEffect } from 'react'
import React from 'react'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Form from './features/Form/Form'
import DisplayGetScout from './features/DisplayGetScout/DisplayGetScout'

function App () {
  return (
    <div className='App'>
      <Header />
      <Body />
      <Form />
      <DisplayGetScout />
    </div>
  )
}

export default App