import { createContext, useContext, useState, useEffect } from "react";

// Create context
const CartContext = createContext();

// Provider component

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    //  Load from localStorage on first render
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  //  Update quantity
  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const sendOrder = (formData) => {
    const cartDetails = cart
      .map((item, idx) => {
        const itemPrice = getPrice(item.price);
        return `${idx + 1}) ${item.name} - ${
          item.quantity
        } x ₹${itemPrice} = ₹${itemPrice * item.quantity}`;
      })
      .join("\n");

    const message =`🛒 New Order Placed\n
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
  };

    const getPrice = (price) => {
    const rawPrice = Array.isArray(price) ? price[0] : price;
    return parseFloat(rawPrice.toString().replace(/[^0-9.]/g, "")) || 0;
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, sendOrder }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook
