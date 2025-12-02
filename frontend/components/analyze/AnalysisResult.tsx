'use client'

import { Star, TrendingUp, TrendingDown, Lightbulb, Target, AlertCircle } from 'lucide-react'

interface AnalysisResultProps {
  data: {
    score: number
    profile: {
      username: string
      bio: string
      followers: number
      following: number
      posts: number
    }
    strengths: string[]
    weaknesses: string[]
    opportunities: string[]
    suggestions: string[]
    audience: {
      demographics: string
      interests: string[]
    }
    viralContentIdeas: string[]
  }
}

export function AnalysisResult({ data }: AnalysisResultProps) {
  const scoreColor = data.score >= 7 ? 'text-green-600' : data.score >= 4 ? 'text-yellow-600' : 'text-red-600'

  return (
    <div className="space-y-6">
      {/* Score Card */}
      <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-white">
            Nota Final
          </h2>
          <div className={`text-5xl font-bold ${scoreColor}`}>
            {data.score.toFixed(1)}/10
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {[...Array(10)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < Math.round(data.score)
                  ? 'fill-primary-600 text-primary-600'
                  : 'text-dark-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6">
        <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
          Informações do Perfil
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Usuário</p>
            <p className="text-lg font-semibold text-dark-900 dark:text-white">
              @{data.profile.username}
            </p>
          </div>
          <div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Seguidores</p>
            <p className="text-lg font-semibold text-dark-900 dark:text-white">
              {data.profile.followers.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Posts</p>
            <p className="text-lg font-semibold text-dark-900 dark:text-white">
              {data.profile.posts.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-dark-500 dark:text-dark-400 mb-1">Bio</p>
          <p className="text-dark-900 dark:text-white">{data.profile.bio}</p>
        </div>
      </div>

      {/* Strengths */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
          <h3 className="text-xl font-semibold text-green-900 dark:text-green-100">
            Pontos Fortes
          </h3>
        </div>
        <ul className="space-y-2">
          {data.strengths.map((strength, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span className="text-green-800 dark:text-green-200">{strength}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Weaknesses */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
          <h3 className="text-xl font-semibold text-red-900 dark:text-red-100">
            Pontos de Melhoria
          </h3>
        </div>
        <ul className="space-y-2">
          {data.weaknesses.map((weakness, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-2">!</span>
              <span className="text-red-800 dark:text-red-200">{weakness}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Opportunities */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
            Oportunidades
          </h3>
        </div>
        <ul className="space-y-2">
          {data.opportunities.map((opportunity, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
              <span className="text-blue-800 dark:text-blue-200">{opportunity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Suggestions */}
      <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Lightbulb className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <h3 className="text-xl font-semibold text-dark-900 dark:text-white">
            Sugestões Práticas
          </h3>
        </div>
        <ul className="space-y-3">
          {data.suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">•</span>
              <span className="text-dark-700 dark:text-dark-300">{suggestion}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Audience */}
      <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6">
        <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
          Análise do Público-Alvo
        </h3>
        <p className="text-dark-700 dark:text-dark-300 mb-4">{data.audience.demographics}</p>
        <div className="flex flex-wrap gap-2">
          {data.audience.interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Viral Content Ideas */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl border border-primary-200 dark:border-primary-800 p-6">
        <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
          Ideias de Conteúdo Viral
        </h3>
        <ul className="space-y-3">
          {data.viralContentIdeas.map((idea, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">💡</span>
              <span className="text-dark-700 dark:text-dark-300">{idea}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

