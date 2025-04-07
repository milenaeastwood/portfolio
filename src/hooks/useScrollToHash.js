import { useEffect } from "react";

export const useScrollToHash = (scrollContainerRef) => {
  useEffect(() => {
    const container = scrollContainerRef?.current || window;

    const onScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2 &&
          section.id !== "email"
        ) {
          currentSection = section.id;
        }
      });
      if (currentSection) {
        const newHash = `#${currentSection}`;

        if (window.location.hash !== newHash) {
          window.history.pushState({ section: currentSection }, "", newHash);
        }
      }
    };

    container.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollContainerRef]);
};
