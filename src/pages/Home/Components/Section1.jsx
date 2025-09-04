import React from "react";
import { Link } from "react-router-dom";
 // adjust path
import { homepage } from "../../../data/productsData"; // adjust path

export default function Section1({content}) {
  const images = content.images;
  

  // Duplicate images to create a seamless infinite scroll
  const doubledImages = [...images, ...images];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className=" rajdhani-bold text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            {content.title[0]} <br />
           <span className="text-red-600 rajdhani-semibold">{content.title[1]} </span><br /> 
            {content.title[2]}
          </h1>
          <p className="mt-4 text-gray-600 max-w-md">
            {content.description}
          </p>
          <div className="mt-6 flex gap-4">
            <Link className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition" to="our-products">
              {content.cta[0]}
            </Link>
            <Link className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition" to="about-us">
              {content.cta[1]}
            </Link>
          </div>
        </div>

        {/* Right Side Infinite Scroll Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column (Top to Bottom) */}
          <div className="overflow-hidden h-[400px]">
            <div className="flex flex-col animate-scroll-down">
              {doubledImages.map((img, idx) => (
                <img
                  key={`down-${idx}`}
                  src={img}
                  
                  className=" rounded-xl h-32 md:h-40 lg:h-full w-full object-cover mb-4"
                />
              ))}
            </div>
          </div>
          {/* Right Column (Bottom to Top) */}
          <div className="overflow-hidden h-[400px]">
            <div className="flex flex-col animate-scroll-up">
              {doubledImages.map((img, idx) => (
                <img
                  key={`up-${idx}`}
                  src={img}
                  className=" rounded-xl h-32 md:h-40 lg:h-full w-full object-cover mb-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
