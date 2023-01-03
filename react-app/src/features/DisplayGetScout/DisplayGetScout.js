import * as React from 'react'
import { useGetScoutByAliasQuery } from '../../services/sailorScout.js'

export default function DisplayGetScout () {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetScoutByAliasQuery('Reiko')
  // Individual hooks are also accessible under the generated endpoints:
  console.log('From `DisplayGetScout`: ', data)
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.alias}</h3>
          <p>{data.name}</p>
          <p>{data.alignment}</p>
        </>
      ) : null}
    </div>
  )
}