// //create http server
// var http=require("http");
// http.createServer(function(req,res){
//     res.write("Hello my name is Khan");
//     res.end();

// }).listen(4200);

// response.writeHead()

// const http=require("http");
// const { isBuffer } = require("util");
// const server =http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.write("<h1>hi hello</h1>")
//     }
// })

// server.listen(5001);
// console.log("server is running")


const http=require("http");
const server =http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>hi hello</h1>");
        res.write('<span style="font-weight:bold ; color:Green">Welcome to Last class</span> ')
        res.end();
    }
})

server.listen(5001);
console.log("server is running")


//npm install -g express
//npm install express --save

//npx create-react-app projectapp