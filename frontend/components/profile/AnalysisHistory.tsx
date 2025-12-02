'use client'

import { Clock, ExternalLink } from 'lucide-react'

const mockHistory = [
  {
    id: '1',
    username: 'usuario1',
    score: 8.5,
    date: '2024-12-01',
  },
  {
    id: '2',
    username: 'usuario2',
    score: 7.2,
    date: '2024-11-28',
  },
]

export function AnalysisHistory() {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6">
      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
        Histórico de Análises
      </h3>
      <div className="space-y-3">
        {mockHistory.length === 0 ? (
          <p className="text-dark-600 dark:text-dark-300 text-center py-8">
            Você ainda não realizou nenhuma análise.
          </p>
        ) : (
          mockHistory.map((analysis) => (
            <div
              key={analysis.id}
              className="flex items-center justify-between p-4 bg-dark-50 dark:bg-dark-700/50 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">
                    {analysis.score.toFixed(1)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-dark-900 dark:text-white">
                    @{analysis.username}
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-dark-500 dark:text-dark-400">
                    <Clock className="w-4 h-4" />
                    <span>{new Date(analysis.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-dark-200 dark:hover:bg-dark-600 rounded-lg transition-colors">
                <ExternalLink className="w-5 h-5 text-dark-600 dark:text-dark-300" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

