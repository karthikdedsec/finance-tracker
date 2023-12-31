import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3VMXYqrW0ihNPHS_lmRdqb6iQXLaxUf4",
  authDomain: "mymoney-c479c.firebaseapp.com",
  projectId: "mymoney-c479c",
  storageBucket: "mymoney-c479c.appspot.com",
  messagingSenderId: "202136049826",
  appId: "1:202136049826:web:652a0ba04018465b5b5ffb",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
