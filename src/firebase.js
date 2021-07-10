import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDYElw07xqEse23VfwClId9M72Lw66GjkA",
    authDomain: "facebook-clone-6d3f5.firebaseapp.com",
    projectId: "facebook-clone-6d3f5",
    storageBucket: "facebook-clone-6d3f5.appspot.com",
    messagingSenderId: "228077013953",
    appId: "1:228077013953:web:46fdaa6f4c7a2733cc7d40",
    measurementId: "G-X55ZQ0WLJP"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
//this will tell firebase that we want google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider} ;
export default db;