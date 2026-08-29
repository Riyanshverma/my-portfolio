import { useState } from "react";
import { Link } from "react-router-dom";
import { CiDark, CiLight } from "react-icons/ci";
import { Menu, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/Components/ui/tooltip";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/Components/ui/collapsible";
import { useTheme } from "@/Hooks";
import { profilePictureUrl1 } from "@/Data";

const navLinks = [
  { to: "/", label: "Portfolio" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
      <Collapsible open={isMenuOpen} onOpenChange={setIsMenuOpen}>
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
                <p>Let's Connect</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex items-center gap-0">
            <nav className="hidden md:flex items-center gap-8 text-lg text-muted-foreground">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-accent-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:block w-px h-8 bg-accent-foreground mx-4" />
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
            <CollapsibleTrigger asChild>
              <button
                className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-muted-foreground/20 hover:border hover:border-accent-foreground ml-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </CollapsibleTrigger>
          </div>
        </div>
        <CollapsibleContent className="md:hidden bg-background rounded-xl shadow-sm">
          <nav className="flex flex-col gap-1 px-3 pb-3 text-lg text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-muted-foreground/10 hover:text-accent-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </CollapsibleContent>
      </Collapsible>
    </header>
  );
};

export default Header;
