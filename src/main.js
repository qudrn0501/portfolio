import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFMkKo5e56iWGETKEfVoOpKgvOFmixmPA",
  authDomain: "portfolio-51fdb.firebaseapp.com",
  projectId: "portfolio-51fdb",
  storageBucket: "portfolio-51fdb.appspot.com",
  messagingSenderId: "864401906800",
  appId: "1:864401906800:web:c89fa14dbbb3f16a2428b5",
  measurementId: "G-L5RW7415KN"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).mount('#app')


