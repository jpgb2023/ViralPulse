'use client'

import { useState } from 'react'
import { Instagram, Search } from 'lucide-react'

interface AnalyzeFormProps {
  onSubmit: (url: string) => void
  disabled?: boolean
}

export function AnalyzeForm({ onSubmit, disabled }: AnalyzeFormProps) {
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url.trim()) {
      onSubmit(url.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Instagram className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.instagram.com/usuario/"
            disabled={disabled}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-dark-800 border-2 border-dark-200 dark:border-dark-700 rounded-lg text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:border-primary-600 dark:focus:border-primary-500 transition-colors disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={disabled || !url.trim()}
          className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
        >
          <Search className="w-5 h-5" />
          <span>Analisar</span>
        </button>
      </div>
    </form>
  )
}

