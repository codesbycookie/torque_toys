import { Link } from "react-router-dom";
import { ourproductpage } from "../../../data/productsData";
import { useCart } from "../../../context/CartContext";

export default function Section2() {
  const { addToCart } = useCart();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          {ourproductpage.section2.heading}
        </h2>

        <div className="space-y-8">
          {ourproductpage.section2.products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 mt-2">{product.description}</p>
                  <p className="text-lg font-semibold text-gray-900 mt-3">
                    {product.price}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex space-x-3">
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-100 transition"
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/our-products/${product.id}`}
                    className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
