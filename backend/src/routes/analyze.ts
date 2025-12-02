import { Router } from 'express'
import { analyzeProfile } from '../services/analyzeService'
import { z } from 'zod'

const router = Router()

const analyzeSchema = z.object({
  instagramUrl: z.string().url().refine(
    (url) => url.includes('instagram.com'),
    { message: 'URL deve ser do Instagram' }
  ),
})

router.post('/', async (req, res) => {
  try {
    const { instagramUrl } = analyzeSchema.parse(req.body)
    
    // Extrair username da URL
    const username = extractUsername(instagramUrl)
    
    // Analisar perfil
    const analysis = await analyzeProfile(username)
    
    res.json(analysis)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors })
    }
    console.error('Erro ao analisar perfil:', error)
    res.status(500).json({ error: 'Erro ao analisar perfil' })
  }
})

function extractUsername(url: string): string {
  const match = url.match(/instagram\.com\/([^/?]+)/)
  return match ? match[1] : ''
}

export { router as analyzeRoutes }

