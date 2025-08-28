export default function Section1() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Discover Premium <br />
            Collectibles for <br />
            Discerning Collectors
          </h1>
          <p className="mt-4 text-gray-600 max-w-md">
            Explore our exclusive range of high-end toy collectibles designed for adult enthusiasts. Each piece is crafted with precision, ensuring quality and sophistication in every detail.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Shop
            </button>
            <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 rounded-xl h-32 md:h-40 lg:h-48"></div>
          <div className="bg-gray-200 rounded-xl h-32 md:h-40 lg:h-48"></div>
          <div className="bg-gray-200 rounded-xl h-32 md:h-40 lg:h-48"></div>
          <div className="bg-gray-200 rounded-xl h-32 md:h-40 lg:h-48"></div>
          <div className="bg-gray-200 rounded-xl h-32 md:h-40 lg:h-48"></div>
          <div className="bg-gray-200 rounded-xl h-32 md:h-40 lg:h-48"></div>
        </div>

      </div>
    </section>
  );
}
