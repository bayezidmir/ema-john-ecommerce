// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKR27CRYuvGQGpMaSCHF0Iya97lXt9fRI",
  authDomain: "ema-john-5c2ce.firebaseapp.com",
  projectId: "ema-john-5c2ce",
  storageBucket: "ema-john-5c2ce.appspot.com",
  messagingSenderId: "902591721661",
  appId: "1:902591721661:web:bf6210f07e8945d22547d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
