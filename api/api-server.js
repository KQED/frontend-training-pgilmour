// https://github.com/expressjs/express/blob/master/examples/params/index.js
// This sets up a HTTP server (as opposed to a HTTPS server, were not going to use a SSL/TLS certificate)
const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

app.use(cors())

let sailors = [
  { id: 33, name: 'Sailor Moon', alias: 'Usagi' },
  { id: 34, name: 'Sailor Mercury', alias: 'Amy' },
  { id: 98, firstName: 'Reiko', alias: 'Sailor Aluminum Siren' }
]

app.get('/', (req, res) => {
  res.send('Try routes `~/sailors` or `~/get-sailor/34`')
})

app.get('/sailors', (req, res) => {
  res.send(sailors)
})

app.get('/get-sailor/:id', (req, res) => {
  let sailor = sailors.find(element => element.id === Number(req.params.id))
  res.send(sailor)
})


// This endpoint takes an existing 'id' and sets a flag called 'loggedin' as true.
app.post('/set-sailor/:id', (req, res) => {
  let sailorData = req.body
  sailorData.loggedin = true // This is the flag requested in the ticket
  res.json({ requestBody: req.body })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
