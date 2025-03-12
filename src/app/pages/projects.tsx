import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center text-center bg-black text-white">
        <h1 className="text-4xl font-bold" >
         Projects
        </h1>
        <p className="mt-4 max-w-2xl">
          Mention all the projects in cards.....like circle cardsand hover
        </p>
      </div>
    </>
  );
};

export default Project;
