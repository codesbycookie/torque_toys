import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[100vh] text-center px-6 bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 border-4 border-gray-400 opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-gray-400 opacity-20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-gray-300 opacity-20 rotate-45"></div>

      {/* Big 404 */}
      <h1 className="text-[8rem] font-extrabold tracking-widest text-black drop-shadow-lg">
        404
      </h1>

      {/* Divider Line */}
      <div className="w-32 h-1 bg-black mb-6"></div>

      {/* Message */}
      <p className="text-lg md:text-xl font-light text-gray-700 max-w-md">
        Oops! The page you’re looking for doesn’t exist.  
        It might have been removed, renamed, or never existed.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-200 hover:text-black transition duration-300 shadow-md"
      >
        Go Back Home
      </Link>

      {/* Extra filler text */}
      <p className="mt-6 text-sm text-gray-500">
        Meanwhile, you can head back to the homepage or check out our products.
      </p>
    </div>
  );
};

export default Errorpage;
