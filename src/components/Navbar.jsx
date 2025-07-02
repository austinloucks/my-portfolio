import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 w-fit max-w-[90vw] -translate-x-1/2 transform rounded-full border border-gray-200 bg-white px-8 py-3 shadow-lg backdrop-blur-md">
      <ul className="flex gap-6 text-sm font-medium text-gray-800">
        <li>
          <a href="/" className="hover:text-indigo-600">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-indigo-600">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-indigo-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-indigo-600">
            Skills
          </a>
        </li>
        <li>
          <Link to="/contact" className="hover:text-indigo-600">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
