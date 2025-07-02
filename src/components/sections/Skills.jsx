import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  { name: "REST APIs", icon: <TbApi className="text-indigo-500" /> },
  {
    name: "TypeScript (Learning)",
    icon: <SiTypescript className="text-blue-500" />,
  },
  { name: "Docker (Learning)", icon: <FaDocker className="text-sky-600" /> },
  {
    name: "UI/UX Design",
    icon: <MdDesignServices className="text-pink-500" />,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl bg-white px-6 py-20 text-gray-800"
    >
      <h2 className="mb-6 text-center text-4xl font-bold">My Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow"
            data-aos="slide-up"
            data-aos-delay={index * 75}
          >
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
