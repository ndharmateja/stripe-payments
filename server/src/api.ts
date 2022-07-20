import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

export const app = express()

// Middleware
app.use(cors({ origin: true }))
app.use(express.json())

app.post('/test', (request: Request, response: Response) => {
  const { amount } = request.body
  response.status(200).send({ withTax: amount * 5 })
})
