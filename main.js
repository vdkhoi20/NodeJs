const express=require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{res.send("hello thang ngu")})
app.get('/test',(req,res)=>{res.send("hello thang ngu")})
app.get('/check',(req,res)=>{res.send("hello thang ngu")})
app.get('/check/test',(req,res)=>{res.send("hello thang ngu")})


app.listen(port,()=>console.log(`listen at ${port}`))