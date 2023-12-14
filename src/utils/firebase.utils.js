// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxSHUT_ZlKSILvm_u_XZXlKZdKv9UqtBQ",
  authDomain: "졸업프로젝트-e3010.firebaseapp.com",
  projectId: "졸업프로젝트-e3010",
  storageBucket: "졸업프로젝트-e3010.appspot.com",
  messagingSenderId: "595039079896",
  appId: "1:595039079896:web:868bfebfe35a853b0df6ad",
  measurementId: "G-D7TVW5QSHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
