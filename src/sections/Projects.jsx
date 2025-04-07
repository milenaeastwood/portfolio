import { RevealSectionOnScroll } from "../components/RevealSectionOnScroll";
import { RevealDivOnScroll } from "../components/RevealDivOnScroll";
import { GlowCard } from "../components/GlowCard";

export const Projects = () => {
  const projects = [
    {
      LegoMio: {
        img: "/images/LegoMio.png",
        url: "https://github.com/milenaeastwood/legomio-fe",
      },
    },
    {
      RecipeRoulette: {
        img: "/images/RecipeRoulette.png",
        url: "https://github.com/milenaeastwood/recipe-roulette",
      },
    },
    {
      QuizzYourPuzzle: {
        img: "/images/QuizzYourPuzzle.png",
        url: "https://github.com/milenaeastwood/quizz-your-puzzle",
      },
    },
    {
      SmartyPantz: {
        img: "/images/SmartyPantz.png",
        url: "https://github.com/milenaeastwood/smarty-pantz",
      },
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-orange flex min-h-screen snap-start items-center justify-center py-6 md:py-16"
    >
      <RevealSectionOnScroll>
        <div className="max-w-5xl px-7">
          <h2 className="font-xillian s:text-6xl mb:mb-10 mb-6 text-center text-5xl tracking-tight md:text-7xl">
            Projects
          </h2>

          <div className="xs:max-w-[22rem] s:max-w-[25rem] mb-6 grid max-w-[25rem] grid-cols-2 gap-3 md:mb-14 md:max-w-full md:grid-cols-4 md:gap-6">
            {projects.map((proj) => {
              const [projectName, projectData] = Object.entries(proj)[0];

              return (
                <RevealDivOnScroll key={projectName}>
                  <GlowCard
                    img={projectData.img}
                    url={projectData.url}
                    alt={projectName}
                  />
                </RevealDivOnScroll>
              );
            })}
          </div>

          <p className="font-urbanist-extralight s:font-urbanist-light s:text-[1.15rem] text-center text-[1rem] tracking-wide">
            See more of my work on{" "}
            <a
              href="https://github.com/milenaeastwood"
              target="_blank"
              className="font-urbanist-medium ml-[0.2rem] inline-block transition-transform duration-300 ease-in-out hover:scale-105"
            >
              GitHub
            </a>
          </p>
        </div>
      </RevealSectionOnScroll>
    </section>
  );
};
