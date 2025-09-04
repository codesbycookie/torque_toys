import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ourproductpage } from "../../../data/productsData";
import { useCart } from "../../../context/CartContext";

export default function Section2() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [popupProduct, setPopupProduct] = useState(null); // <-- For modal popup

  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupProduct(product); // Show popup
    setTimeout(() => setPopupProduct(null), 2000); // Hide after 2 sec
  };

  // Filter and sort products based on searchQuery and sortOption
  const filteredProducts = useMemo(() => {
    let products = [...ourproductpage.section2.products];

    if (searchQuery.trim()) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption === "highToLow") {
      products.sort((a, b) => b.price[0] - a.price[0]);
    }

    return products;
  }, [searchQuery, sortOption]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {ourproductpage.section2.heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of products designed for your needs
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 p-4 bg-white rounded-xl shadow-sm">
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search products by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors"
            />
          </div>

          <div className="w-full md:w-auto">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors"
            >
              <option value="">Sort by</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <div className="mb-6 px-2">
            <p className="text-gray-700">
              Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative w-full h-64 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center mt-4">
                    <p className="text-lg font-bold text-gray-900">
                      ₹{product.price[0].toLocaleString()}
                    </p>
                    <span className="text-gray-500 line-through ml-2">
                      ₹{product.price[1].toLocaleString()}
                    </span>
                    <span className="ml-auto bg-red-100 text-black text-xs font-semibold px-2 py-1 rounded">
                      Save ₹{(product.price[1] - product.price[0]).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex space-x-3">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    Add to Cart
                  </button>
                  <Link
                    to={`/our-products/${product.id}`}
                    className="flex-1 px-4 py-3 bg-black text-white rounded-lg text-center font-medium hover:bg-transparent hover:text-black hover:border-1 hover:rounded-b-lg transition-all duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
                    </svg>
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn't find any products matching "{searchQuery}". Try different keywords or check out our full collection.
            </p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {/* 🔥 Popup Modal */}
      {popupProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center animate-fadeIn">
            <svg className="w-12 h-12 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Added to Cart</h3>
            <p className="text-gray-600 mb-4">{popupProduct.name}</p>
            <button
              onClick={() => setPopupProduct(null)}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.25s ease-out;
          }
        `}
      </style>
    </section>
  );
}
