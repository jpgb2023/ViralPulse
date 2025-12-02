'use client'

import { CreditCard, Check } from 'lucide-react'

export function SubscriptionSettings() {
  const currentPlan = {
    name: 'Profissional',
    price: 'R$ 79/mês',
    features: [
      'Análises ilimitadas',
      'Relatórios completos',
      'Todos os templates',
      'Suporte prioritário',
    ],
  }

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <CreditCard className="w-5 h-5 text-primary-600" />
        <h2 className="text-2xl font-bold text-dark-900 dark:text-white">
          Assinatura
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-dark-500 dark:text-dark-400 mb-1">Plano Atual</p>
          <p className="text-2xl font-bold text-dark-900 dark:text-white">
            {currentPlan.name}
          </p>
          <p className="text-dark-600 dark:text-dark-300">{currentPlan.price}</p>
        </div>

        <div className="border-t border-dark-200 dark:border-dark-700 pt-4">
          <p className="font-medium text-dark-900 dark:text-white mb-3">
            Benefícios do seu plano:
          </p>
          <ul className="space-y-2">
            {currentPlan.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-primary-600" />
                <span className="text-dark-600 dark:text-dark-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-4 pt-4">
          <button className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Alterar Plano
          </button>
          <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Cancelar Assinatura
          </button>
        </div>
      </div>
    </div>
  )
}

