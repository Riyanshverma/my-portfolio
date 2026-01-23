import { useState } from "react";
import { Link } from "react-router-dom";
import { CiDark, CiLight } from "react-icons/ci";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";

const Header = () => {
  // Placeholder for theme state. 
  // You should connect this to your actual theme provider later.
  const [isDark, setIsDark] = useState<boolean>(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <header className="sticky top-4 z-50 w-full">
      {/* 
        Floating Header Design
        backdrop-blur-md creates the "frosted glass" effect.
        bg-background/80 ensures it's readable but translucent.
      */}
      <div className="flex items-center justify-between rounded-full px-4 py-2 shadow-sm backdrop-blur-md transition-all">

        {/* Left: Avatar Image */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="https://res.cloudinary.com/cloudywork/image/upload/v1769173439/Me_rvuttw.jpg"
            alt="Profile"
            className="h-16 w-16 rounded-full object-cover border border-border"
          />
        </Link>

        {/* Center: Navigation */}
        <nav className="flex items-center gap-6 text-lg font-medium text-muted-foreground/80">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          {/* Add more links here (e.g., Blogs) */}
        </nav>

        {/* Right: Theme Toggle with Tooltip */}
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent/70 hover:border hover:border-accent-foreground"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <CiLight size={24} />
                ) : (
                  <CiDark size={24} />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle Theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
};

export default Header;
