// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNHBXtmM48tnhlgMYidZ-uOGbHWK3DwI8",
  authDomain: "dinner-718be.firebaseapp.com",
  databaseURL: "https://dinner-718be-default-rtdb.firebaseio.com",
  projectId: "dinner-718be",
  storageBucket: "dinner-718be.appspot.com",
  messagingSenderId: "575656175763",
  appId: "1:575656175763:web:a7c3d7a2bffe2da48b8566",
  measurementId: "G-ZD7F0HHH6T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
