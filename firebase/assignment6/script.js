import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

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
const db = getDatabase(app);

const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");

const authSections = document.getElementById("authSections");
const resultSection = document.getElementById("resultSection");
const resultContainer = document.getElementById("resultContainer");
const resultLogoutBtn = document.getElementById("resultLogoutBtn");

function showMessage(title, subtitle, text, author) {
  resultContainer.innerHTML = "";

  const titleEl = document.createElement("h3");
  titleEl.className = "resultTitle";
  titleEl.innerHTML = title;

  const subEl = document.createElement("p");
  subEl.className = "resultSub";
  subEl.innerHTML = subtitle;

  resultContainer.appendChild(titleEl);
  resultContainer.appendChild(subEl);

  if (text) {
    const quoteEl = document.createElement("p");
    quoteEl.className = "quote";
    quoteEl.innerHTML = '"' + text + '"';

    const authorEl = document.createElement("p");
    authorEl.className = "author";

    if (author) {
      authorEl.innerHTML = "by " + author;
    } else {
      authorEl.innerHTML = "by Unknown";
    }

    resultContainer.appendChild(quoteEl);
    resultContainer.appendChild(authorEl);
  }
}

function daysUntilBirthday(dob) {
  const parts = dob.split("-");
  const month = Number(parts[1]);
  const day = Number(parts[2]);

  const today = new Date();
  const currentYear = today.getFullYear();

  const startOfToday = new Date(currentYear, today.getMonth(), today.getDate());

  let nextBirthday = new Date(currentYear, month - 1, day);

  if (nextBirthday < startOfToday) {
    nextBirthday = new Date(currentYear + 1, month - 1, day);
  }

  const msInDay = 1000 * 60 * 60 * 24;
  const diffMs = nextBirthday - startOfToday;

  const diffDays = diffMs / msInDay;

  return Math.round(diffDays);
}

async function getRandomQuote() {
  try {
    const response = await fetch("https://type.fit/api/quotes");

    if (response.ok === false) {
      throw new Error("API failed");
    }

    const quotes = await response.json();

    const index = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[index];

    let text = "";
    let author = "";

    if (selectedQuote && selectedQuote.text) {
      text = selectedQuote.text;
    }

    if (selectedQuote && selectedQuote.author) {
      author = selectedQuote.author;
    } else {
      author = "Unknown";
    }

    return { text: text, author: author };
  } catch (e) {
    const response2 = await fetch("./quotes.json");
    const quotes2 = await response2.json();

    const index2 = Math.floor(Math.random() * quotes2.length);
    const selectedQuote2 = quotes2[index2];

    let text2 = "";
    let author2 = "";

    if (selectedQuote2 && selectedQuote2.text) {
      text2 = selectedQuote2.text;
    }

    if (selectedQuote2 && selectedQuote2.author) {
      author2 = selectedQuote2.author;
    } else {
      author2 = "Unknown";
    }

    return { text: text2, author: author2 };
  }
}

authSections.style.display = "grid";
resultSection.style.display = "none";
resultContainer.innerHTML = "";

registrationForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const uid = cred.user.uid;

    const userRef = ref(db, "users/" + uid);

    const userData = {
      name: name,
      dob: dob
    };

    await set(userRef, userData);

    registrationForm.reset();
    alert("User Registered Successfully");
  } catch (e) {
    alert(e.message);
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const uid = cred.user.uid;

    authSections.style.display = "none";
    resultSection.style.display = "block";

    const userRef = ref(db, "users/" + uid);
    const snap = await get(userRef);

    if (!snap.exists()) {
      showMessage("Profile not found", "Please create an account.");
      return;
    }

    const data = snap.val();
    const name = data.name;
    const dob = data.dob;

    const days = daysUntilBirthday(dob);

    if (days === 0) {
      const quote = await getRandomQuote();
      showMessage("Happy Birthday, " + name + "!", "Here’s a quote for you:", quote.text, quote.author);
    } else if (days === 1) {
      showMessage(days + " day left", "until your birthday!");
    }
    else {
      showMessage(days + " days left", "until your birthday!");
    }
  } catch (e) {
    alert(e.message);
  }
});

resultLogoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);

    authSections.style.display = "grid";
    resultSection.style.display = "none";
    resultContainer.innerHTML = "";

    registrationForm.reset();
    loginForm.reset();
  } catch (e) {
    alert(e.message);
  }
});
