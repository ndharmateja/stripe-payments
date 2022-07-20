import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { createStripeCheckoutSession } from './checkout'
import morgan from 'morgan'

export const app = express()

// Middleware
app.use(cors({ origin: true }))
app.use(express.json())
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

function asyncWrapper(callback: Function) {
  return (request: Request, response: Response, next: NextFunction) => {
    callback(request, response, next).catch(next)
  }
}
