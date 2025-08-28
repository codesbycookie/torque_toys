export default function Navbar() {

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="cursor-pointer">
          <img 
            src="/logo.png" 
            alt="Torque Toys Logo" 
            className="h-10 w-auto object-contain"
          />
        </div>


        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-black">Home</a></li>
          <li><a href="/aboutus" className="hover:text-black">About Us</a></li>
          <li><a href="/ourproducts" className="hover:text-black">Our Products</a></li>
          <li><a href="/contactus" className="hover:text-black">Contact Us</a></li>
        </ul>

        {/* Cart Button */}
        <button className="ml-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Cart
        </button>
      </div>
    </nav>
  );
}
