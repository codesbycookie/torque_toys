import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../../../data/productsData";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link
          to="/our-products"
          className="mt-6 inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - thumbnails + big image */}
        <div className="flex w-full md:w-1/2 gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4">
            {[product.image, ...(product.images || [])].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  selectedImage === img ? "border-black" : "border-gray-200"
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
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right side - product details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-6">
            {product.price}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-2 border border-gray-700 rounded-lg hover:bg-gray-100 transition">
              Add to Cart
            </button>
            <Link
              to="/our-products"
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>

      {/* Description below */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
      </div>
    </div>
  );
}
