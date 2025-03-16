import Navbar from "../components/Navbar";


const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold" >
          Contact 
        </h1>
        <p className="mt-4 max-w-2xl">
          small form and footer on right  side
        </p>
      </div>
    </>
  );
};

export default Contact;
