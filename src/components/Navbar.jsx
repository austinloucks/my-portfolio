import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-800 px-6 py-4 text-white">
      <h1 className="text-xl font-bold">Austin Loucks</h1>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-indigo-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-indigo-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-indigo-300">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/skills" className="hover:text-indigo-300">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-indigo-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
