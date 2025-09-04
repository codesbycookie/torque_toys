import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]  text-white text-center px-6">
      {/* Big 404 */}
      <h1 className="text-[8rem] font-extrabold tracking-widest text-black drop-shadow-lg">
        404
      </h1>

      {/* Divider Line */}
      <div className="w-32 h-1 bg-white mb-6"></div>

      {/* Message */}
      <p className="text-xl md:text-2xl font-light text-black">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-200 hover:text-black transition duration-300 shadow-md"
      >
        Go Back Home
      </Link>

      {/* Subtle Decoration */}
      <div className="absolute top-10 left-10 w-24 h-24 border-4 border-black opacity-30 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-black opacity-30 rounded-full"></div>
    </div>
  );
};

export default Errorpage;
