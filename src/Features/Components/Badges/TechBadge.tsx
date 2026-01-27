import { type TechBadgeProp } from '@/Types/types'

const TechBadge = ({ icon: Icon, name, color, className }: TechBadgeProp) => {
  return (
    <span className={`border border-accent-foreground/60 translate-y-[3px] inline-flex items-center gap-1.5 px-2 py-1 mx-1 rounded-md bg-accent-foreground/10 text-sm font-medium text-accent-foreground transition-colors ${className}`}>
      <Icon className={color} size={18} />
      {name}
  </span>
  )
}

export default TechBadge
