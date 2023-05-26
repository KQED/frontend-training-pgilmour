import React, { useEffect, useState } from 'react'
import styles from './Cats.scss'

// Write a fetch to get a random cat gif/sticker from giphy
const fetchCatGif = () => {

  const apikey = process.env.CAT_GIF_KEY
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}&tag=cat`

  return fetch (url)
    .then(response => response.json() )
    .then(data => {
      const gifUrl = data.data.images.original.url
      return gifUrl
    })
    .catch(error => {
      console.log('Fetch error:', error)
    })
}

export default function Cats () {

  const [catGif, setCatGif]  = useState(null)

  useEffect(() => {
    fetchCatGif()
      .then(embedUrl => {
        setCatGif(embedUrl)
      })
      .catch(error => {
        console.log('Fetch error:', error)
      })
  }, [])

  return (
    <div className={styles.catPage}>
      <h2>Cats Page Route</h2>
      <img src={catGif} />
    </div>
  )
}