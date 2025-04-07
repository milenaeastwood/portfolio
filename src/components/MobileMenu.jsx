export const MobileMenu = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  bgColor,
  bgImage,
}) => {
  return (
    <nav
      style={{ backgroundColor: bgColor, backgroundImage: bgImage }}
      className={`fixed top-0 left-0 z-50 flex w-full flex-col items-center justify-center ${
        mobileMenuOpen
          ? "pointer-events-auto h-screen opacity-100"
          : "pointer-events-none h-0 opacity-0"
      } `}
    >
      <button
        onClick={() => setMobileMenuOpen(false)}
        className="absolute top-6 right-6 cursor-pointer text-3xl focus:outline-none"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={() => setMobileMenuOpen(false)}
        className={
          "hover:font-xillian my-4 inline-block h-[35px] text-center text-2xl hover:text-[1.8rem]"
        }
      >
        HOME
      </a>
      <a
        href="#skills"
        onClick={() => setMobileMenuOpen(false)}
        className={
          "hover:font-xillian my-4 inline-block h-[35px] text-center text-2xl hover:text-[1.8rem]"
        }
      >
        SKILLS
      </a>
      <a
        href="#projects"
        onClick={() => setMobileMenuOpen(false)}
        className={
          "hover:font-xillian my-4 inline-block h-[35px] text-center text-2xl hover:text-[1.8rem] hover:tracking-tight"
        }
      >
        PROJECTS
      </a>
      <a
        href="#contact"
        onClick={() => setMobileMenuOpen(false)}
        className={
          "hover:font-xillian my-4 inline-block h-[35px] text-center text-2xl hover:text-[1.8rem]"
        }
      >
        CONTACT
      </a>
    </nav>
  );
};
