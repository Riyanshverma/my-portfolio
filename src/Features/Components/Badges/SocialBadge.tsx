import { type SocialBadgeProp } from '@/Types/types'

const SocialBadge = ({ icon: Icon, link, label, size = 28 }: SocialBadgeProp) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Icon size={size} className="text-accent-foreground"/>
    </a>
  )
}

export default SocialBadge
