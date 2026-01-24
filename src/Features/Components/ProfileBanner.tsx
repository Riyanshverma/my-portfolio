import { profileBannerUrl } from "@/Data"
import { ScratchToReveal } from "@/Components/magicui/scratch-to-reveal"

const ProfileBanner = () => {
  return (
    <div className="w-full flex justify-center">
      <ScratchToReveal width={896} height={320} className="rounded-xl overflow-hidden shadow-lg">
        <img
          src={profileBannerUrl}
          alt="Profile Banner"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </ScratchToReveal>

    </div>
  )
}

export default ProfileBanner
