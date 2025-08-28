import { Link } from "react-router-dom";

export default function Navbar() {
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

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-black">Home</Link></li>
          <li><Link to="/about-us" className="hover:text-black">About Us</Link></li>
          <li><Link to="/our-products" className="hover:text-black">Our Products</Link></li>
          <li><Link to="/contact-us" className="hover:text-black">Contact Us</Link></li>
        </ul>

        {/* Cart Button */}
        <button className="ml-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Cart
        </button>
      </div>
    </nav>
  );
}
