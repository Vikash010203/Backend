// crypto modules in node.js is used for performing cryptogaraphic operation . cryptjography is essential for ensuring security in applications, 
// such as encrypting data verifying integrity, and generating secure tokens.




// const crypto = require("crypto")

// const password = "mysecretpassword";

// const hash = crypto.createHash("sha256").update(password).digest("hex");

// console.log(`hashed password:${hash}`)


// password veriufication with HMAC
// const key = "secretkey"
// const data = "sensitive data";

// create HMAC
// const hmac = crypto.createhmac("sha256",key).

// generating secure tokens
const generateToken = ()=>{
    return crypto.randomBytes(32).toString("hex")
};
console.log(`token: ${generateToken()}`);


// Digital signature

