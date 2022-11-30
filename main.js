const express=require('express')
const morgan=require('morgan')
const app=express()
const port=3000
const expressHbs=require("express-handlebars");

app.use(morgan('combined'))
app.engine('hbs', expressHbs.engine({
    layoutsDir: __dirname+ "/views/layouts",
    defaultLayout:"layout",
    partialsDit:__dirname+"/views/partials",
    extname:"hbs"
}));
app.use(express.static(__dirname+"/views"));

app.set('view engine','hbs');


app.get('/home',(req,res)=>{ res.locals.pagetitle="love start";res.render("home") })
app.get('/marry',(req,res)=>{ res.locals.pagetitle="love marry";res.render("marry") })

// app.get('/test',(req,res)=>{res.sendFile(__dirname+"\\home.html")})
// app.get('/check',(req,res)=>{res.send("hello thang ngu")})
// app.get('/check/test',(req,res)=>{res.send("hello thang ngu")})


app.listen(port,()=>console.log(`listen at ${port}`))