import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCi_v1h4cH7Uf1w2kDC4UMnj4jifXMhPEA",
  authDomain: "birthday-assignment-e4e08.firebaseapp.com",
  projectId: "birthday-assignment-e4e08",
  storageBucket: "birthday-assignment-e4e08.firebasestorage.app",
  messagingSenderId: "11769433016",
  appId: "1:11769433016:web:f3e2620247b25beb815d4d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

console.log("Firebase initialized", app);
