import { type ReactNode } from "react";
import { Header, Footer } from ".."

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background text-foreground font-sans">
      {/* 
        Container constrained to 3xl. 
        'relative' is needed if we do absolute positioning inside.
      */}
      <div className="relative flex min-h-screen w-full max-w-3xl flex-col px-4 sm:px-6">
        <Header />
        
        {/* Main content area */}
        <main className="flex-1 w-full flex flex-col pt-8 pb-20">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;