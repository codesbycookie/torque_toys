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
    const total = itemPrice * item.quantity;

    return (
      `${String(idx + 1).padEnd(4)} ${String(item.quantity).padEnd(4)} ₹${itemPrice} x ${item.quantity} = ₹${total}\n    ${item.name}`
    );
  })
  .join("\n\n");

const totalAmount = cart.reduce(
  (sum, item) => sum + getPrice(item.price) * item.quantity,
  0
);

const message = `*TORQUE TOYZZ - Remote Control Toys*
Customer Care : +91-9600142392
Website       : www.torquetoyzz.com
------------------------------------

*NEW ORDER PLACED*

*Customer Details*
----------------
  Name    : ${formData.name}
  Phone   : ${formData.phone}

*Shipping Details*
----------------
  Contact : ${formData.contact}
  Address : ${formData.address}

*Products Ordered*
----------------
\`\`\`
S.No  Qty   Price
${cartDetails}

-------------------------
Total Amount : ₹${totalAmount}
\`\`\`

------------------------------------
Thank you for shopping with *Torque Toyzz*!
`;

const whatsappUrl = `https://wa.me/916385138282?text=${encodeURIComponent(
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
