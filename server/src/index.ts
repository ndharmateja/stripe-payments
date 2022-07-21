// Environment Variables
import { config } from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  config()
}

// Initialize stripe
import Stripe from 'stripe'
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: '2020-08-27',
})

// Start API with Express
import { app } from './api'
import { clog } from './utils/utils'
const port = process.env.PORT || 3003
app.listen(port, () => clog(`API available on http://localhost:${port}`))
