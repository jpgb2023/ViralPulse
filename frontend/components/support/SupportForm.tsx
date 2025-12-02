'use client'

import { useState } from 'react'
import { Send, Paperclip } from 'lucide-react'

export function SupportForm() {
  const [formData, setFormData] = useState({
    subject: '',
    category: 'technical',
    message: '',
    attachments: [] as File[],
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar envio do ticket
    console.log('Enviando ticket:', formData)
  }

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6">
      <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
        Abrir Novo Ticket
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Assunto
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-2 bg-white dark:bg-dark-700 border border-dark-200 dark:border-dark-600 rounded-lg text-dark-900 dark:text-white focus:outline-none focus:border-primary-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Categoria
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2 bg-white dark:bg-dark-700 border border-dark-200 dark:border-dark-600 rounded-lg text-dark-900 dark:text-white focus:outline-none focus:border-primary-600"
          >
            <option value="technical">Problema Técnico</option>
            <option value="billing">Cobrança</option>
            <option value="feature">Sugestão de Funcionalidade</option>
            <option value="other">Outro</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Mensagem
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={6}
            className="w-full px-4 py-2 bg-white dark:bg-dark-700 border border-dark-200 dark:border-dark-600 rounded-lg text-dark-900 dark:text-white focus:outline-none focus:border-primary-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
            Anexos (opcional)
          </label>
          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-2 px-4 py-2 border border-dark-200 dark:border-dark-600 rounded-lg cursor-pointer hover:bg-dark-50 dark:hover:bg-dark-700">
              <Paperclip className="w-4 h-4" />
              <span className="text-sm">Anexar arquivo</span>
              <input type="file" className="hidden" multiple />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Send className="w-5 h-5" />
          <span>Enviar Ticket</span>
        </button>
      </form>
    </div>
  )
}

