const express = require('express')
const { StrictMode } = require('react')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { Provider } = require('react-redux')
const store = require('../react-app/src/slices/store')

const App = require('../react-app/src/App').default

const app = express()
const PORT = process.env.PORT || 3031

app.get('/', (req, res) => {

  const app = (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  )
  const content = ReactDOMServer.renderToString(app)
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `

  res.send(html)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})