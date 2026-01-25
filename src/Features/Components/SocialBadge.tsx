import { type SocialBadgeProp } from '@/Types/types'

const SocialBadge = ({ icon: Icon, link, label }: SocialBadgeProp) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Icon size={28} className="text-accent-foreground"/>
    </a>
  )
}

export default SocialBadge
