import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMtaAQV_Fq7xWTJv07XkdJBYrV1qnMwEY",
  authDomain: "freelance-baf81.firebaseapp.com",
  projectId: "freelance-baf81",
  storageBucket: "freelance-baf81.firebasestorage.app",
  messagingSenderId: "262090685443",
  appId: "1:262090685443:web:825604c5622aebcd506236",
  measurementId: "G-12GRNSXN2R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;