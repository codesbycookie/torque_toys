import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

export default function Footer() {
  return (
    <footer className=" bg-black text-gray-400 py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-white text-2xl font-bold">Torque Toyzz</h1>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm mb-6 md:mb-0">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link to="/our-products" className="hover:text-white">Our Products</Link></li>
            <li><Link to="/contact-us" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#"><Facebook className="w-5 h-5 hover:text-white" /></a>
            <a href="#"><Instagram className="w-5 h-5 hover:text-white" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-white" /></a>
            <a href="#"><Mail className="w-5 h-5 hover:text-white" /></a>
            <a href="#"><Youtube className="w-5 h-5 hover:text-white" /></a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Cookie Inc. All rights reserved.</p>
          <a href="https://cookieinc.in" className="text-white font-bold mt-2">A Product by Cookie Inc. 🤍</a>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
