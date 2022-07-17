import * as admin from 'firebase-admin';


const GOOGLE_APPLICATION_CREDENTIALS = "process.env..."

admin.initializeApp({
  credential: admin.credential.cert(GOOGLE_APPLICATION_CREDENTIALS)
});

const database = admin.firestore()


export default database