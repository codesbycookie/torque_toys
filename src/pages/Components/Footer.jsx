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
            <a href="https://www.facebook.com/profile.php?id=61579811517732&sk=about"><Facebook className="w-5 h-5 hover:text-white" /></a>
            <a href="https://www.instagram.com/torquetoyzz"><Instagram className="w-5 h-5 hover:text-white" /></a>
            <a href="mailto:torquetoyzz@gmail.com"><Mail className="w-5 h-5 hover:text-white" /></a>
            <a href="https://www.youtube.com/@torquetoyzz"><Youtube className="w-5 h-5 hover:text-white" /></a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white ">
          <p className="poppins-regular">© 2025 Torque Toyzz. All rights reserved.</p>
          <a href="https://www.cookieinc.in" target='_blank' className="text-white font-bold mt-2 poppins-regular lg:text-[12px]">An Experience by Cookie Inc <span className="text-[#c18b13] font-black">.</span></a>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white poppins-regular">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white poppins-regular">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
