'use client'

export function TemplateGrid() {
  // Mock data - em produção viria da API
  const templates = [
    { id: 1, name: 'Template 1', category: 'posts', preview: '/templates/template1.jpg' },
    { id: 2, name: 'Template 2', category: 'stories', preview: '/templates/template2.jpg' },
    { id: 3, name: 'Template 3', category: 'reels', preview: '/templates/template3.jpg' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {templates.map((template) => (
        <div
          key={template.id}
          className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Preview</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-dark-900 dark:text-white">
              {template.name}
            </h3>
            <p className="text-sm text-dark-600 dark:text-dark-300 capitalize">
              {template.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

