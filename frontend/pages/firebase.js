
import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth, initializeAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQOLC-rILQ3ZlXECOJ6AcpG2EmWzZSaYQ",
  authDomain: "shitcode-ee3d5.firebaseapp.com",
  projectId: "shitcode-ee3d5",
  storageBucket: "shitcode-ee3d5.appspot.com",
  messagingSenderId: "244433479751",
  appId: "1:244433479751:web:9aefdb5a488e8bdcb02962",
  measurementId: "G-SPRNJLCXKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export  {app,auth};
