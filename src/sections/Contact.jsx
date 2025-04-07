import { RevealSectionOnScroll } from "../components/RevealSectionOnScroll";

export const Contact = ({ setEmailOpen }) => {
  return (
    <section
      id="contact"
      className="flex min-h-screen snap-start snap-always items-center justify-center bg-neutral-900 py-16"
    >
      <RevealSectionOnScroll>
        <div>
          <h2 className="font-xillian s:text-6xl mb-10 text-center text-5xl md:text-7xl">
            Get In Touch
          </h2>
          <div className="flex justify-center gap-10">
            <a
              href="https://www.linkedin.com/in/milenaoswald/"
              target="_blank"
              className="transition-transform duration-300 ease-in-out hover:scale-120"
            >
              <img
                src="public/assets/icon-linkedin-100.png"
                alt="linkedIn"
                className="h-[32px]"
              />
            </a>
            <a
              href="https://github.com/milenaeastwood"
              target="_blank"
              className="transition-transform duration-300 ease-in-out hover:scale-120"
            >
              <img
                src="public/assets/icon-github-100.png"
                alt="GitHub"
                className="h-[32px]"
              />
            </a>
            <button
              onClick={() => {
                (window.location.hash = "#contact/#email"), setEmailOpen(true);
              }}
              className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-120"
            >
              <img
                src="public/assets/icon-email-100.png"
                alt="email"
                className="h-[30px] pl-1"
              />
            </button>
          </div>
        </div>
      </RevealSectionOnScroll>
    </section>
  );
};
