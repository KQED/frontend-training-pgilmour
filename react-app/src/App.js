import React from 'react'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import RenderPokemon from './features/PokemonExample/RenderPokemon'
import DisplayGetScout from './features/DisplayGetScout/DisplayGetScout'

function App () {
  return (
    <div className='App'>
      <Header />
      <Body />
      <RenderPokemon />
      <DisplayGetScout />
    </div>
  )
}

export default App
