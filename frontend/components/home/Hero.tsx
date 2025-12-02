'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Powered by IA
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-dark-900 dark:text-white mb-6">
            Análise Profissional de
            <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Perfis Instagram
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-3xl mx-auto">
            Descubra insights poderosos sobre qualquer perfil do Instagram usando
            Inteligência Artificial. Análise completa, sugestões práticas e estratégias de crescimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/analyze"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Começar Análise
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/top-virais"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-dark-800 text-dark-900 dark:text-white border-2 border-dark-200 dark:border-dark-700 rounded-lg font-semibold hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
            >
              Ver Top Virais
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

