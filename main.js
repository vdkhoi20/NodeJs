const express=require('express')
const morgan=require('morgan')
const app=express()
const port=3005
const expressHbs=require("express-handlebars");
const route=require("./views/routes");



app.use(morgan('combined'))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('hbs', expressHbs.engine({
    layoutsDir: __dirname+ "/views/layouts",
    defaultLayout:"layout",
    partialsDit:__dirname+"/views/partials",
    extname:"hbs"
}));
app.use(express.static(__dirname+"/views"));

app.set('view engine','hbs');

route(app);

app.listen(port,()=>console.log(`listen at ${port}`))