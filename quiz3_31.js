let dbUsers = [
    {
        username:"danial",
        password:"123456",
        name:"Danial",
        email:"danial@account"
    },
    {
        username:"aqib",
        password:"123456",
        name:"Aqib",
        email:"aqib@account"
    },
    {
        username:"soo",
        password:"123456",
        name:"Soo",
        email:"soo@account"
    }
]

const express = require('express')
const app = express()
const port = 3000
//const jwt = require('jsonwebtoken');


app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)

    let result = login(
        req.body.username,
        req.body.password
    )

    let token = generateToken(result)
    res.send(token)                     //result)
  })

app.post('/register', (req, res) => {
    let result = register(
        req.body.username,
        req.body.password,
        req.body.name,
        req.body.email
    )
    
    res.send(result)
})
/*
app.get('/', (req, res) => {
    res.send('Hello World!')
})
*/
app.get('/bye', verifyToken, (req, res) => {
    res.send('GOODBYE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  })
/*
app.get('/register', (req, res) => {
    res.send('ERROR!!!!!!!!! FIX IT BEFORE IT EXPLODED!!!!!!!!!!!')
  })
*/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


function login(reqUsername, reqPassword){
    let matchUser = dbUsers.find(
  //var matchUser = dbUsers.find(    
        x => x.username == reqUsername          //username => user.username
    )
      
    if(!matchUser) return "User not found!"     //if takde
    if(matchUser.password == reqPassword){
        return matchUser
    } else {
        return "Invalid password"
    }
}

function register(username, password, name, email){
    dbUsers.push({
        username: username,
        password: password,
        name: name,
        email: email
    })
}

function verifyToken(req,res,next) {
    let header = req.headers.authorization //is there any value for authorization
    console.log(header)

    let token = header.split(' ')[1]  //if jumpa, split to 2 items

    jwt.verify(token, 'inipassword', function(err, decoded) { //verify with jwt with the same passwd
    if(err) {
        res.send("Invalid Token")
    }
    
    req.user = decoded
    next()
    });
}

const jwt = require('jsonwebtoken');
function generateToken(userData) {
    const token = jwt.sign(
        userData,
        'inipassword',
        {expiresIn: 60}     //expiration time
    );

        return token
}

/*
//try to login
console.log(login("danial", "12345"))
console.log(login("utem", "password"))

register("utem","password","name","email")
console.log(login("utem","password"))
*/