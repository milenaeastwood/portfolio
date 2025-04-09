import { RevealSectionOnScroll } from "../components/RevealSectionOnScroll";

export const Skills = () => {
  const skills = [
    {
      Frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Responsive Webdesign",
        "REST-APIs",
      ],
    },
    {
      Backend: ["Node.js", "Express", "SQL", "NoSQL", "PostgreSQL", "MongoDB"],
    },
    {
      "Tools & Collaboration": [
        "Git",
        "GitHub",
        "Agile",
        "Scrum",
        "Figma",
        "Trello",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex min-h-screen snap-start items-center justify-center bg-neutral-900 py-6 md:py-16"
    >
      <RevealSectionOnScroll>
        <div className="s:px-12 mx-auto max-w-6xl px-10">
          <div className="reveal-heading">
            <h2 className="font-xillian s:text-6xl mb-6 text-center text-5xl md:mb-10 md:text-7xl">
              Skills
            </h2>
          </div>

          <div className="reveal-grid">
            <div className="s:grid-cols-2 s:gap-6 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-9">
              {skills.map((category, index) => {
                const [categoryName, skillList] = Object.entries(category)[0];

                const backgroundPositionClass =
                  index === 0
                    ? "bg-left"
                    : index === 1
                      ? "bg-center"
                      : "bg-right";

                return (
                  <div
                    key={categoryName}
                    className={`bg-gradient-orange-slice ${backgroundPositionClass} s:pt-7 flex h-full max-w-xs flex-col items-stretch rounded-xl px-4 pt-4 pb-6 md:p-8 md:px-2 ${
                      categoryName === "Tools & Collaboration"
                        ? "s:col-span-2 s:px-10 s:py-5 s:mx-auto md:col-span-1 md:mx-0 md:px-4"
                        : ""
                    } `}
                  >
                    <h3 className="font-urbanist-semibold mb-4 px-1 text-center text-2xl tracking-wide md:mb-6 md:px-4 md:text-[1.7rem]">
                      {categoryName}
                    </h3>
                    <div className="mx-2 flex flex-wrap justify-center gap-2 md:mx-5">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="font-urbanist-medium s:text-[1rem] rounded-xl bg-white/50 px-3 py-1 text-center text-[0.9rem] text-black/90"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </RevealSectionOnScroll>
    </section>
  );
};
