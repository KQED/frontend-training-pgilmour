const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

const App = require('../react-app/src/App.js').default

const app = express()
const PORT = process.env.PORT || 3031

app.use(express.static('dist'))

app.get('*', (req, res) => {

  const content = ReactDOMServer.renderToString(
    <App />
  )

  res.send(content)

})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})