import React from "react";
import { Link } from "react-router-dom";

export default function Section1({ content }) {
  const images = content.images;
  const doubledImages = [...images, ...images]; // for seamless scroll

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="rajdhani-bold text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            {content.title[0]} <br />
            <span className="text-red-500 bg-red-100 px-2 rounded-md">
              {content.title[1]}
            </span>
            <br />
            {content.title[2]}
          </h1>
          <p className="mt-6 text-gray-600 max-w-md text-lg leading-relaxed">
            {content.description}
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/our-products"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-md hover:shadow-lg"
            >
              {content.cta[0]}
            </Link>
            <Link
              to="/about-us"
              className="px-6 py-3 border border-gray-400 text-gray-800 rounded-lg hover:bg-gray-100 transition"
            >
              {content.cta[1]}
            </Link>
          </div>
        </div>

        {/* Right Infinite Scroll Images */}
        <div className="grid grid-cols-2 gap-[50px]">
          {/* Left Column (Scroll Down) */}
          <div className="relative overflow-hidden h-[500px] rounded-xl">
            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex flex-col animate-scroll-down">
              {doubledImages.map((img, idx) => (
                <img
                  key={`down-${idx}`}
                  src={img}
                  alt={`scroll-down-${idx}`}
                  className="rounded-xl h-full w-full object-cover mb-4 transform hover:scale-105 transition duration-500 ease-in-out"
                />
              ))}
            </div>
          </div>

          {/* Right Column (Scroll Up) */}
          <div className="relative overflow-hidden h-[450px] rounded-xl">
            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex flex-col animate-scroll-up">
              {doubledImages.map((img, idx) => (
                <img
                  key={`up-${idx}`}
                  src={img}
                  alt={`scroll-up-${idx}`}
                  className="rounded-xl h-full w-full object-cover mb-4 transform hover:scale-105 transition duration-500 ease-in-out"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
