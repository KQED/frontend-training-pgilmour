// Starter code from https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const port = 3001
// const path = require('path')

app.get('/', (req, res) => {
  return res.send('Hello from API Server.')
})

// app.get('/', (req, res) => {
//   return res.send('Recieved a GET HTTP method')
// })

// app.post('/', (req, res) => {
//   return res.send('Recieved a POST HTTP method')
// })

// app.oyt('/', (req, res) => {
//   return res.send('Recieved a PUT HTTP method')
// })

// app.use(express.static(path.join(__dirname, '../dist')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})