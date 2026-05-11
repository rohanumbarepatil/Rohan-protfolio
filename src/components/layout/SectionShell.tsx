import { cn } from '@/utils/cn'

export function SectionShell({
  children,
  className,
  id,
}: React.PropsWithChildren<{ className?: string; id?: string }>) {
  return (
    <section id={id} className={cn('py-24 sm:py-28 lg:py-32', className)}>
      <div className="section-shell">{children}</div>
    </section>
  )
}
