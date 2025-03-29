import * as React from "react"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionContainer({ children, className = '', id }: SectionContainerProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
} 