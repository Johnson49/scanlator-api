
var admin = require("firebase-admin");


require('dotenv').config()


// var serviceAccount = require("./chave.json");
// var serviceAccount = 

admin.initializeApp({
  credential: admin.credential.cert(process.env.KEY)
});


const database = admin.firestore()


module.exports = database