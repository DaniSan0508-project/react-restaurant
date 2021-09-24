
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjgM8sdwYo8IUHV1v4oSIrf2tWKjZIm08",
  authDomain: "restaurante-c90d1.firebaseapp.com",
  projectId: "restaurante-c90d1",
  storageBucket: "restaurante-c90d1.appspot.com",
  messagingSenderId: "348185955507",
  appId: "1:348185955507:web:77ca78ee70244af14174c6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;