import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCHZuiDdLg3CLhHo4UduQhOEvGQad-vMjY",
  authDomain: "guild-ed-chat-server.firebaseapp.com",
  databaseURL: "https://guild-ed-chat-server.firebaseio.com",
  projectId: "guild-ed-chat-server",
  storageBucket: "guild-ed-chat-server.appspot.com",
  messagingSenderId: "925804700025",
  appId: "1:925804700025:web:e864f03f230fa44d7c4fa8",
  measurementId: "G-HBTBCLEQQL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
