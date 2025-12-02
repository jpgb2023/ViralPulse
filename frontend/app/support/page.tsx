'use client'

import { SupportTickets } from '@/components/support/SupportTickets'
import { SupportForm } from '@/components/support/SupportForm'
import { CommonIssues } from '@/components/support/CommonIssues'
import { QuickGuide } from '@/components/support/QuickGuide'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState<'ticket' | 'guide' | 'issues'>('ticket')

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-50 to-dark-100 dark:from-dark-900 dark:to-dark-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Central de Suporte
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300">
            Estamos aqui para ajudar você
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-dark-200 dark:border-dark-700 p-1 bg-white dark:bg-dark-800">
            <button
              onClick={() => setActiveTab('ticket')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'ticket'
                  ? 'bg-primary-600 text-white'
                  : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700'
              }`}
            >
              Abrir Ticket
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'guide'
                  ? 'bg-primary-600 text-white'
                  : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700'
              }`}
            >
              Guia Rápido
            </button>
            <button
              onClick={() => setActiveTab('issues')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'issues'
                  ? 'bg-primary-600 text-white'
                  : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700'
              }`}
            >
              Problemas Comuns
            </button>
          </div>
        </div>

        {activeTab === 'ticket' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SupportForm />
            </div>
            <div>
              <SupportTickets />
            </div>
          </div>
        )}

        {activeTab === 'guide' && <QuickGuide />}
        {activeTab === 'issues' && <CommonIssues />}
      </div>
    </div>
  )
}

