interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  variant?: 'glass' | 'solid'
}

export default function Card({ children, className = '', hover = true, variant = 'glass' }: CardProps) {
  const baseStyles = variant === 'glass'
    ? {
        background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        boxShadow: '0 8px 32px -4px rgba(37, 99, 235, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255,255,255,0.8)',
      }
    : {}

  return (
    <div
      className={`
        group relative rounded-2xl overflow-hidden
        ${variant === 'solid' ? 'bg-primary-light border border-secondary/10' : ''}
        ${hover ? 'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.02]' : ''}
        ${className}
      `}
      style={baseStyles}
    >
      {/* Gradient border for glass variant */}
      {variant === 'glass' && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
          style={{
            padding: '1px',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(255,255,255,0.5) 50%, rgba(37, 99, 235, 0.2) 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
          }}
        />
      )}

      {/* Glow effect on hover for glass variant */}
      {variant === 'glass' && hover && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.08) 0%, transparent 60%)',
          }}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>
}

export function CardImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative aspect-square overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
      />
    </div>
  )
}
