import * as React from 'react'
// import { useGetPokemonByNameQuery } from './services/pokemon'
import { useGetScoutByAliasQuery } from '../../services/sailorScout.js'

export default function DisplayGetScout () {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetScoutByAliasQuery('Amy')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  console.log(data)
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.alias}</h3>
          {/* <img src={data.sprites.front_shiny} alt={data.species.name} /> */}
        </>
      ) : null}
    </div>
  )
}