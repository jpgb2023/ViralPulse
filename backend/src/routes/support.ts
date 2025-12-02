import { Router } from 'express'
import { z } from 'zod'

const router = Router()

const ticketSchema = z.object({
  subject: z.string().min(1),
  category: z.enum(['technical', 'billing', 'feature', 'other']),
  message: z.string().min(10),
})

router.post('/tickets', async (req, res) => {
  try {
    const ticketData = ticketSchema.parse(req.body)
    
    // TODO: Salvar ticket no banco de dados
    const ticket = {
      id: Date.now().toString(),
      ...ticketData,
      status: 'open',
      createdAt: new Date().toISOString(),
    }
    
    res.json(ticket)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors })
    }
    console.error('Erro ao criar ticket:', error)
    res.status(500).json({ error: 'Erro ao criar ticket' })
  }
})

router.get('/tickets', async (req, res) => {
  // TODO: Buscar tickets do banco de dados
  res.json([])
})

export { router as supportRoutes }

