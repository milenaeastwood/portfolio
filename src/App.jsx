import { useState, useRef } from "react";
import { useChangeBgColOnScroll } from "./hooks/useChangeBgColOnScroll";

import { useScrollToHash } from "./hooks/useScrollToHash";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./sections/Home";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Email } from "./sections/Email";

function App() {
  const mainRef = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [bgColor, setBgColor] = useState(null);
  const [bgImage, setBgImage] = useState(null);

  useChangeBgColOnScroll({
    setBgColor,
    setBgImage,
    scrollContainerRef: mainRef,
  });
  useScrollToHash(mainRef);

  return (
    <>
      {!emailOpen && (
        <NavBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
      {!emailOpen && (
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          bgColor={bgColor}
          bgImage={bgImage}
        />
      )}
      <main ref={mainRef} className="h-screen overflow-y-auto">
        <Home />
        <Skills />
        <Projects />
        <Contact setEmailOpen={setEmailOpen} />
        <Email emailOpen={emailOpen} setEmailOpen={setEmailOpen} />
      </main>
    </>
  );
}

export default App;
