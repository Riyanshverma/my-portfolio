import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { type ReactNodeProp } from "@/Types/types";

const Layout = ({ children }: ReactNodeProp) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background noto-sans-mono-regular">
      <div className="relative flex min-h-screen w-full max-w-4xl flex-col px-4">
        <ScrollToTop />
        <Header />
        <main className="flex-1 w-full flex flex-col py-8">
          {children}
        </main>
        <Footer />
      </div>
      <div className="sticky bottom-0 left-0 w-full h-16 z-40">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/80 via-background/60 to-transparent backdrop-blur-md" />
      </div>
    </div>
  );
};

export default Layout;