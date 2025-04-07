import { useEffect } from "react";

export const useChangeBgColOnScroll = ({
  setBgColor,
  setBgImage,
  scrollContainerRef,
}) => {
  useEffect(() => {
    const container = scrollContainerRef?.current || window;
    const sections = ["home", "skills", "projects", "contact"];

    const handleScroll = () => {
      // let newBgColor = null;

      sections.forEach((sect) => {
        const section = document.getElementById(sect);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const style = getComputedStyle(section);
        const bgColor = style.backgroundColor;
        const bgImage = style.backgroundImage;

        if (rect.top <= 0 && rect.bottom >= 0) {
          if (bgImage === "none") {
            setBgColor(bgColor);
            setBgImage(null);
          } else {
            setBgImage(bgImage);
            setBgColor(null);
          }
        }
      });

      // if (newBgColor !== null) setBgColor(newBgColor);
      // console.log("newBgColor", newBgColor);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setBgColor, setBgImage]);
};
