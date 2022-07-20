import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

export const app = express()

// Middleware
app.use(cors({ origin: true }))
app.use(express.json())
})
