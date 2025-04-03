import Image from "next/image";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col md:flex-row justify-center items-center bg-gray-900 text-white px-10">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src="/myphoto.jpg" // Make sure image.png is in the /public folder
            alt="Shweta Kadam"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - About Content */}
        <div className="md:w-1/2 flex flex-col justify-center px-8 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Shweta Kadam </h1>
          <h5 className="text-2xl font-bold mb-4">Developer/Content Creator</h5>
          <p className="text-lg mb-4">
            A Web & Data Engineer, shaping the digital world with innovative and AI-driven solutions. Passionate about MERN Stack Frontend ,Backend and Database development, I build seamless and scalable applications.
          </p>
          <p className="text-lg mb-4">
            Always exploring new technologies, I thrive on problem-solving and innovation. My work revolves around crafting secure, user-friendly experiences that merge creativity with technology.
          </p>
          
          <p className="text-lg mb-6">
            Let us connect and build something impactful together! 
          </p>

          {/* Buttons - SEO Optimized & Trending UI */}
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="/ShwetaKadam.pdf" // Add your resume file in the /public folder
              download="Shweta_Kadam_Resume"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-lg"
            >
              📄 Download Resume
            </a>

            <a
              href="https://www.youtube.com/@kadamshweta11" // Replace with your YouTube channel link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
               My YouTube
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
