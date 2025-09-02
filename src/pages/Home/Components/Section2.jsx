import { Monitor, ShoppingCart, Mail,Car } from "lucide-react"; 
import { homepage } from "../../../data/productsData";

export default function Section2({ content }) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
         {content.title}
        </h2>

        {/* Features Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <Car className="w-12 h-12 text-black" />
            <h3 className="mt-4 text-lg font-semibold">
              {content.featurecard.card1.title[0]} <br /> {content.featurecard.card1.title[1]}
            </h3>
            <p className="mt-2 text-gray-600">
              {content.featurecard.card1.description}
            </p>
            <a href="/ourproducts" className="mt-3 text-sm font-medium text-black hover:underline">
              Shop →
            </a>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <ShoppingCart className="w-12 h-12 text-black" />
            <h3 className="mt-4 text-lg font-semibold">
              {content.featurecard.card2.title[0]} <br /> {content.featurecard.card2.title[1]}
            </h3>
            <p className="mt-2 text-gray-600">
              {content.featurecard.card2.description}
            </p>
            <a href="/checkout" className="mt-3 text-sm font-medium text-black hover:underline">
              Checkout →
            </a>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <Mail className="w-12 h-12 text-black" />
            <h3 className="mt-4 text-lg font-semibold">
              {content.featurecard.card3.title[0]} <br /> {content.featurecard.card3.title[1]}
            </h3>
            <p className="mt-2 text-gray-600">
              {content.featurecard.card3.description}
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
