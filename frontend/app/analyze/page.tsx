'use client'

import { useState } from 'react'
import { AnalyzeForm } from '@/components/analyze/AnalyzeForm'
import { AnalysisResult } from '@/components/analyze/AnalysisResult'
import { LoadingState } from '@/components/analyze/LoadingState'
import { motion } from 'framer-motion'

export default function AnalyzePage() {
  const [analysisData, setAnalysisData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async (instagramUrl: string) => {
    setIsLoading(true)
    setError(null)
    setAnalysisData(null)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ instagramUrl }),
      })

      if (!response.ok) {
        throw new Error('Erro ao analisar perfil')
      }

      const data = await response.json()
      setAnalysisData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
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
            Análise Inteligente de Perfil
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Cole o link do perfil do Instagram e receba uma análise completa com IA
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnalyzeForm onSubmit={handleAnalyze} disabled={isLoading} />

          {isLoading && <LoadingState />}

          {error && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}

          {analysisData && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <AnalysisResult data={analysisData} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

