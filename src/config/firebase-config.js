import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB5J7RqXKj1leIqtKI4iQaeQ-5iVgmP5lw",
  authDomain: "tong-duong-project.firebaseapp.com",
  projectId: "tong-duong-project",
  storageBucket: "tong-duong-project.firebasestorage.app",
  messagingSenderId: "195192610615",
  appId: "1:195192610615:web:c51fc6661fe3e80c71c4b2",
  measurementId: "G-LE0D4XNBNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
