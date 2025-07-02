import { useEffect } from "react";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on load
  }, []);

  return (
    <main className="pt-16">
      <section id="hero" data-aos="fade-up">
        <div className="bg-gradient-to-b from-white to-gray-100 px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Hi, I'm Austin Loucks
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Software Developer. Problem solver. Lifelong learner. Veteran.
          </p>

          {/* Social + Contact Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/austin-loucks/"
              target="_blank"
              className="flex transform items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-700 hover:shadow-lg"
            >
              <FaLinkedinIn size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/austinloucks"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
            >
              <FaGithub size={20} />
              GitHub
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
            >
              <HiOutlineMail size={20} />
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" data-aos="fade-up">
        <About />
      </section>

      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>

      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>
    </main>
  );
}

export default Home;
