import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyAyYt_OFJTIsVQor1FYkS9Shh2HKKQZPwk",
//     authDomain: "clone-55d67.firebaseapp.com",
//     projectId: "clone-55d67",
//     storageBucket: "clone-55d67.appspot.com",
//     messagingSenderId: "1035680060319",
//     appId: "1:1035680060319:web:39e4bdb0d455faae50a3aa"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyCwgbvVg8msOuRqDY4oVLEIBveQFFEairk",
  authDomain: "clone-react-d77df.firebaseapp.com",
  projectId: "clone-react-d77df",
  storageBucket: "clone-react-d77df.appspot.com",
  messagingSenderId: "32626507059",
  appId: "1:32626507059:web:e7f329e79fbb4bd94e5246",
  measurementId: "G-M9P3LVWX9V"
};

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()
