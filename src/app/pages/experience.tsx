import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold" >
         Experience
        </h1>
        <p className="mt-4 max-w-2xl">
         Experinece page has all 3 experience wqith design
        </p>
      </div>
    </>
  );
};

export default Experience;
