import { stripe } from '.'

export const createStripePaymentIntent = async (amount: number) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  })

  return paymentIntent
}
