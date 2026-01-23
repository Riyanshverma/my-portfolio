import { Header, Footer } from "./Components"
import { Button } from "@/Components/ui/button"
const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="text-2xl">
        Hello i am landing page...
        <Button>Hello</Button>
      </div>
      <Footer />
    </>
  )
}

export default LandingPage