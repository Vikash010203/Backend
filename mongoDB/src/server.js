import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

//  Initialize app

const app = express()
const PORT = 8081


// middleware

app.use(bodyParser.json());

// Connect to mongoDB database

const Connect = mongoose.connect("mongodb://localhost:27017/mern")
  .then(()=>{
    console.log("mongoDb connected")
  })
  .catch((err)=>{
  console.log("error connecting",err)
  })

// create Schema

const userSchema = new mongoose.Schema({
    Name: {type:String ,  required:true},
    password: {type:String , required:true}
});

// create model
const User = mongoose.model("User",userSchema);


// Routes
// app.get("/",(req,res)=>{
//     console.log("hello");
//     res.send("get successfully!")
// })

// Create user (POST)
// app.post("/users", async (req, res) => {
//     try {
//       const { Name, password } = req.body;
//       const newUser = new User({ Name, password });
//       await newUser.save();
//       res
//         .status(201)
//         .send({ message: "User created successfully", user: newUser });
//     } catch (err) {
//       res.status(500).send({ message: "Error creating user", error: err });
//     }
//   });

//   Get all users (GET)
// app.get("/users" , async(req,res) =>{
//     try{
//         const users = await User.find();
//         res.status(200).send(users);
//     }catch(err){
//         res.status(500).send({message:"error fetching users",error: err});
//     }
// });

// Update user (PUT)
app.put("/users/:id", async (req,res)=>{
    try{

    
 const {id} = req.params;
 console.log(id)
 const {Name,password} =req.body
 const UpdateUser = await User.findByIdAndUpdate(
    id,
    {Name: Name, password: password},
    {new: true}
 );
 res.status(200).send({message:"user update sucessfully",user:UpdateUser});
}catch(err){
    res.status(500).send({message:"error updating user",error:err})
}
})

// Delete user (DELETE)

app.delete("/users/:id" , (req,res)=>{

  try{
    const {id} = req.params;
    const User = User.findByIdAndDelete(id);
    res.send({message:"User deleted sucessfully" , User: User})
  }
  catch(error){
    res.send(error)
  }
    
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });