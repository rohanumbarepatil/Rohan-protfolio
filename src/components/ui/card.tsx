import { cn } from '@/utils/cn'

export function Card({ className, children, onClick }: React.PropsWithChildren<{ className?: string; onClick?: () => void }>) {
  return <div className={cn('liquid-glass rounded-3xl p-6', className)} onClick={onClick}>{children}</div>
}
