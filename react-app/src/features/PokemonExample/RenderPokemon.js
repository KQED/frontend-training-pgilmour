import React from 'react'
import { useGetPokemonByNameQuery } from './services/pokemon'
import DisplayGetScout from './features/DisplayGetScout/DisplayGetScout'

function App () {
  // Using a query hook automatically fetches data and returns query values
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  return (
    // <div className='App'>
    //   <Header />
    //   <Body />
    //   {/* The code below doesn't have to stay here, can/should go in it's own component */}
    //   {error ? (
    //     <>Oh no, there was an error</>
    //   ) : isLoading ? (
    //     <>Loading...</>
    //   ) : data ? (
    //     <>
    //       <h3>{data.species.name}</h3>
    //       <img src={data.sprites.front_shiny} alt={data.species.name} />
    //     </>
    //   ): null
    //   }
    //   {/* <Form /> */}
    //   <DisplayGetScout />
    // </div>
  )
}

export default App
