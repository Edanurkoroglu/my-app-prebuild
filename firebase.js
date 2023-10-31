// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp-evI8hYPrU_zC58ddARulUhljmd8eN8",
  authDomain: "marka-homs.firebaseapp.com",
  projectId: "marka-homs",
  storageBucket: "marka-homs.appspot.com",
  messagingSenderId: "917879655777",
  appId: "1:917879655777:web:a6e36c36a3390ccdc70920",
  measurementId: "G-LFFCTB2F6K"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };