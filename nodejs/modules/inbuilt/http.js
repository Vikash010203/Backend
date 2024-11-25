const http =require("http");

const server = http.createServer((req,res)=>{
  res.writeHead(200,{"Content-type":"text/plain"});
  res.end("hello nodejs");
});

server.listen(3000,()=>{
    console.log("server is running http://localhost:3000")
})