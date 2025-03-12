
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white py-6 px-4 flex justify-center space-x-8 backdrop-blur-md">
      <a href="#home" className="text-lg hover:text-gray-400">Home</a>
      <a href="#about" className="text-lg hover:text-gray-400">About Us</a>
      <a href="#projects" className="text-lg hover:text-gray-400">Projects</a>
      <a href="#experience" className="text-lg hover:text-gray-400">Experience</a>
      <a href="#skills" className="text-lg hover:text-gray-400">Skills</a>
      <a href="#contact" className="text-lg hover:text-gray-400">Contact</a>
    </nav>
  );
};

export default Navbar;
