// https://github.com/expressjs/express/blob/master/examples/params/index.js
const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

let users = [
  { id: 33, name: 'Sailor Moon', alias: 'Usagi', alignment: 'Moon Kingdom' },
  { id: 34, name: 'Sailor Mercury', alias: 'Amy', alignment: 'Moon Kingdom' },
  { id: 98, name: 'Sailor Aluminum Siren', alias: 'Reiko', alignment: 'Shadow Galactica' }
]

app.get('/', (req, res) => {
  res.send('Try routes `~/users` or `~/get-user/34`')
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/get-user/:id', (req, res) => {
  let user = users.find(element => element.id === Number(req.params.id))
  res.send(user)
})


// This endpoint takes an existing 'id' and sets a flag called 'loggedin' as true.
app.post('/set-user/:id', (req, res) => {
  let userData = req.body
  userData.loggedin = true // This is the flag requested in the ticket
  res.json({ requestBody: req.body })
})

app.listen(port, () => {
  console.log(`My API Server app listening on port ${port}`)
})
