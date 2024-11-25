import express from "express";
import dotenv from "dotenv";

dotenv.config()

// console.log(process.env.PORT)
// console.log(process.env.secret_key)



const app = express();

// middleware
app.use(express.json)
app.use(express.text)

let arr = []

// ROUTES
// CRUD
// app.get("/", (req,res)=>{
//    res.send("hello")
// })

// app.get("/data", (req,res)=>{
//    res.send("hello data")
// })

// POST
// app.post("/" , (req,res)=>{
//   const data = req.body
//   res.send(data)
// //   console.log(data)
// })


// PUT update

app.put("/update/:id", (req,res)=>{
 
   const  {id} = req.params.abc
   res.send(id)
})

const PORT = process.env.PORT;
// console.log(PORT)
app.listen(PORT, () => {
   console.log(`server is start at http://localhost:${PORT}`);
})