import { MapPin, Users, Gem } from "lucide-react";

export default function Section3() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="bg-gray-200 rounded-xl w-full h-72 md:h-96 flex items-center justify-center">
          <span className="text-gray-500">Image</span>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm text-gray-500 mb-2">Welcome</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Discover the World of <br /> Premium Collectibles
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
              Explore our unique selection of premium collectibles.
            </li>
            <li className="flex items-center gap-2">
              <Users size={18} className="text-black" />
              Join our community of passionate collectors today.
            </li>
            <li className="flex items-center gap-2">
              <Gem size={18} className="text-black" />
              Experience elegance in every collectible we offer.
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Sign Up →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
