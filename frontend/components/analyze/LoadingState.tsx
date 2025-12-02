'use client'

import { Loader2 } from 'lucide-react'

export function LoadingState() {
  return (
    <div className="mt-8 p-12 bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 text-center">
      <Loader2 className="w-12 h-12 text-primary-600 animate-spin mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
        Analisando perfil...
      </h3>
      <p className="text-dark-600 dark:text-dark-300">
        Nossa IA está processando feed, reels, stories e bio. Isso pode levar alguns minutos.
      </p>
    </div>
  )
}

