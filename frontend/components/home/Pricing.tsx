'use client'

import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Básico',
    price: 'R$ 29',
    period: '/mês',
    description: 'Perfeito para começar',
    features: [
      '5 análises por mês',
      'Relatórios básicos',
      'Acesso ao Top Virais',
      'Templates limitados',
      'Suporte por email',
    ],
    popular: false,
  },
  {
    name: 'Profissional',
    price: 'R$ 79',
    period: '/mês',
    description: 'Para profissionais de marketing',
    features: [
      'Análises ilimitadas',
      'Relatórios completos',
      'Acesso ao Top Virais',
      'Todos os templates',
      'Suporte prioritário',
      'API access',
      'Análises em lote',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Para equipes e agências',
    features: [
      'Tudo do Profissional',
      'Múltiplos usuários',
      'White-label',
      'Suporte dedicado',
      'Custom integrations',
      'SLA garantido',
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Planos e Preços
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white dark:bg-dark-800 rounded-xl border-2 p-8 ${
                plan.popular
                  ? 'border-primary-600 shadow-xl scale-105'
                  : 'border-dark-200 dark:border-dark-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-dark-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-dark-600 dark:text-dark-300 ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-dark-600 dark:text-dark-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-dark-100 dark:bg-dark-700 text-dark-900 dark:text-white hover:bg-dark-200 dark:hover:bg-dark-600'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Assinar Agora'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

