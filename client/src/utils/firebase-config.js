// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKzrMkaDBqKTxJWgBqidplDpr9zog_zZg",
  authDomain: "netflix-clone-408ee.firebaseapp.com",
  projectId: "netflix-clone-408ee",
  storageBucket: "netflix-clone-408ee.appspot.com",
  messagingSenderId: "941852470795",
  appId: "1:941852470795:web:3134f5ad0b47c1553d610e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
