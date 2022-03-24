const express = require('express')
const app = express()
const mysql= require('mysql')
// const router = express.Router()
const mycon = require('express-myconnection')
require('dotenv').config()

const routersrc= require('./routes/methods')


app.use(mycon(mysql, {
    host:'localhost',
    user:process.env.user,
    password:process.env.password,
    database:'blogpost'
}, 'single')
)
app.use(express.urlencoded({encoded:false}))
app.set('view engine ', 'ejs')

app.use('/', routersrc)

// app.get('/', (req, res)=>{
//     console.log('hit')
//     req.getConnection((err, connection)=>{
//      query = ` select * from posts`
//         connection.query(query,[], (err, result)=>{
//             if (err) throw err
//             res.send(result)
//         }
//         )
//     })
// })




app.listen(3000, ()=>{
    console.log('started listening in port 3000');
})