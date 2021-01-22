import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBYqaQ9P0VosyTo4AgY_uJRpqow3kk4aMw",
  authDomain: "awaken-95ee7.firebaseapp.com",
  databaseURL: "https://awaken-95ee7.firebaseio.com",
  projectId: "awaken-95ee7",
  storageBucket: "awaken-95ee7.appspot.com",
  messagingSenderId: "919305073143",
  appId: "1:919305073143:web:04ebcc39361eb42282bef2",
  measurementId: "G-NQLVH7VWVK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
