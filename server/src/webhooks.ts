import { stripe } from '.'
import Stripe from 'stripe'
import { Request, Response } from 'express'

const webhookHandlers = {
  'payment_intent.succeeded': async (data: Stripe.PaymentIntent) => {
    // business logic added here
    // to do steps after a payment is succeeded
    // eg: send an email confirmation, updating Db etc
  },
  'payment_intent.failed': async (data: Stripe.PaymentIntent) => {
    // business logic added here for failed payments
  },
}

export const handleStripeWebhook = async (
  request: Request,
  response: Response
) => {
  const sig = request.headers['stripe-signature']
  const event = stripe.webhooks.constructEvent(
    request['rawBody'],
    sig,
    process.env.STRIPE_WEBHOOK_SECRET
  )

  try {
    await webhookHandlers[event.type]?.(event.data.object)
    response.send({ received: true })
  } catch (err) {
    console.error(err)
    response.status(400).send(`Webhook error: ${getErrorMessage(err)}`)
  }
}

function getErrorMessage(error) {
  let message
  if (error instanceof Error) message = error.message
  else message = String(error)
}
