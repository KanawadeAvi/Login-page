const express=require("express")
const app=express()
const path=require('path')
const hbs=require('hbs')
const async = require("hbs/lib/async")



const tempelatepath=path.join(_-dirname,'../tempelates')


app.use(express.json())
app.set('view engine',"hbs")
app.set(set("views",tempelatepath))



app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async(req,res)=>{

    const data={
        name:req.body.name,
        passward:req.body.passward
    }

    await collection.insertMany([data])
    
    res.render("home")
})


app.listen(3000,()=>{
    console.log("port connected");
})