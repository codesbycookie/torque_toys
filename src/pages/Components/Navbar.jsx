import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="cursor-pointer">
          <Link to="/">
            <img 
              src="/logo.png" 
              alt="Torque Toys Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-black">Home</Link></li>
          <li><Link to="/about-us" className="hover:text-black">About Us</Link></li>
          <li><Link to="/our-products" className="hover:text-black">Our Products</Link></li>
          <li><Link to="/contact-us" className="hover:text-black">Contact Us</Link></li>
        </ul>

        {/* Cart Button (Desktop only) */}
        <button className="hidden md:block ml-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Cart
        </button>

        {/* Hamburger Icon (Mobile) */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about-us" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/our-products" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Our Products</Link>
          <Link to="/contact-us" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Contact Us</Link>

          {/* Cart Button (Mobile) */}
          <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Cart
          </button>
        </div>
      )}
    </nav>
  );
}
