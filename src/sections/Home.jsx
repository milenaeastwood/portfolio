import { RevealSectionOnScroll } from "../components/RevealSectionOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-orange xs:px-8 s:px-12 flex min-h-screen snap-start snap-always items-center justify-center px-9 pt-16 pb-4 md:py-16"
    >
      <RevealSectionOnScroll>
        <div className="s:leading-normal mx-auto max-w-3xl text-center leading-[1.3rem]">
          <h1 className="font-xillian s:text-7xl mb-6 text-5xl font-bold md:mb-10 md:text-8xl">
            Hi, I'm Milena.
          </h1>
          <p className="font-urbanist-extralight s:text-[1.15rem] mb-4 text-[1rem] tracking-wide">
            I'm a Web Developer with a passion for clean, responsive design and
            user-focused interfaces. I came into tech from a non-traditional
            background — and quickly found frontend as the perfect blend of
            logic, creativity, and purpose.
          </p>
          <p className="font-urbanist-extralight s:text-[1.15rem] mb-4 text-[1rem] tracking-wide">
            Curious, detail-oriented, and always eager to learn, I enjoy
            exploring new tools and diving deeper into accessibility,
            performance, and user experience. I thrive in collaborative teams
            where ideas are shared and skills grow together.
          </p>
        </div>
      </RevealSectionOnScroll>
    </section>
  );
};
