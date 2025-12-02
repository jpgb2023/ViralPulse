'use client'

import { Brain, TrendingUp, Palette, FileText, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Brain,
    title: 'Análise com IA',
    description: 'Inteligência artificial avançada analisa feed, reels, stories e bio para insights profundos',
  },
  {
    icon: TrendingUp,
    title: 'Top Virais',
    description: 'Ranking atualizado dos conteúdos mais virais por nicho com insights detalhados',
  },
  {
    icon: Palette,
    title: 'Templates Profissionais',
    description: 'Biblioteca completa de templates editáveis para posts, stories e reels',
  },
  {
    icon: FileText,
    title: 'Relatórios Detalhados',
    description: 'Relatórios completos com nota, forças, fraquezas e sugestões práticas',
  },
  {
    icon: Shield,
    title: 'Seguro e Confiável',
    description: 'Seus dados protegidos com criptografia de ponta e conformidade com LGPD',
  },
  {
    icon: Zap,
    title: 'Análise Rápida',
    description: 'Resultados em minutos com processamento otimizado e análise em tempo real',
  },
]

export function Features() {
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
            Funcionalidades Poderosas
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Tudo que você precisa para crescer no Instagram
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-dark-50 dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

