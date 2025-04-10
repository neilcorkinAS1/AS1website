import React from 'react'

interface TextPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function TextPageLayout({ title, children }: TextPageLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="prose prose-lg prose-invert max-w-none">
        {children}
      </div>
    </div>
  )
} 