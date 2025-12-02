'use client'

import { Search } from 'lucide-react'

interface FAQSearchProps {
  onSearch: (query: string) => void
}

export function FAQSearch({ onSearch }: FAQSearchProps) {
  return (
    <div className="mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
        <input
          type="text"
          placeholder="Buscar nas perguntas frequentes..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white dark:bg-dark-800 border-2 border-dark-200 dark:border-dark-700 rounded-lg text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:border-primary-600 dark:focus:border-primary-500 transition-colors"
        />
      </div>
    </div>
  )
}

