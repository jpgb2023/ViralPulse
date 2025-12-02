import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { analyzeRoutes } from './routes/analyze'
import { topViraisRoutes } from './routes/top-virais'
import { templatesRoutes } from './routes/templates'
import { authRoutes } from './routes/auth'
import { supportRoutes } from './routes/support'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middlewares
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/analyze', analyzeRoutes)
app.use('/api/top-virais', topViraisRoutes)
app.use('/api/templates', templatesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/support', supportRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Algo deu errado!' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

