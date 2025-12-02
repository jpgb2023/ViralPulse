'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Como funciona a análise de perfil?',
    answer: 'Nossa IA analisa o feed, reels, stories, destaques e bio do perfil do Instagram, gerando insights sobre estética, linguagem, público-alvo e oportunidades de crescimento.',
    category: 'Geral',
  },
  {
    id: '2',
    question: 'Quanto tempo leva para analisar um perfil?',
    answer: 'A análise geralmente leva entre 2 a 5 minutos, dependendo do tamanho do perfil e quantidade de conteúdo.',
    category: 'Geral',
  },
  {
    id: '3',
    question: 'Preciso ter acesso ao perfil para analisá-lo?',
    answer: 'Não, você só precisa do link público do perfil. Nossa IA acessa apenas informações públicas disponíveis.',
    category: 'Geral',
  },
  {
    id: '4',
    question: 'Como são atualizados os Top Virais?',
    answer: 'O ranking é atualizado automaticamente a cada 24 horas, analisando os conteúdos mais engajados do momento.',
    category: 'Top Virais',
  },
  {
    id: '5',
    question: 'Posso usar os templates comercialmente?',
    answer: 'Sim, todos os templates podem ser usados para fins comerciais. Eles são editáveis e personalizáveis.',
    category: 'Templates',
  },
]

interface FAQListProps {
  searchQuery: string
}

export function FAQList({ searchQuery }: FAQListProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4">
      {filteredFAQs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-dark-600 dark:text-dark-300">
            Nenhuma pergunta encontrada com essa busca.
          </p>
        </div>
      ) : (
        filteredFAQs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 overflow-hidden"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-dark-50 dark:hover:bg-dark-700/50 transition-colors"
            >
              <span className="font-semibold text-dark-900 dark:text-white pr-4">
                {faq.question}
              </span>
              {openItems.has(faq.id) ? (
                <ChevronUp className="w-5 h-5 text-dark-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-dark-400 flex-shrink-0" />
              )}
            </button>
            {openItems.has(faq.id) && (
              <div className="px-6 py-4 border-t border-dark-200 dark:border-dark-700">
                <p className="text-dark-600 dark:text-dark-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  )
}

