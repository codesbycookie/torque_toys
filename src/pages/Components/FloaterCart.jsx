import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // adjust import path if needed

export default function FloaterCart() {
  const { cart } = useCart();

  if(cart.length === 0) return null;
  
  return (
    <Link
      to="/cart"
      className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 lg:hidden"
      aria-label="Proceed to checkout"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>

      {cart.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md">
          {cart.length}
        </span>
      )}
    </Link>
  );
}
