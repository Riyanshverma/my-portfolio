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

const navLinks = [
  { to: "/", label: "Portfolio" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/journey", label: "Journey" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="flex items-center justify-between rounded-xl px-3 py-2 shadow-sm backdrop-blur-md transition-all">
        <Link to="/" className="flex items-center hover:opacity-80">
          <img
            src={profilePictureUrl}
            alt="Profile"
            className="h-16 w-16 rounded-xl object-cover border border-accent-foreground"
          />
        </Link>
        <div className="flex items-center gap-0">
          <nav className="flex items-center gap-8 text-lg text-muted-foreground">
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

          <div className="w-px h-8 bg-accent-foreground mx-4" />

          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={toggleTheme}
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-muted-foreground/20 hover:border hover:border-accent-foreground"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (<CiLight size={24} />) : (<CiDark size={24} />)}
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={8} className="rounded-full px-4 py-2 text-sm noto-sans-mono-regular">
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
