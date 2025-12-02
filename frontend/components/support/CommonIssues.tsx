'use client'

import { AlertCircle, ExternalLink } from 'lucide-react'

const commonIssues = [
  {
    title: 'A análise não está funcionando',
    solution: 'Verifique se o link do perfil está correto e se o perfil é público. Perfis privados não podem ser analisados.',
  },
  {
    title: 'Erro ao carregar Top Virais',
    solution: 'Tente atualizar a página. Se o problema persistir, verifique sua conexão com a internet.',
  },
  {
    title: 'Não consigo baixar templates',
    solution: 'Certifique-se de estar logado e ter um plano ativo. Templates são disponibilizados apenas para usuários premium.',
  },
]

export function CommonIssues() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
        Problemas Comuns
      </h2>
      {commonIssues.map((issue, index) => (
        <div
          key={index}
          className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6"
        >
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-dark-900 dark:text-white mb-2">
                {issue.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-300 text-sm">
                {issue.solution}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

