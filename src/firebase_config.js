
import firebase from 'firebase/compat/app';
import "firebase/analytics";
import "firebase/auth";
// import "firebase/firestore";
require ('firebase/auth')


var firebaseConfig = {
    apiKey: "AIzaSyAvqfm2zNHYHKAN75c_FwjViuJhe6HneaI",
    authDomain: "todolist-4d2db.firebaseapp.com",
    projectId: "todolist-4d2db",
    storageBucket: "todolist-4d2db.appspot.com",
    messagingSenderId: "611839853346",
    appId: "1:611839853346:web:cfdf7461552546a6129b7b",
    measurementId: "G-S32YXE5E9Z"
  };


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };