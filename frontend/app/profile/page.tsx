'use client'

import { ProfileInfo } from '@/components/profile/ProfileInfo'
import { AnalysisHistory } from '@/components/profile/AnalysisHistory'
import { Favorites } from '@/components/profile/Favorites'
import { motion } from 'framer-motion'

export default function ProfilePage() {
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
            Meu Perfil
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ProfileInfo />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <AnalysisHistory />
            <Favorites />
          </div>
        </div>
      </div>
    </div>
  )
}

