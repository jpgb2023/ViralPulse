'use client'

import { Clock, CheckCircle, XCircle } from 'lucide-react'

interface Ticket {
  id: string
  subject: string
  status: 'open' | 'resolved' | 'closed'
  createdAt: string
}

const mockTickets: Ticket[] = [
  {
    id: '1',
    subject: 'Problema ao analisar perfil',
    status: 'open',
    createdAt: '2024-12-01',
  },
  {
    id: '2',
    subject: 'Dúvida sobre planos',
    status: 'resolved',
    createdAt: '2024-11-28',
  },
]

export function SupportTickets() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <Clock className="w-4 h-4 text-yellow-600" />
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'closed':
        return <XCircle className="w-4 h-4 text-gray-600" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open':
        return 'Aberto'
      case 'resolved':
        return 'Resolvido'
      case 'closed':
        return 'Fechado'
      default:
        return status
    }
  }

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6">
      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
        Meus Tickets
      </h3>
      <div className="space-y-3">
        {mockTickets.length === 0 ? (
          <p className="text-dark-600 dark:text-dark-300 text-sm">
            Você ainda não possui tickets abertos.
          </p>
        ) : (
          mockTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex items-center justify-between p-3 bg-dark-50 dark:bg-dark-700/50 rounded-lg"
            >
              <div className="flex-1">
                <p className="font-medium text-dark-900 dark:text-white text-sm">
                  {ticket.subject}
                </p>
                <p className="text-xs text-dark-500 dark:text-dark-400">
                  {new Date(ticket.createdAt).toLocaleDateString('pt-BR')}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(ticket.status)}
                <span className="text-xs text-dark-600 dark:text-dark-300">
                  {getStatusText(ticket.status)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

