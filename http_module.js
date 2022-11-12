const http=require("http");


const server=http.createServer((req,res)=>{
    if (req.url=="/"){
        res.write("hello, this is home page");
        res.end();
    }
    if (req.url=="/first_api"){
        res.write("hello, this is first_api page\n");
        res.write(JSON.stringify(["api1","api2"]));
        res.end();
    }
});
server.on("connection",(socket)=>{
    console.log("new connection on "+socket);
})

server.listen(3000);



console.log("listening on port 3000..");