import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { createStripeCheckoutSession } from './checkout'
import morgan from 'morgan'
import { createStripePaymentIntent } from './payment'
import { handleStripeWebhook } from './webhooks'

export const app = express()

// Middleware
app.use(cors({ origin: true }))
app.use(
  express.json({
    verify: (request, response, buffer) => (request['rawBody'] = buffer),
  })
)
app.use(morgan('tiny'))

app.post('/test', (request: Request, response: Response) => {
  const { amount } = request.body
  response.status(200).send({ withTax: amount * 5 })
})

app.post(
  '/checkout',
  asyncWrapper(async (request: Request, response: Response) => {
    const {
      body: { line_items: lineItems },
    } = request
    const session = await createStripeCheckoutSession(lineItems)
    response.send(session)
  })
)

app.post(
  '/payments',
  asyncWrapper(async (request: Request, response: Response) => {
    const paymentIntent = await createStripePaymentIntent(request.body.amount)
    response.send(paymentIntent)
  })
)

app.post('/hooks', asyncWrapper(handleStripeWebhook))

function asyncWrapper(callback: Function) {
  return (request: Request, response: Response, next: NextFunction) => {
    callback(request, response, next).catch(next)
  }
}
