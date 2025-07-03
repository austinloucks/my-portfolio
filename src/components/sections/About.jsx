function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl bg-white px-6 py-20 text-gray-800"
      data-aos="fade-up"
    >
      <h2 className="mb-6 text-center text-4xl font-bold">About Me</h2>

      <p className="mb-8 text-center text-lg leading-relaxed">
        After spending five years in the U.S. Navy as an Aviation Electrician's
        Mate, I developed a deep foundation in troubleshooting complex systems,
        working under pressure, and collaborating with diverse teams — skills
        that have translated naturally into my journey as a software developer.
        My transition from military service to tech began with a commitment to
        continuous learning, and that dedication brought me to Creating Coding
        Careers, where I’ve spent months honing my skills through real-world
        projects, mentorship, and hands-on experience.
        <br />
        <br />
        I'm especially passionate about front-end development and creating
        engaging user experiences. React and JavaScript are my favorite tools of
        the trade, and I love the challenge of building intuitive, responsive
        interfaces that people actually enjoy using. While I’m focused on the
        front-end, I’ve also gained experience with back-end technologies like
        Node.js, Express, MongoDB, and MySQL — and I’m currently teaching myself
        TypeScript to level up my development toolkit even further.
        <br />
        <br />
        Outside of tech, I run Dungeons & Dragons campaigns as a Dungeon Master
        for my friends and I — a role that sharpens my creativity, storytelling,
        and my ability to think and act on the fly. Whether it’s designing
        dungeons or debugging code, I thrive when I’m solving problems and
        creating meaningful experiences.
        <br />
        <br />
        I’m actively seeking a full-time junior developer role where I can
        contribute to a strong team, continue to grow, and eventually dive into
        technologies like Docker and containerized workflows. More than
        anything, I’m excited to keep building, keep learning, and keep shipping
        things that matter.
      </p>

      <ul className="grid list-inside list-disc gap-4 text-base sm:grid-cols-2">
        <li>
          🛠️ Front-end focused, with a love for React, JavaScript, and clean
          UI/UX
        </li>
        <li>⚙️ Familiar with Node.js, Express, MongoDB, and MySQL</li>
        <li>
          📚 Currently self-teaching TypeScript and exploring containerization
          with Docker
        </li>
        <li>
          🧠 Background in high-pressure environments from 5 years in the U.S.
          Navy
        </li>
        <li>
          🎲 Creative storyteller and Dungeon Master for Dungeons & Dragons
        </li>
        <li>🤝 Strong communicator, team player, and collaborator</li>
      </ul>
    </section>
  );
}

export default About;
