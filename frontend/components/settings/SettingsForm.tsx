'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Globe, Bell, Save } from 'lucide-react'

export function SettingsForm() {
  const { theme, setTheme } = useTheme()
  const [language, setLanguage] = useState('pt-BR')
  const [notifications, setNotifications] = useState(true)

  const handleSave = () => {
    // Implementar salvamento
    console.log('Salvando configurações...')
  }

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6">
      <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
        Configurações Gerais
      </h2>

      <div className="space-y-6">
        <div>
          <label className="flex items-center space-x-2 mb-3">
            <Globe className="w-5 h-5 text-dark-600 dark:text-dark-300" />
            <span className="font-medium text-dark-900 dark:text-white">Idioma</span>
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-4 py-2 bg-white dark:bg-dark-700 border border-dark-200 dark:border-dark-600 rounded-lg text-dark-900 dark:text-white focus:outline-none focus:border-primary-600"
          >
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en-US">English (US)</option>
            <option value="es-ES">Español</option>
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-2 mb-3">
            <span className="font-medium text-dark-900 dark:text-white">Tema</span>
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setTheme('light')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                theme === 'light'
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300'
              }`}
            >
              Claro
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300'
              }`}
            >
              Escuro
            </button>
            <button
              onClick={() => setTheme('system')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                theme === 'system'
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300'
              }`}
            >
              Sistema
            </button>
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 mb-3">
            <Bell className="w-5 h-5 text-dark-600 dark:text-dark-300" />
            <span className="font-medium text-dark-900 dark:text-white">Notificações</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
            />
            <span className="text-dark-600 dark:text-dark-300">
              Receber notificações por email
            </span>
          </label>
        </div>

        <button
          onClick={handleSave}
          className="w-full sm:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Save className="w-5 h-5" />
          <span>Salvar Configurações</span>
        </button>
      </div>
    </div>
  )
}

