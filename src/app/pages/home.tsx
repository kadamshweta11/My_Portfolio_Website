import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-800 text-white">
        <h1 className="text-5xl font-bold">
        Hey, I'm Shweta Kadam 👋
        </h1>
      </div>
    </>
  );
}
