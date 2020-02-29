import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZbVEJw-2KHynGCsZalxnL1rG7zYZwA9U",
    authDomain: "maniac-smoothies.firebaseapp.com",
    databaseURL: "https://maniac-smoothies.firebaseio.com",
    projectId: "maniac-smoothies",
    storageBucket: "maniac-smoothies.appspot.com",
    messagingSenderId: "421839337768",
    appId: "1:421839337768:web:4ecab33ac252c80750381d",
    measurementId: "G-KTN3QN95MB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();