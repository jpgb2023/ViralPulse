'use client'

import { Eye, Hash, TrendingUp } from 'lucide-react'

interface Viral {
  id: string
  title: string
  views: number
  description: string
  hashtags: string[]
  format: string
  insight: string
  thumbnail?: string
}

interface TopViralListProps {
  virais: Viral[]
}

export function TopViralList({ virais }: TopViralListProps) {
  if (virais.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-dark-600 dark:text-dark-300">
          Nenhum viral encontrado nesta categoria.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {virais.map((viral, index) => (
        <div
          key={viral.id}
          className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative">
            {viral.thumbnail ? (
              <img
                src={viral.thumbnail}
                alt={viral.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">#{index + 1}</span>
              </div>
            )}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{(viral.views / 1000).toFixed(0)}K</span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase">
                {viral.format}
              </span>
              <div className="flex items-center space-x-1 text-yellow-500">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">Viral</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
              {viral.title}
            </h3>

            <p className="text-sm text-dark-600 dark:text-dark-300 mb-4 line-clamp-2">
              {viral.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {viral.hashtags.slice(0, 3).map((hashtag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center space-x-1 text-xs text-primary-600 dark:text-primary-400"
                >
                  <Hash className="w-3 h-3" />
                  <span>{hashtag}</span>
                </span>
              ))}
            </div>

            <div className="bg-dark-50 dark:bg-dark-700/50 rounded-lg p-3">
              <p className="text-xs font-semibold text-dark-700 dark:text-dark-300 mb-1">
                Por que viralizou:
              </p>
              <p className="text-sm text-dark-600 dark:text-dark-400">{viral.insight}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

