// Readfile
// Asynchronous method

// const { isUtf8 } = require("buffer");
const fs = require("fs");

// fs.readFile("index.txt", 'utf8' , (err,data)=>{
//     if(err){
//         console.log("error file:", err)

//     }else{
//         console.log("file content:", data)
//     }
   
// });


// Synchronous methos : in this method can not handle error

// const data = fs.readFileSync("index.txt","Utf8")
// console.log(data);



// writefiles
// Asynchronous method

// fs.writeFile("index.txt","vikash",(err) =>{
//     if(err) throw err;
//     console.log("file written sucessfully")
// })

            //or

// fs.writeFile("index.txt", "vikash", (err) => {
//     if(err){
        
// }
// console.log("file written sucessfully")
// });


// Synchronous methos

// fs.writeFileSync("index.txt", "hello vikash");
// console.log("file written sucessfully");



// Appending to Files
// Asynchronous 

//  fs.appendFile("index.txt","\n"+ " " + JSON.stringify({ "name":"rahul"}), (err) => {
//  if (err) throw err;
//   console.log("Content appended successfully!");
//  });




 // Deleting Files
//  Asynchronous

//  fs.unlink("file.txt", (err) => {
//    if (err) throw err;
//    console.log("File deleted successfully!");
//  });


// Checking File/Directory Existence
// Deprecated: fs.exists



// Renaming Files
// Rename or move a file.
// Asynchronous

// fs.rename("oldName.txt", "newName.txt", (err) => {
//   if (err) throw err;
//   console.log("File renamed successfully!");
// });