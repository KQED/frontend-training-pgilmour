import React from 'react'
import { useGetPokemonByNameQuery } from './services/pokemon'

function RenderPokemon () {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  return (
    <div className='App'>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ): null
      }
    </div>
  )
}

export default RenderPokemon

// Another way to the do the code above:

// import './styles.css'
// import { Pokemon } from './Pokemon' // I have included this code in the code base
// import { useState } from 'react'

// const pokemon = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur']

// export default function App() {
//   const [pollingInterval, setPollingInterval] = useState(0)

//   return (
//     <div className="App">
//       <select
//         onChange={(change) => setPollingInterval(Number(change.target.value))}
//       >
//         <option value={0}>Off</option>
//         <option value={1000}>1s</option>
//         <option value={5000}>5s</option>
//       </select>
//       <div>
//         {pokemon.map((poke, index) => (
//           <Pokemon key={index} name={poke} pollingInterval={pollingInterval} />
//         ))}
//       </div>
//     </div>
//   )
// }