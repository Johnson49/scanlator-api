
var admin = require("firebase-admin");


require('dotenv').config()



admin.initializeApp({
  credential: admin.credential.cert(process.env.KEY)
});


const database = admin.firestore()


module.exports = database