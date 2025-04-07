import { useEffect, useRef } from "react";

export const useIntersectionObserver = (
  className = "show",
  options = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
) => {
  const ref = useRef(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        }
      });
    }, options);

    ref.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className, options]);

  return ref;
};
