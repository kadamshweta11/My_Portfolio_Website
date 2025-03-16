import Navbar from "../components/Navbar";


const Skills = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center text-center bg-black text-white">
        <h1 className="text-4xl font-bold" >
        Skills
        </h1>
        <p className="mt-4 max-w-2xl">
          Normal table format with  sorted skills with2 columns
        </p>
      </div>
    </>
  );
};

export default Skills;
