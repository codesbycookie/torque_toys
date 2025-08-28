import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const products = [
  { id: 1, name: "Action Figure", type: "Standard", price: 55 },
  { id: 2, name: "Collector's Edition", type: "Limited", price: 55 },
  { id: 3, name: "Vintage Model", type: "Classic", price: 55 },
  { id: 4, name: "Premium Edition", type: "Exclusive", price: 55 },
  { id: 5, name: "Rare Statue", type: "Exclusive", price: 75 },
  { id: 6, name: "Golden Edition", type: "Classic", price: 120 },
];

export default function Section4() {
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3; // Number of products visible per "page"
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = current.offsetWidth; // scroll by container width
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Collectibles</p>
            <h2 className="text-3xl font-bold text-gray-900">Products</h2>
            <p className="mt-1 text-gray-600">
              Explore our exclusive range of premium collectibles.
            </p>
          </div>
          <button className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition">
            View all
          </button>
        </div>

        {/* Horizontal Scroll */}
        <div className="relative mt-10">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[250px] flex-shrink-0 group"
              >
                <div className="bg-gray-200 h-60 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Image</span>
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.type}</p>
                <p className="mt-1 font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition ${
                  i === currentPage ? "bg-black" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              className="p-2 border rounded-md hover:bg-gray-100 disabled:opacity-40"
              onClick={() => scroll("left")}
              disabled={currentPage === 0}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="p-2 border rounded-md hover:bg-gray-100 disabled:opacity-40"
              onClick={() => scroll("right")}
              disabled={currentPage === totalPages - 1}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
