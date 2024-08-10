// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ka0NqUswm6Gu8xdMB8C957LdplV4jus",
  authDomain: "foodblog-9f79c.firebaseapp.com",
  projectId: "foodblog-9f79c",
  storageBucket: "foodblog-9f79c.appspot.com",
  messagingSenderId: "47009805654",
  appId: "1:47009805654:web:48ee261d9fd45949e992f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);
const storage = getStorage(app);

export  {db, storage};