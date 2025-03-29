interface HighlightProps {
  children: React.ReactNode;
}

export function Highlight({ children }: HighlightProps) {
  return (
    <span className="relative inline-block">
      <span 
        className="
          absolute inset-0 
          bg-primary/10 
          -rotate-[0.5deg]
          hover:animate-wiggle
        "
      ></span>
      <span className="relative">{children}</span>
    </span>
  )
} 