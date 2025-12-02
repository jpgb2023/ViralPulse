'use client'

import { SettingsForm } from '@/components/settings/SettingsForm'
import { SubscriptionSettings } from '@/components/settings/SubscriptionSettings'
import { PrivacySettings } from '@/components/settings/PrivacySettings'
import { motion } from 'framer-motion'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-50 to-dark-100 dark:from-dark-900 dark:to-dark-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Configurações
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300">
            Personalize sua experiência
          </p>
        </motion.div>

        <div className="space-y-8">
          <SettingsForm />
          <SubscriptionSettings />
          <PrivacySettings />
        </div>
      </div>
    </div>
  )
}

