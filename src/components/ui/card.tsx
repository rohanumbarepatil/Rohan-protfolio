import { cn } from '@/utils/cn'

export function Card({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn('liquid-glass rounded-3xl p-6', className)}>{children}</div>
}
