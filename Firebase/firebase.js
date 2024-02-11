import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database';
import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpX72RcYpY3aU6UQpkIZ6eE8aC0VQPoTI",
  authDomain: "qwertyuiop-5efde.firebaseapp.com",
  projectId: "qwertyuiop-5efde",
  databaseURL:"https://qwertyuiop-5efde-default-rtdb.firebaseio.com/",
  storageBucket: "qwertyuiop-5efde.appspot.com",
  messagingSenderId: "439121431264",
  appId: "1:439121431264:web:f24bb5b5b8f69f36c25e85"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

if (!firebase.apps. length) {
  firebase.initializeApp(firebaseConfig)
  }
export { firebase };
const database = getDatabase(FIREBASE_APP);
export {database}

const db = firebase.firestore();
export { db };