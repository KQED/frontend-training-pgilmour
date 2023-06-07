import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
// import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
import store from './slices/store'


import App from '../react-app/src/App.js'

const PORT = 3002
const app = express()

app.get('/', (req, res) => {
  // ReactDOMserver's renderToString is used to render the app to a static HTML string
  // const app = ReactDOMServer.renderToString(<App />)
  // The static index.html file from the react-app client app is read.
  // The app's static content is injected into the <div> with an id "root", see line 26 or so.
  // This is sent as a response to the request.
  const indexFile = path.resolve('../dist/index.html')

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('500 Status')
    }

    // const store = configureStore({
    //   reducer: rootReducer
    // })

    const app = (
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    )

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    )
  })
})
// Express is used to serve contents from the react-app directory as static files
app.use(express.static('../dist'))

app.listen(PORT, () => {
  console.log(`SSR Server is listening on port ${PORT}`)
})