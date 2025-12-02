'use client'

import { TemplateGrid } from '@/components/templates/TemplateGrid'
import { TemplateCategory } from '@/components/templates/TemplateCategory'
import { motion } from 'framer-motion'

const templateTypes = [
  { id: 'posts', name: 'Posts', icon: '📸' },
  { id: 'stories', name: 'Stories', icon: '📱' },
  { id: 'reels', name: 'Reels', icon: '🎬' },
  { id: 'covers', name: 'Capas', icon: '🎨' },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-50 to-dark-100 dark:from-dark-900 dark:to-dark-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Templates Editáveis
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Biblioteca completa de modelos profissionais para seus conteúdos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {templateTypes.map((type) => (
            <TemplateCategory key={type.id} type={type} />
          ))}
        </div>

        <TemplateGrid />
      </div>
    </div>
  )
}

