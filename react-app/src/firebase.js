import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD9RZYV6b5IDqJfHHVSOVjywqcB8pNeb3A',
  authDomain: 'fireship-stripe-119fe.firebaseapp.com',
  projectId: 'fireship-stripe-119fe',
  storageBucket: 'fireship-stripe-119fe.appspot.com',
  messagingSenderId: '246585925183',
  appId: '1:246585925183:web:0b9959adcae084a801228a',
  measurementId: 'G-9TXDQ7J5QR',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
