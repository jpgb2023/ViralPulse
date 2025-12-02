'use client'

interface TemplateCategoryProps {
  type: {
    id: string
    name: string
    icon: string
  }
}

export function TemplateCategory({ type }: TemplateCategoryProps) {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="text-4xl mb-4">{type.icon}</div>
      <h3 className="text-xl font-semibold text-dark-900 dark:text-white">
        {type.name}
      </h3>
    </div>
  )
}

