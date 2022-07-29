import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { FirebaseAppProvider } from 'reactfire'

export const stripePromise = loadStripe(
  'pk_test_51LNax4SHcwLCs0BdYXNhkcnJGnyunN3CpJfOdZOYNAfRN1zZelEgtxC7s0T2luyvL4xfuNGEaQ0s69biw3mcwL3800SM7mjjho'
)

const firebaseConfig = {
  apiKey: 'AIzaSyD9RZYV6b5IDqJfHHVSOVjywqcB8pNeb3A',
  authDomain: 'fireship-stripe-119fe.firebaseapp.com',
  projectId: 'fireship-stripe-119fe',
  storageBucket: 'fireship-stripe-119fe.appspot.com',
  messagingSenderId: '246585925183',
  appId: '1:246585925183:web:0b9959adcae084a801228a',
  measurementId: 'G-9TXDQ7J5QR',
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>
)
