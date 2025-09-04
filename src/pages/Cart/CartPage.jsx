import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    contact: "",
    address: "",
    shippingAddress: "",
    shippingContact: "",
  });

  // 🔹 Helper: Get price (handles array or string)
  const getPrice = (price) => {
    const rawPrice = Array.isArray(price) ? price[0] : price;
    return parseFloat(rawPrice.toString().replace(/[^0-9.]/g, "")) || 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    const cartDetails = cart
      .map((item, idx) => {
        const itemPrice = getPrice(item.price);
        return `${idx + 1}) ${item.name} - ${item.quantity} x ₹${itemPrice} = ₹${
          itemPrice * item.quantity
        }`;
      })
      .join("\n");

    const message = `🛒 New Order Placed\n
Name: ${formData.name}
Phone: ${formData.phone}
Contact: ${formData.contact}
Address: ${formData.address}
Shipping Address: ${formData.shippingAddress}
Shipping Contact: ${formData.shippingContact}

🛍️ Products:
${cartDetails}`;

    const whatsappUrl = `https://wa.me/919600142392?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    clearCart();
    localStorage.removeItem("cartItems");
    setShowForm(false);
  };

  const totalAmount = cart.reduce((acc, item) => {
    const itemPrice = getPrice(item.price);
    return acc + itemPrice * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-6 py-12 min-h-[80vh] ">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
        🛒 My Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-16 ">
          <p className="text-gray-600 text-lg mb-10">
            Your cart is empty. Start shopping now!
          </p>
          <Link
            to="/our-products"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-5">
            {cart.map((item) => {
              const itemPrice = getPrice(item.price);
              const rawPrice = Array.isArray(item.price)
                ? item.price[0]
                : item.price;

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between border rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-5">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    )}
                    <div>
                      <h2 className="font-semibold text-lg text-gray-900">
                        {item.name}
                      </h2>
                      <p className="text-gray-500 text-sm">₹{rawPrice}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(item.quantity - 1, 1)
                            )
                          }
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
                        >
                          +
                        </button>
                      </div>

                      <p className="font-bold text-gray-900 mt-3">
                        ₹{itemPrice * item.quantity}
                      </p>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              );
            })}

            {/* Cart Total */}
            <div className="border-t pt-5 flex justify-between text-xl font-semibold">
              <span>Total:</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="bg-white p-6 rounded-xl shadow-md border">
            {!showForm ? (
              <div>
                <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                <p className="text-gray-700 mb-6">
                  You have <strong>{cart.length}</strong> item
                  {cart.length > 1 && "s"} in your cart.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Proceed to Checkout
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckout} className="space-y-4">
                <h3 className="text-lg font-bold mb-4">Checkout Details</h3>

                {/* 2-Column Grid for Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                    required
                  />
                  <input
                    type="text"
                    name="contact"
                    placeholder="Alternate Contact Number"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                  />
                  <input
                    type="text"
                    name="shippingContact"
                    placeholder="Shipping Contact Number"
                    value={formData.shippingContact}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                  />
                </div>

                <textarea
                  name="address"
                  placeholder="Billing Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                  required
                />
                <textarea
                  name="shippingAddress"
                  placeholder="Shipping Address"
                  value={formData.shippingAddress}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-black"
                  required
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border transition"
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
