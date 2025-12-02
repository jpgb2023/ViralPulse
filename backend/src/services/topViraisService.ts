export async function getTopVirais(category?: string) {
  // Em produção, aqui você buscaria dados reais de uma API ou banco de dados
  // Por enquanto retornamos dados mockados
  
  const mockVirais = [
    {
      id: '1',
      title: 'Dica de Fitness',
      views: 150000,
      description: 'Dicas rápidas para treino em casa',
      hashtags: ['fitness', 'treino', 'saude'],
      format: 'Reel',
      insight: 'Conteúdo educativo com formato rápido e direto',
      thumbnail: null,
    },
    {
      id: '2',
      title: 'Receita Fácil',
      views: 200000,
      description: 'Receita de bolo em 5 minutos',
      hashtags: ['receita', 'comida', 'bolo'],
      format: 'Reel',
      insight: 'Receita prática com passo a passo visual',
      thumbnail: null,
    },
    {
      id: '3',
      title: 'Tutorial de Maquiagem',
      views: 180000,
      description: 'Look completo para o dia',
      hashtags: ['makeup', 'beauty', 'tutorial'],
      format: 'Reel',
      insight: 'Tutorial passo a passo com resultado final impactante',
      thumbnail: null,
    },
  ]

  // Filtrar por categoria se fornecida
  if (category) {
    // Lógica de filtro por categoria
    return mockVirais.filter((viral) => 
      viral.hashtags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
    )
  }

  return mockVirais
}

