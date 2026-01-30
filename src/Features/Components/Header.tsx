import { Link } from "react-router-dom";
import { CiDark, CiLight } from "react-icons/ci";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/Components/ui/tooltip";
import { useTheme } from "@/Hooks";
import { profilePictureUrl1 } from "@/Data";

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  const playBellSound = () => {
    const audio: HTMLAudioElement = new Audio("/bell-sound.mp3")
    audio.volume = 0.3
    audio.play()
  };

  const handleToggleTheme = () => {
    toggleTheme()
    playBellSound()
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between rounded-xl px-3 py-2 shadow-sm backdrop-blur-md transition-all">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center">
                <img
                  src={profilePictureUrl1}
                  alt="Profile"
                  className="h-16 w-16 rounded-xl object-cover border border-accent-foreground"
                  loading="lazy"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={8} className="rounded-full px-4 py-2 noto-sans-mono-regular flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <p>Open to work</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex items-center gap-0">
          <nav className="flex items-center gap-8 text-lg text-muted-foreground">
            <Link
              to="/"
              className="hover:text-accent-foreground transition-colors"
            >
              Portfolio
            </Link>
          </nav>
          <div className="w-px h-8 bg-accent-foreground mx-4" />
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleToggleTheme}
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-muted-foreground/20 hover:border hover:border-accent-foreground"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (<CiLight size={24} />) : (<CiDark size={24} />)}
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={8} className="rounded-full px-4 py-2 noto-sans-mono-regular">
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
};

export default Header;
