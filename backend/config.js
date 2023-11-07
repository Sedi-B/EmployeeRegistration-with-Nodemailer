const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyD5yWazbqUh-yR2yOpOTH7Nx0hvTA25QPg",
  authDomain: "employeeserver-bc7c6.firebaseapp.com",
  projectId: "employeeserver-bc7c6",
  storageBucket: "employeeserver-bc7c6.appspot.com",
  messagingSenderId: "485120024475",
  appId: "1:485120024475:web:a5443b68fe486e6ff0cb3e",
  measurementId: "G-B641XWGZLV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");

// module.exports = User;
