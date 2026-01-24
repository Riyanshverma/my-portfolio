import { Link } from "react-router-dom";
import { CiDark, CiLight } from "react-icons/ci";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import { useTheme } from "@/Hooks";
import { profilePictureUrl } from "@/Data";

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="flex items-center justify-between rounded-full px-4 py-2 shadow-sm backdrop-blur-md transition-all">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src={profilePictureUrl}
            alt="Profile"
            className="h-16 w-16 rounded-full object-cover border border-accent-foreground"
          />
        </Link>

        {/* Center: Navigation */}
        <nav className="flex items-center gap-6 text-lg font-medium text-muted-foreground/80">
          <Link to="/" className="hover:text-foreground transition-colors">
            Portofilo
          </Link>
          <Link to="/projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link to="/experience" className="hover:text-foreground transition-colors">
            Experience
          </Link>
          <Link to="/journey" className="hover:text-foreground transition-colors">
            Journey
          </Link>
        </nav>

        {/* Right: Theme Toggle with Tooltip */}
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted-foreground/20 hover:border hover:border-accent-foreground"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (<CiLight size={24} />) : (<CiDark size={24} />)}
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={8} className="rounded-full px-4 py-2 text-sm">
              <p>Toggle Theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
};

export default Header;
