import { useEffect, useRef, useState, type ReactNode } from "react";

type LazyMountProps = {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  once?: boolean;
};

const LazyMount = ({
  children,
  fallback = null,
  rootMargin = "200px",
  once = true,
}: LazyMountProps) => {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted && once) return;

    const el = hostRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setMounted(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setMounted(false);
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted, once, rootMargin]);

  return <div ref={hostRef}>{mounted ? children : fallback}</div>;
};

export { LazyMount };