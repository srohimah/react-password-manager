import {initializeApp} from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyDHJS9FZcSbQYPikMOezMDPVM1K_Ah5jgA",
  authDomain: "password-manager-ef764.firebaseapp.com",
  databaseURL: "https://password-manager-ef764.firebaseio.com",
  projectId: "password-manager-ef764",
  storageBucket: "password-manager-ef764.appspot.com",
  messagingSenderId: "236497467160"
});
export const db = app.database()
export const Password = db.ref('Password')
export const User = db.ref('User')