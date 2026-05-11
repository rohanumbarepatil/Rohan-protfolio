import { cn } from '@/utils/cn'

export function Badge({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.18em] text-white/70 uppercase',
        className,
      )}
    >
      {children}
    </span>
  )
}
