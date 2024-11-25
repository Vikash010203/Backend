import express from "express";

// App intilize

const app = express()

// console.log(app)

const PORT = 8081;

app.listen(PORT,()=>{
    console.log(`server starting http://localhost:${PORT}`);

})


// nodemon : server ko bar bar start na krna pde uske liye nodemon install krte h : npm i nodemon


// Routes
// CRUD OPERATION

app.get("/",(req,res)=>{
    res.send("data get")
})