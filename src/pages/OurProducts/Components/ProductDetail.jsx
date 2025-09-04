import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ourproductpage } from "../../../data/productsData";
import { useCart } from "../../../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = ourproductpage.section2.products.find(
    (p) => p.id === parseInt(id)
  );

  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [showModal, setShowModal] = useState(false); // For modal visibility

  const handleAddToCart = () => {
    addToCart(product);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000); // Auto close after 2s
  };

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Not Found</h2>
        <Link
          to="/our-products"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16 relative">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Added to Cart!
            </h3>
            <p className="text-gray-700 mb-4">{product.name} has been added to your cart.</p>
            <div className="flex justify-center gap-4">
              <Link
                to="/cart"
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                View Cart
              </Link>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-800 rounded-lg hover:bg-gray-100 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side - Thumbnails + Main Image */}
        <div className="flex w-full md:w-1/2 gap-6">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4">
            {[product.image, ...(product.images || [])].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all duration-200 ${
                  selectedImage === img ? "border-black scale-105" : "border-gray-200 hover:border-black"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-[450px] object-contain rounded-xl border border-gray-200 shadow-sm"
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">{product.name}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{product.Fulldescription}</p>
          <p className="text-3xl font-semibold text-gray-900 mt-4">
            ₹{product.price[0]}{" "}
            <span className="text-xl text-gray-500 line-through">
              ₹{product.price[1]}
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 border border-gray-800 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              Add to Cart
            </button>
            <Link
              to="/our-products"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>

      {/* Description Section */}
     
    </div>
  );
}
