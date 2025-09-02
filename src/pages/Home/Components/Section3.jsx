import { MapPin, Users, Gem } from "lucide-react";
import { homepage } from "../../../data/productsData";

export default function Section3() {
  return (
    <section className="bg-white py-20" id="about-us">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center">
        
        {/* Left Image */}
        <img className="rounded-xl w-fit h-72 md:h-96 flex items-center justify-center transform scale-x-[-1]" src={homepage.section3.image} alt="noimg" />

        {/* Right Content */}
        <div>
          <p className="text-sm text-gray-800 mb-2">{homepage.section3.greet}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            {homepage.section3.heading1[0]} <br /> <span className="text-red-600">{homepage.section3.heading1[1]}</span>
          </h2>
          <p className="mt-4 text-gray-600">
            At Torque Toys, we curate an exclusive selection of high-end collectibles designed 
            for discerning adult collectors. Our mission is to provide a sophisticated shopping 
            experience that celebrates the artistry and craftsmanship of each piece.
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-black" />
              {homepage.section3.points[0]}
            </li>
            <li className="flex items-center gap-2">
              <Users size={18} className="text-black" />
              {homepage.section3.points[1]}
            </li>
            <li className="flex items-center gap-2">
              <Gem size={18} className="text-black" />
              {homepage.section3.points[2]}
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition">
              {homepage.section3.cta[0]}
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              {homepage.section3.cta[1]} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
