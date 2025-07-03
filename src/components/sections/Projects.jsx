const projects = [
  {
    title: "D&D Character Generator",
    image: "/images/dnd-character-generator.png",
    description:
      "A fully playable Dungeons and Dragons character builder built with React and Vite. Allows users to select race, class, ability scores, and generates a character sheet complete with AI-generated portrait. Built as part of my apprenticeship at Creating Coding Careers.",
    link: "https://react-100-hackathon.vercel.app/",
    direction: "left",
  },
  {
    title: "Mortgage Calculator",
    image: "/images/mortgage-calculator.png",
    description:
      "A responsive mortgage calculator app that allows users to input loan data and receive amortized monthly payments. Built using React and styled with Bootstrap. Built as part of my apprenticeship at Creating Coding Careers.",
    link: "https://mortgage-calculator-seven-inky.vercel.app/",
    direction: "right",
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl bg-white px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        My Recent Projects
      </h2>

      {projects.map((project, index) => {
        const isLeft = project.direction === "left";
        return (
          <div
            key={project.title}
            className={`flex flex-col ${
              isLeft ? "md:flex-row" : "md:flex-row-reverse"
            } mb-16 items-center gap-8`}
            data-aos={isLeft ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg shadow-lg md:w-1/2"
            />
            <div className="md:w-1/2">
              <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
              <p className="mb-4 text-gray-700">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-700"
              >
                View Project
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
