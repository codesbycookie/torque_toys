import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Trash2, Lock, Check, ShoppingCart, User } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, sendOrder } = useCart();
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    contact: "",
    address: "",
    shippingAddress: "",
    shippingContact: "",
    sameAsBilling: true,
    agreeToTerms: false, // ✅ New field for terms checkbox
  });

  const [formErrors, setFormErrors] = useState({});

  const getPrice = (price) => {
    const rawPrice = Array.isArray(price) ? price[0] : price;
    return parseFloat(rawPrice.toString().replace(/[^0-9.]/g, "")) || 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "sameAsBilling" && checked
        ? { shippingAddress: prev.address, shippingContact: prev.contact }
        : {}),
    }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Full Name is required";
    if (!formData.phone) errors.phone = "Phone Number is required";
    if (!formData.address) errors.address = "Billing Address is required";
    if (!formData.shippingAddress && !formData.sameAsBilling)
      errors.shippingAddress = "Shipping Address is required";
    if (!formData.agreeToTerms)
      errors.agreeToTerms = "You must agree to Terms and Conditions";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    sendOrder(formData);
    setShowForm(false);
  };

  const totalAmount = cart.reduce((acc, item) => {
    const itemPrice = getPrice(item.price);
    return acc + itemPrice * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 min-h-[80vh] bg-gray-50">
      {/* Progress Bar */}
      <div className="mb-12 relative">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center justify-between w-full max-w-2xl relative">
            {/* Step 1: Cart */}
            <div className="flex flex-col items-center z-20">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full ${
                  showForm ? "bg-gray-200" : "bg-black"
                } transition-all duration-500 relative`}
              >
                {showForm ? (
                  <Check className="w-6 h-6 text-green-600" />
                ) : (
                  <ShoppingCart className="w-6 h-6 text-white" />
                )}
              </div>
              <span
                className={`mt-2 text-sm font-medium ${
                  showForm ? "text-gray-600" : "text-black"
                }`}
              >
                Cart
              </span>
            </div>

            {/* Connector */}
            <div
              className={`flex-1 h-2 mx-2 ${
                showForm ? "bg-black" : "bg-gray-300"
              } transition-all duration-1000 rounded-full`}
            ></div>

            {/* Step 2: Details */}
            <div className="flex flex-col items-center z-20">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full ${
                  showForm ? "bg-black" : "bg-gray-200"
                } transition-all duration-500`}
              >
                {showForm ? (
                  <User className="w-6 h-6 text-white" />
                ) : (
                  <span className="text-gray-500">2</span>
                )}
              </div>
              <span
                className={`mt-2 text-sm font-medium ${
                  showForm ? "text-black" : "text-gray-600"
                }`}
              >
                Details
              </span>
            </div>

            {/* Connector */}
            <div className="flex-1 h-2 mx-2 bg-gray-300 rounded-full"></div>

            {/* Step 3: Confirmation */}
            <div className="flex flex-col items-center z-20">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                <span className="text-gray-500">3</span>
              </div>
              <span className="mt-2 text-sm font-medium text-gray-600">
                Confirmation
              </span>
            </div>
          </div>
        </div>

        {/* Progress Text */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900">
            {!showForm
              ? "Review Your Cart Items"
              : "Almost There! Just Your Details Needed"}
          </h2>
          <p className="text-gray-600 mt-1">
            {!showForm
              ? "Check your items before proceeding to checkout"
              : "Fill in your information to complete your order"}
          </p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-gray-900 tracking-tight">
        Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p className="text-gray-500 text-lg mb-6">
            Your cart is empty. Discover something special!
          </p>
          <Link
            to="/our-products"
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-xl hover:bg-white hover:text-black border border-black transition duration-300"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => {
              const itemPrice = getPrice(item.price);
              const rawPrice = Array.isArray(item.price)
                ? item.price[0]
                : item.price;

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between border rounded-2xl p-4 sm:p-6 shadow-sm bg-white hover:shadow-md transition duration-300"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl"
                      />
                    )}
                    <div>
                      <h2 className="font-semibold text-base sm:text-lg text-gray-900">
                        {item.name}
                      </h2>
                      <p className="text-gray-500 text-sm">₹{rawPrice}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(item.quantity - 1, 1)
                            )
                          }
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-lg font-medium transition"
                        >
                          -
                        </button>
                        <span className="px-2 font-medium w-10 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-lg font-medium transition"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-bold text-gray-900 mt-3 text-lg sm:text-xl">
                        ₹{itemPrice * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              );
            })}
            <div className="border-t pt-6 flex justify-between text-lg sm:text-xl font-bold text-gray-900">
              <span>Total</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border sticky top-20 self-start">
            {!showForm ? (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                  Order Summary
                </h3>
                <p className="text-gray-600 mb-6">
                  You have <strong>{cart.length}</strong> item
                  {cart.length > 1 ? "s" : ""} ready for checkout.
                </p>
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Lock className="w-5 h-5" />
                  <span className="text-sm">Secure Checkout</span>
                </div>
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:bg-white hover:text-black border border-black transition duration-300 shadow-md"
                >
                  Proceed to Checkout
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckout} className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
                  Checkout Details
                </h3>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                  )}
                </div>

                {/* Alternate Contact */}
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Alternate Contact (Optional)
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                  />
                </div>

                {/* Billing Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Billing Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                  />
                  {formErrors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.address}
                    </p>
                  )}
                </div>

                {/* Shipping same as billing */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="sameAsBilling"
                    name="sameAsBilling"
                    checked={formData.sameAsBilling}
                    onChange={handleChange}
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                  <label htmlFor="sameAsBilling" className="text-sm text-gray-700">
                    Shipping same as billing
                  </label>
                </div>

                {/* Shipping Address */}
                {!formData.sameAsBilling && (
                  <>
                    <div>
                      <label
                        htmlFor="shippingAddress"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Shipping Address *
                      </label>
                      <textarea
                        id="shippingAddress"
                        name="shippingAddress"
                        value={formData.shippingAddress}
                        onChange={handleChange}
                        rows="3"
                        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                      />
                      {formErrors.shippingAddress && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.shippingAddress}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="shippingContact"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Shipping Contact (Optional)
                      </label>
                      <input
                        type="tel"
                        id="shippingContact"
                        name="shippingContact"
                        value={formData.shippingContact}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </>
                )}

                {/* ✅ Terms & Conditions */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                    Hereby I confirm that I have read the{" "}
                    <Link
                      to="/terms-conditions"
                      className="underline text-black"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    before I place the order.
                  </label>
                </div>
                {formErrors.agreeToTerms && (
                  <p className="text-red-500 text-xs">{formErrors.agreeToTerms}</p>
                )}

                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Lock className="w-5 h-5" />
                  <span className="text-sm">Secure Checkout via WhatsApp</span>
                </div>
                <button
                  type="submit"
                  disabled={!formData.agreeToTerms}
                  className={`w-full py-3 rounded-xl font-semibold border transition duration-300 shadow-md ${
                    formData.agreeToTerms
                      ? "bg-black text-white hover:bg-white hover:text-black border-black"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit & Send to WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
