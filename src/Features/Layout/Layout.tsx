import { Header, Footer } from ".."
import { type ReactNodeProp } from "@/Types/types";

const Layout = ({ children }: ReactNodeProp) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background text-foreground noto-sans-mono-regular">
      <div className="relative flex min-h-screen w-full max-w-4xl flex-col px-4">
        <Header />
        <main className="flex-1 w-full flex flex-col pt-8 pb-20">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Layout;