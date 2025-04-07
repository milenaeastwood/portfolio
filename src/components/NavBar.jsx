import { useEffect } from "react";
import { useScrollToSection } from "../hooks/useScrollToSection";

export const NavBar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  useScrollToSection();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full tracking-wide md:text-[1rem]">
      <div className="font-urbanist-regular mx-auto flex h-16 max-w-5xl items-center justify-end px-4 md:justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            useScrollToSection("home");
          }}
          className="font-urbanist-bold hidden tracking-wider md:block"
        >
          MILENA OSWALD
        </a>
        <div
          className="relative h-5 w-7 scale-200 cursor-pointer md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          &#9776;
        </div>
        <div className="hidden items-center space-x-8 text-center md:flex">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              useScrollToSection("home");
            }}
            className="hover:font-xillian w-[50px] text-end hover:translate-x-[1px] hover:translate-y-[2px] hover:text-[1.2rem]"
          >
            HOME
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              useScrollToSection("skills");
            }}
            className="hover:font-xillian w-[50px] text-end hover:translate-x-[1px] hover:translate-y-[2px] hover:text-[1.2rem]"
          >
            SKILLS
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              useScrollToSection("projects");
            }}
            className="hover:font-xillian w-[75px] text-end hover:translate-x-[-1px] hover:translate-y-[2px] hover:text-[1.2rem]"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              useScrollToSection("contact");
            }}
            className="hover:font-xillian w-[75px] text-end hover:translate-y-[2px] hover:text-[1.2rem]"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};
