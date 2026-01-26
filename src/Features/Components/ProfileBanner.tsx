import { profileBannerUrl } from "@/Data"
import { ScratchToReveal } from "@/Components/magicui/scratch-to-reveal"

const ProfileBanner = () => {
  return (
    <div className="w-full flex justify-center relative">
      <ScratchToReveal width={896} height={320} className="rounded-xl overflow-hidden shadow-lg">
        <img
          src={profileBannerUrl}
          alt="Profile Banner"
          className="w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />
      </ScratchToReveal>
      <p className="absolute top-3 right-4 z-10 text-sm text-white rounded-full underline underline-offset-4">
        Scratch it
      </p>
    </div>
  )
}

export default ProfileBanner
