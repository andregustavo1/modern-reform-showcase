
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  id?: string;
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  id,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible, threshold]);

  const delayStyle = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={sectionRef}
      className={`animate-on-scroll ${isVisible ? "in-view" : ""} ${className}`}
      style={delayStyle}
      id={id}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
