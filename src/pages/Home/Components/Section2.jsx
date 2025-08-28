import { Monitor, ShoppingCart, Mail } from "lucide-react"; // icons

export default function Section2() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Discover Exclusive Collectibles <br /> 
          Crafted for the Discerning Collector
        </h2>

        {/* Features Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <Monitor className="w-12 h-12 text-black" />
            <h3 className="mt-4 text-lg font-semibold">
              Elevate Your Collection with <br /> Premium Quality and Unique Designs
            </h3>
            <p className="mt-2 text-gray-600">
              Our curated selection features only the finest collectible toys for adults.
            </p>
            <a href="/ourproducts" className="mt-3 text-sm font-medium text-black hover:underline">
              Shop →
            </a>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <ShoppingCart className="w-12 h-12 text-black" />
            <h3 className="mt-4 text-lg font-semibold">
              Seamless Checkout with <br /> WhatsApp Integration for Your Convenience
            </h3>
            <p className="mt-2 text-gray-600">
              Enjoy a hassle-free shopping experience with direct communication options.
            </p>
            <a href="/checkout" className="mt-3 text-sm font-medium text-black hover:underline">
              Checkout →
            </a>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <Mail className="w-12 h-12 text-black" />
            <h3 className="mt-4 text-lg font-semibold">
              Stay Updated with Our <br /> Exclusive Offers and New Arrivals
            </h3>
            <p className="mt-2 text-gray-600">
              Subscribe to our newsletter for the latest news and promotions.
            </p>
            <a href="/subscribe" className="mt-3 text-sm font-medium text-black hover:underline">
              Subscribe →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
