import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gmail: "",
    contact: "",
    address: "",
    shippingAddress: "",
    shippingContact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    // Cart summary
    const cartDetails = cart
      .map((item, idx) => {
        const itemPrice = parseFloat(item.price.toString().replace(/[^0-9.]/g, "")) || 0;
        return `${idx + 1}) ${item.name} - ${item.quantity} x ₹${itemPrice} = ₹${
          itemPrice * item.quantity
        }`;
      })
      .join("\n");

    const message = `🛒 New Order\n
Name: ${formData.name}
Phone: ${formData.phone}
Gmail: ${formData.gmail}
Contact: ${formData.contact}
Address: ${formData.address}
Shipping Address: ${formData.shippingAddress}
Shipping Contact: ${formData.shippingContact}

🛍️ Products:
${cartDetails}`;

    const whatsappUrl = `https://wa.me/918124962203?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    clearCart();
    setShowForm(false);
  };

  // Calculate total
  const totalAmount = cart.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price.toString().replace(/[^0-9.]/g, "")) || 0;
    return acc + itemPrice * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => {
              const itemPrice = parseFloat(item.price.toString().replace(/[^0-9.]/g, "")) || 0;
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between border rounded-xl p-4 shadow-md bg-white"
                >
                  <div className="flex items-center gap-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg border"
                      />
                    )}
                    <div>
                      <h2 className="font-semibold text-lg">{item.name}</h2>
                      <p className="text-gray-600 text-sm">₹{itemPrice}</p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>

                      <p className="font-bold text-gray-800 mt-2">
                        ₹{itemPrice * item.quantity}
                      </p>
                    </div>
                  </div>
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
            <div className="border-t pt-4 flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </button>
            ) : (
              <form onSubmit={handleCheckout} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="gmail"
                  placeholder="Gmail"
                  value={formData.gmail}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Alternate Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                />
                <textarea
                  name="address"
                  placeholder="Billing Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                  required
                />
                <textarea
                  name="shippingAddress"
                  placeholder="Shipping Address"
                  value={formData.shippingAddress}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="shippingContact"
                  placeholder="Shipping Contact Number"
                  value={formData.shippingContact}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
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
