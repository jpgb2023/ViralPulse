'use client'

import { CheckCircle } from 'lucide-react'

const guideSteps = [
  {
    title: '1. Criar uma conta',
    description: 'Registre-se gratuitamente para começar a usar o ViralPulse.',
  },
  {
    title: '2. Escolher um plano',
    description: 'Selecione o plano que melhor se adequa às suas necessidades.',
  },
  {
    title: '3. Analisar seu primeiro perfil',
    description: 'Cole o link do perfil do Instagram e aguarde a análise completa.',
  },
  {
    title: '4. Explorar insights',
    description: 'Revise o relatório detalhado com sugestões e oportunidades.',
  },
  {
    title: '5. Aplicar melhorias',
    description: 'Use as recomendações para otimizar seu perfil e conteúdo.',
  },
]

export function QuickGuide() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
        Guia Rápido para Iniciantes
      </h2>
      {guideSteps.map((step, index) => (
        <div
          key={index}
          className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-dark-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

