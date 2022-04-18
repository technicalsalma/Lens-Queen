// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATUYhV3--L32v7m2m52xeeHUTQAbPmbrM",
  authDomain: "salma-s-photography.firebaseapp.com",
  projectId: "salma-s-photography",
  storageBucket: "salma-s-photography.appspot.com",
  messagingSenderId: "720968842433",
  appId: "1:720968842433:web:2234e2702b58b9aadb6840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;