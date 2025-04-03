import Link from "next/link";  // Import the Link component from Next.js

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white py-6 px-4 flex justify-center space-x-8 backdrop-blur-md">
      <Link href="#home" className="text-lg hover:text-gray-400">Home</Link>
      <Link href="#about" className="text-lg hover:text-gray-400">About Us</Link>
      <Link href="#projects" className="text-lg hover:text-gray-400">Projects</Link>
      <Link href="#experience" className="text-lg hover:text-gray-400">Experience</Link>
      <Link href="#skills" className="text-lg hover:text-gray-400">Skills</Link>
      <Link href="#contact" className="text-lg hover:text-gray-400">Contact</Link>
    </nav>
  );
};

export default Navbar;
