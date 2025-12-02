import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  try {
    // Em produção, buscar templates do banco de dados
    const templates = [
      {
        id: 1,
        name: 'Template Moderno',
        category: 'posts',
        preview: '/templates/template1.jpg',
      },
      {
        id: 2,
        name: 'Template Stories',
        category: 'stories',
        preview: '/templates/template2.jpg',
      },
    ]
    
    res.json(templates)
  } catch (error) {
    console.error('Erro ao buscar templates:', error)
    res.status(500).json({ error: 'Erro ao buscar templates' })
  }
})

export { router as templatesRoutes }

