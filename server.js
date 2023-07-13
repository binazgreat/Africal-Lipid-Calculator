const express = require('express')
const app = express()
const path=require('path')
const ejs = require('ejs')

const collection = require("./mongodb")

const viewsPath = path.join(__dirname, 'templates')

app.set('view-engine', 'ejs')
app.set('views', viewsPath)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/static', express.static('static'));

app.get('/',(req, res) =>{ 
    res.render('home.ejs')
})
app.get('/signup',(req, res) =>{ 
    res.render('signup.ejs')
})
app.get('/login',(req, res) =>{ 
    res.render('login.ejs')
})
app.post('/signup', async (req, res)=>{
    const data ={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
     await collection.insertMany([data])
     res.render('login.ejs')
})
app.post('/login', async (req, res)=>{
    try{
        const check=await collection.findOne({email:req.body.email})

        if(check.password===req.body.password){
            res.render('calc.ejs',{ name: check.name})
        }
        else{
            res.send("wrong password")

        }
    }
    catch{
        res.send("wrong details")

    }
})
app.delete('/logout', (req, res) => {
    res.render('home.ejs');
});
app.listen(3050, () =>{
    console.log('port connected')
})
