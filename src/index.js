import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCk1c7S1-SRayX5x402qRt6Kmv1eXTkhJI",
  authDomain: "alpha-note-274ac.firebaseapp.com",
  projectId: "alpha-note-274ac",
  storageBucket: "alpha-note-274ac.appspot.com",
  messagingSenderId: "683733177535",
  appId: "1:683733177535:web:3a3312c51ab980863ce20a",
  measurementId: "G-TV6C3Q16HT"
});

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, async user => {
  if(user != null) {
    console.log('We have a logged in user!');
  }
});
