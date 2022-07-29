import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { fetchFromApi } from '../helpers'

const Payments = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [amount, setAmount] = useState(0)
  const [paymentIntent, setPaymentIntent] = useState()

  const createPaymentIntent = async (e) => {
    const validAmount = Math.min(Math.max(amount, 50), 9999999)
    setAmount(validAmount)

    const pi = await fetchFromApi('payments', { body: { amount: validAmount } })
    setPaymentIntent(pi)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const cardElement = elements.getElement(CardElement)

    const { client_secret: clientSecret } = paymentIntent
    const { paymentIntent: updatedPaymentIntent, error } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      })

    if (error) {
      console.error(error)
      error.payment_intent && setPaymentIntent(error.payment_intent)
    } else {
      setPaymentIntent(updatedPaymentIntent)
    }
  }

  return (
    <>
      {paymentIntent && (
        <textarea
          readOnly
          cols={100}
          rows={10}
          value={JSON.stringify(paymentIntent.status, null, 2)}
        />
      )}
      <div>
        <input
          type='number'
          value={amount}
          onChange={({ target: { value } }) => setAmount(value)}
          disabled={paymentIntent}
        />
        <button
          disabled={amount <= 0}
          onClick={createPaymentIntent}
          hidden={paymentIntent}
        >
          Ready to pay ${(amount / 100).toFixed(2)}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type='submit'>Pay</button>
      </form>
    </>
  )
}

export default Payments
