import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-white text-2xl font-bold">Logo</h1>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm mb-6 md:mb-0">
            <li><a href="#" className="hover:text-white">Link One</a></li>
            <li><a href="#" className="hover:text-white">Link Two</a></li>
            <li><a href="#" className="hover:text-white">Link Three</a></li>
            <li><a href="#" className="hover:text-white">Link Four</a></li>
            <li><a href="#" className="hover:text-white">Link Five</a></li>
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
          <p>© 2025 Torque Toys. All rights reserved.</p>
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
