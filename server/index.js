// Starter code from https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname), '../dist/index.html')
})

app.use(express.static(path.join(__dirname, '../dist')))

app.listen(port, () => {
  console.log(`My React app listening on port ${port}`)
})