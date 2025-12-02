'use client'

import { useState, useEffect } from 'react'
import { TopViralList } from '@/components/top-virais/TopViralList'
import { CategoryFilter } from '@/components/top-virais/CategoryFilter'
import { motion } from 'framer-motion'

const categories = [
  'Todos',
  'Entretenimento',
  'Educação',
  'Negócios',
  'Fitness',
  'Beleza',
  'Comida',
  'Viagem',
  'Tecnologia',
  'Moda',
]

export default function TopViraisPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [virais, setVirais] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchVirais()
  }, [selectedCategory])

  const fetchVirais = async () => {
    setIsLoading(true)
    try {
      const category = selectedCategory === 'Todos' ? '' : selectedCategory
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/top-virais?category=${category}`
      )
      const data = await response.json()
      setVirais(data)
    } catch (error) {
      console.error('Erro ao buscar virais:', error)
    } finally {
      setIsLoading(false)
    }
  }

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
            Top Virais
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Ranking dos reels mais virais do momento, organizados por nicho
          </p>
        </motion.div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <TopViralList virais={virais} />
        )}
      </div>
    </div>
  )
}

