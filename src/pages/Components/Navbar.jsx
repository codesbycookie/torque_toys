import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className=" w-full z-50 bg-white shadow-lg border-b border-gray-100 sticky top-0">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Torque Toys Logo"
            className="h-10 w-auto object-contain drop-shadow-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-black transition-colors font-bold">Home</Link></li>
          <li><Link to="/about-us" className="hover:text-black transition-colors font-bold">About Us</Link></li>
          <li><Link to="/our-products" className="hover:text-black transition-colors font-bold">Our Products</Link></li>
          <li><Link to="/contact-us" className="hover:text-black transition-colors font-bold">Contact Us</Link></li>
        </ul>

        {/* Cart Button (Desktop) */}
        <Link
          to="/cart"
          className="hidden md:flex items-center ml-6 px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition relative shadow-md"
        >
          <ShoppingCart className="mr-2" size={18} />
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 px-6 py-6 space-y-6 animate-slideDown">
          <Link to="/" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about-us" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/our-products" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Our Products</Link>
          <Link to="/contact-us" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Contact Us</Link>
          
          {/* Cart Button (Mobile) */}
          <Link
            to="/cart"
            className="w-full flex items-center justify-center px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition relative shadow-md"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart className="mr-2" size={18} />
            Cart
            {cart.length > 0 && (
              <span className="absolute top-1 right-10 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}
