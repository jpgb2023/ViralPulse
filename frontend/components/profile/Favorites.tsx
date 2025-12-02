'use client'

import { Heart } from 'lucide-react'

const mockFavorites = [
  { id: '1', type: 'template', name: 'Template Moderno' },
  { id: '2', type: 'viral', name: 'Reel Viral - Fitness' },
]

export function Favorites() {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Heart className="w-5 h-5 text-red-500" />
        <h3 className="text-xl font-bold text-dark-900 dark:text-white">
          Favoritos
        </h3>
      </div>
      <div className="space-y-3">
        {mockFavorites.length === 0 ? (
          <p className="text-dark-600 dark:text-dark-300 text-center py-8">
            Você ainda não tem favoritos.
          </p>
        ) : (
          mockFavorites.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-dark-50 dark:bg-dark-700/50 rounded-lg"
            >
              <span className="text-dark-900 dark:text-white">{item.name}</span>
              <span className="text-xs text-dark-500 dark:text-dark-400 capitalize">
                {item.type}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

