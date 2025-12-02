'use client'

import { Shield, Download, Trash2 } from 'lucide-react'

export function PrivacySettings() {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Shield className="w-5 h-5 text-primary-600" />
        <h2 className="text-2xl font-bold text-dark-900 dark:text-white">
          Privacidade e Dados
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-dark-50 dark:bg-dark-700/50 rounded-lg">
          <div>
            <p className="font-medium text-dark-900 dark:text-white">
              Exportar meus dados
            </p>
            <p className="text-sm text-dark-600 dark:text-dark-300">
              Baixe uma cópia de todos os seus dados
            </p>
          </div>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Exportar</span>
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <div>
            <p className="font-medium text-red-900 dark:text-red-100">
              Deletar minha conta
            </p>
            <p className="text-sm text-red-700 dark:text-red-300">
              Esta ação não pode ser desfeita
            </p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2">
            <Trash2 className="w-4 h-4" />
            <span>Deletar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

