import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    ...
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();