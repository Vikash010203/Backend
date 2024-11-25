
const express = require("express");

const fs = require('fs')

const app = express();

const PORT = 5000;


// CRUD operation
// readfile

// fs.readFile("../index.txt", "utf8",(err,data)=>{
// if(err){
//     console.log("reading file err:",err)
// }else{
//     console.log("read file",data)
// }

// })




// writeFile

// fs.writeFileSync("../index.txt","write hello")
// console.log("file write sucessfully");


// delete file

fs.unlink("text.txt",(err)=>{
  if (err){
    console.log("dfelete file sucessful")
  }
});


app.listen(PORT,()=>{
    console.log(`server start at http://localhost:${5000}`)
})