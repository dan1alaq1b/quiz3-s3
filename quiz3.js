const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)

    res.send('Login')
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bye', (req, res) => {
    res.send('GOODBYE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  })

  app.get('/register', (req, res) => {
    res.send('ERROR!!!!!!!!! FIX IT BEFORE IT EXPLODED!!!!!!!!!!!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
