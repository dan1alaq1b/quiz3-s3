const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let dbUsers = [
  {
      username:"danial",
      password:"12345",
      name:"danial",
      email:"danial@account"
  },
  {
      username:"aqib",
      password:"12345",
      name:"aqib",
      email:"aqib@account"
  }
]

function login(reqUsername, reqPassword){
  //let matchUser = dbUsers.find(
  var matchUser = dbUsers.find(    
      x => x.username == reqUsername          //username => user.username
  )
      
  if(!matchUser) return "User not found!"     //if takde

  if(matchUser.password == reqPassword){
      return matchUser
  }else{
      return "Invalid password"
  }
}

app.post('/register', (req, res) => {
//    console.log(req.body)

    let result = register(
      req.body.username,
      req.body.password,
      req.body.name,
      req.body.email
    )

    res.send(result)
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

