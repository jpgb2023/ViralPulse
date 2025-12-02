import { Router } from 'express'

const router = Router()

router.post('/login', async (req, res) => {
  // TODO: Implementar autenticação real
  res.json({ token: 'mock-token', user: { id: 1, email: 'user@example.com' } })
})

router.post('/register', async (req, res) => {
  // TODO: Implementar registro real
  res.json({ token: 'mock-token', user: { id: 1, email: 'user@example.com' } })
})

export { router as authRoutes }

