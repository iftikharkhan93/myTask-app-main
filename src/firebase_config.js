import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCbB8hgj0D5-5KzDgEYkYPH3uDtq7cKwFs",
  authDomain: "mytaskapp-d4ff6.firebaseapp.com",
  databaseURL: "https://mytaskapp-d4ff6-default-rtdb.firebaseio.com",
  projectId: "mytaskapp-d4ff6",
  storageBucket: "mytaskapp-d4ff6.appspot.com",
  messagingSenderId: "1037156365276",
  appId: "1:1037156365276:web:85bc0c9b6c5be8589f5519",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
