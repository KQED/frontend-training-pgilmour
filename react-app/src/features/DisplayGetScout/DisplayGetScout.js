import React from 'react'
import { useGetScoutByAliasQuery } from '../../services/sailorScout.js'

export default function DisplayGetScout () {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetScoutByAliasQuery('Reiko')
  // Individual hooks are also accessible under the generated endpoints:
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>Your fetch for &apos;Reiko&apos; returned the following:</h3>
          <p>{data.alias}</p>
          <p>{data.name}</p>
          <p>{data.alignment}</p>
          <h3> Next adjust tasks:</h3>
          <ul>
            <li> Create a form in React</li>
            <li>Create a Form that takes the input to fetch from your sailor api</li>
            <li> create a field to add a new sailor</li>
            <li> create a field to modify an existing sailor</li>
            <li> |_ then fetch the newly modified data directly from the modification mentioned above</li>
          </ul>
          <h3> Stretch goal is get a gif fropm giphy</h3>
        </>
      ) : null}
    </div>
  )
}