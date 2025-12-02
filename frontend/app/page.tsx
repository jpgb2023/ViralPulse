import { Hero } from '@/components/home/Hero'
import { Features } from '@/components/home/Features'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Pricing } from '@/components/home/Pricing'
import { CTA } from '@/components/home/CTA'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
    </div>
  )
}

