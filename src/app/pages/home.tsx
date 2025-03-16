import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-800 text-white">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className="text-5xl font-bold">
        Hey, I am Shweta Kadam 
        </h1>
      </div>
    </>
  );
}
