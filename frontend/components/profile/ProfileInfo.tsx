'use client'

import { User, Mail, Calendar } from 'lucide-react'

export function ProfileInfo() {
  const user = {
    name: 'Usuário',
    email: 'usuario@example.com',
    memberSince: '2024-01-15',
    avatar: null,
  }

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6">
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-dark-900 dark:text-white">
          {user.name}
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-dark-400" />
          <span className="text-dark-600 dark:text-dark-300">{user.email}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-dark-400" />
          <span className="text-dark-600 dark:text-dark-300">
            Membro desde {new Date(user.memberSince).toLocaleDateString('pt-BR')}
          </span>
        </div>
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
        Editar Perfil
      </button>
    </div>
  )
}

