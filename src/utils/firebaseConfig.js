import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDMWUf8bjdWa7WYXmW_27bVNJjvDpvAEvM",
    authDomain: "react-firebase-f5a8b.firebaseapp.com",
    projectId: "react-firebase-f5a8b",
    databaseURL: "https://react-firebase-f5a8b-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "react-firebase-f5a8b.appspot.com",
    messagingSenderId: "450697421081",
    appId: "1:450697421081:web:cc6e9fadca22812ac66588"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;