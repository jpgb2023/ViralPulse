import { Router } from 'express'
import { getTopVirais } from '../services/topViraisService'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const category = req.query.category as string | undefined
    const virais = await getTopVirais(category)
    res.json(virais)
  } catch (error) {
    console.error('Erro ao buscar top virais:', error)
    res.status(500).json({ error: 'Erro ao buscar top virais' })
  }
})

export { router as topViraisRoutes }

