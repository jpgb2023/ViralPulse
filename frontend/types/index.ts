export interface AnalysisResult {
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

export interface ViralContent {
  id: string
  title: string
  views: number
  description: string
  hashtags: string[]
  format: string
  insight: string
  thumbnail?: string
}

export interface Template {
  id: number
  name: string
  category: string
  preview?: string
}

export interface User {
  id: string
  email: string
  name?: string
}

