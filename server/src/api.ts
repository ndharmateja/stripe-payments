import express, { Request, Response, NextFunction } from 'express'
export const app = express()

app.get('/', (request: Request, response: Response) => {
  response.send('dharma')
})
