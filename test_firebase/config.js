// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import firebase from "firebase/app";
//import "firebase/compat/database";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBG4clAOr1OtJjQH7blJAHOPMCIWsZQ1t4",
    authDomain: "test-jan-06.firebaseapp.com",
    databaseURL: "https://test-jan-06-default-rtdb.firebaseio.com",
    projectId: "test-jan-06",
    storageBucket: "test-jan-06.firebasestorage.app",
    messagingSenderId: "36044478384",
    appId: "1:36044478384:web:931bf4ca9a37efbaa2a875"
    };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Database
export const database = getDatabase(app)

