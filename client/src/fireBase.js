const firebaseConfig = {
    apiKey: "AIzaSyCllyEDqm4JvZd6FYxWJIlc4Ag8gz1I-5k",
    authDomain: "whatsappmern-34253.firebaseapp.com",
    projectId: "whatsappmern-34253",
    storageBucket: "whatsappmern-34253.appspot.com",
    messagingSenderId: "79285029494",
    appId: "1:79285029494:web:b8beb3c63a62159c47ed57"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
//autenticación con google
const provider = new firebase.auth.GoogleAuthProvider();

export default {auth, provider, db};

