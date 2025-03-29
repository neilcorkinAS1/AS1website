'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Growth-Stage Technology Investments'
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!isTyping) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [isTyping])

  return (
    <section className="section min-h-[80vh] flex items-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="prose prose-sm md:prose w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto">
            <h1 className="mx-auto">
              {displayText}
              <span className={`inline-block w-0.5 h-12 bg-neutral-800 ml-2 ${isTyping ? 'animate-pulse' : ''}`} />
            </h1>
            <div className="prose-lg mx-auto">
              <p>
                Private Multi-Family Investment Office
              </p>
            </div>
            <p className="text-neutral-600 text-sm md:text-base mx-auto">
              We focus on growth-stage technology investments in both private & public markets, 
              taking an active, partnership-first approach.
            </p>
            <div className="flex gap-3 md:gap-4 justify-center mt-6 md:mt-8">
              <Button asChild size="lg">
                <Link href="/approach">Our Approach</Link>
              </Button>
              <Button variant="secondary" asChild size="lg">
                <Link href="/insights">Read Our Insights →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 