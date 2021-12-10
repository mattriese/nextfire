import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDDoHPcSBUcWy4rQO9W37d6y1jB-azyhQk',
  authDomain: 'nextfire-d17c2.firebaseapp.com',
  projectId: 'nextfire-d17c2',
  storageBucket: 'nextfire-d17c2.appspot.com',
  messagingSenderId: '533419093502',
  appId: '1:533419093502:web:39dfbabb57faba5792a4af',
  measurementId: 'G-T8T1TE9YHH',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
