import Navbar from "../components/Navbar";
import ProjectsCarousel from "../components/ProjectCourasel";

const projects = [
  {
    title: "AI-Driven Cybersecurity Assessment Tool",
    description: "Cybersecurity platform using AI for risk analysis with Next.js and Agile Flow.",
    link: "https://denkminds.vercel.app/",
    imageUrl: "/cybersecurity.jpg"
  },
  {
    title: "User Interactive Map Application",
    description: "MERN stack app with Leaflet and Geocoding API for geospatial data.",
    link: "https://github.com/kadamshwetall/MapApplication/tree/master",
    imageUrl: "/map-app.jpg"
  },
  {
    title: "Blockchain Voting System",
    description: "Decentralized e-voting web app using blockchain technology.",
    link: "https://www.ijircee.com/get-current-issue.php?key=MTMx",
    imageUrl: "/blockchain.jpg"
  },
  {
    title: "Portfolio 3D",
    type: "My Portfolio",
    date: "May 2025 - May 2025",
    description: "My 3D Portfolio Design with React three.js and  vite.",
    link: "https://shwetakadam.vercel.app/",
    imageUrl: "/my.jpg"
  }
];

export default function Project() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          
        </div>
        
        <ProjectsCarousel projects={projects} />
      </div>
    </>
  );
}