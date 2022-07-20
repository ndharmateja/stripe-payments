import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

export const stripePromise = loadStripe(
  'pk_test_51LNax4SHcwLCs0BdYXNhkcnJGnyunN3CpJfOdZOYNAfRN1zZelEgtxC7s0T2luyvL4xfuNGEaQ0s69biw3mcwL3800SM7mjjho'
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
)
