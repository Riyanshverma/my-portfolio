import { Button } from "@/Components/ui/button"
import { CiDark, CiLight } from "react-icons/ci";
const LandingPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-bold">
        Hello i am landing page...
      </div>
      <p className="text-muted-foreground">
        This is where your main content goes. The header and footer are now handled by the Layout component.
      </p>
      <div>
         <Button>Hello</Button>
      </div>
      
    </div>
  )
}

export default LandingPage