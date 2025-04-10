'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  
  const phrases = [
    'Investing in Technology-Enabled Businesses',
    'Partnering with Exceptional Founders and Funds',
    'High-Conviction Capital for Long-Term Growth'
  ]

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        // Typing effect - reducing from 100ms to 60ms per character
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1))
        }, 60)
      } else {
        // Finished typing - reducing pause from 5000ms to 3000ms (3 seconds)
        timeout = setTimeout(() => {
          setDisplayText('')
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        }, 3000)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentPhraseIndex, phrases])

  return (
    <section className="section min-h-[80vh] flex items-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="prose prose-sm md:prose w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto">
            <div className="h-[10rem] sm:h-[8rem] mb-8">
              <h1 className="mx-auto">
                {displayText}
                <span 
                  className={`
                    inline-block w-0.5 h-12 bg-neutral-800 ml-2
                    ${displayText.length < phrases[currentPhraseIndex].length ? 'opacity-100' : 'animate-cursor-blink'}
                  `} 
                />
              </h1>
            </div>
            <div className="prose-lg mx-auto mt-12 md:mt-16">
              <p>
                Private Multi-Family Investment Office
              </p>
            </div>
            <p className="text-neutral-600 text-sm md:text-base mx-auto">
              We focus on growth-stage technology investments in both private & public markets, 
              taking an active, partnership-first approach.
            </p>
            <div className="flex justify-center mt-6 md:mt-8">
              <Button asChild size="lg">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 