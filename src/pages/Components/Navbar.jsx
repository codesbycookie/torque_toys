import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="w-full z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-100 sticky top-0 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <h1 className="text-gray-800 text-2xl font-bold rajdhani-semibold group-hover:text-black transition-colors">
            Torque Toyzz
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
          {["Home", "About Us", "Our Products", "Contact Us"].map(
            (label, i) => {
              const paths = ["/", "/about-us", "/our-products", "/contact-us"];
              return (
                <li key={i}>
                  <NavLink
                    to={paths[i]}
                    className={({ isActive }) =>
                      `transition-colors duration-200 font-semibold relative group 
     ${isActive ? "text-black" : "hover:text-black"}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {label}
                        <span
                          className={`absolute left-0 bottom-0 h-[1px] bg-black transition-all duration-300
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                        ></span>
                      </>
                    )}
                  </NavLink>
                </li>
              );
            }
          )}
        </ul>

        {/* Cart Button (Desktop) */}
        <Link
          to="/cart"
          className="hidden md:flex items-center ml-6 px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 relative shadow-md group"
        >
          <ShoppingCart
            className="mr-2 group-hover:scale-110 transition-transform"
            size={18}
          />
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-pulse">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none transition-transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Fully Unmounted When Closed */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg border-t border-gray-100 px-6 py-6 space-y-6 animate-slideDown">
          {[
            { label: "Home", path: "/" },
            { label: "About Us", path: "/about-us" },
            { label: "Our Products", path: "/our-products" },
            { label: "Contact Us", path: "/contact-us" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="block text-gray-700 hover:text-black font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          
        </div>
      )}
    </nav>
  );
}
