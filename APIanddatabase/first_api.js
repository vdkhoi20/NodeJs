const http=require("http");
const server=http.createServer((req,res)=>{
    if (req.url=='/'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
    if (req.url=="/home"){
        res.write("this is home page")
        res.end();
    }
});

server.listen(3000)