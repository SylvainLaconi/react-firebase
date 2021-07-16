import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDMWUf8bjdWa7WYXmW_27bVNJjvDpvAEvM",
    authDomain: "react-firebase-f5a8b.firebaseapp.com",
    projectId: "react-firebase-f5a8b",
    storageBucket: "react-firebase-f5a8b.appspot.com",
    messagingSenderId: "450697421081",
    appId: "1:450697421081:web:cc6e9fadca22812ac66588"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;