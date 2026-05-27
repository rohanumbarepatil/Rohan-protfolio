import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-white text-black shadow-[0_12px_35px_rgba(255,255,255,0.06)] hover:bg-white/90 hover:shadow-[0_16px_40px_rgba(255,255,255,0.08)]',
  secondary:
    'border border-white/12 bg-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-white/[0.08] hover:border-white/18',
  ghost: 'bg-transparent text-white/80 hover:bg-white/[0.05] hover:text-white',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'primary', size = 'md', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50',
        'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  )
})
