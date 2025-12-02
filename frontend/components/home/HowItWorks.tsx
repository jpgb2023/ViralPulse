'use client'

import { Link2, Brain, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Cole o Link',
    description: 'Copie e cole o link do perfil do Instagram que deseja analisar',
  },
  {
    number: '02',
    icon: Brain,
    title: 'IA Analisa',
    description: 'Nossa IA processa feed, reels, stories, bio e gera insights profundos',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Receba o Relatório',
    description: 'Obtenha análise completa com nota, sugestões e estratégias de crescimento',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-50 to-dark-100 dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Três passos simples para análises profissionais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-dark-800 p-8 rounded-xl border border-dark-200 dark:border-dark-700 shadow-lg">
                <div className="text-6xl font-bold text-primary-100 dark:text-primary-900/30 mb-4">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-300 dark:bg-primary-700 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/analyze"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            Começar Agora
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

