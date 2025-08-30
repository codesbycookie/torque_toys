import { products } from "../../../data/productsData";

export default function Section1() {
  // Duplicate product list for infinite scroll
  const scrollingProducts = [...products, ...products];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Your Next Treasure
          </h2>
          <p className="mt-2 text-gray-600 italic">
            "Not Just Products, but Stories You Can Collect"
          </p>
        </div>

        {/* Infinite Scrolling Images */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {scrollingProducts.map((product, index) => (
              <img
                key={index}
                src={product.image}
                alt={product.name}
                className="w-80 h-52 object-cover rounded-xl mx-4" 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
