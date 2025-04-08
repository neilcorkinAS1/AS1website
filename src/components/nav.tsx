'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between py-2 px-4 max-w-7xl mx-auto">
        <Link href="/">
          <Image 
            src="/logos/horizontal jade logo version on top of transparent background.svg"
            alt="AS1 Logo"
            width={100}
            height={40}
            className="h-14 w-auto"
          />
        </Link>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-neutral-600">
              About <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/about">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/approach">Our Approach</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/philosophy">Philosophy</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/team">Team</Link>
          <Link href="/insights">Insights</Link>
          <Button asChild>
            <Link href="https://www.registrydirect.com.au/login">Investor Login</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden">
            <div className="flex flex-col items-end gap-4 py-4 px-4 max-w-7xl mx-auto">
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link href="/approach" onClick={() => setIsMenuOpen(false)}>Our Approach</Link>
              <Link href="/philosophy" onClick={() => setIsMenuOpen(false)}>Philosophy</Link>
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
              <Link href="/team" onClick={() => setIsMenuOpen(false)}>Team</Link>
              <Link href="/insights" onClick={() => setIsMenuOpen(false)}>Insights</Link>
              <Button asChild>
                <Link href="https://www.registrydirect.com.au/login" onClick={() => setIsMenuOpen(false)}>Investor Login</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 