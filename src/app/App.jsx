import { Routes, Route } from "react-router-dom";
import Navbar from "../pages/Components/Navbar";
import Home from "../pages/Home/Home";
import About from "../pages/AboutUs/AboutUs";
import Products from "../pages/OurProducts/OurProducts";
import Contact from "../pages/ContactUs/ContactUs";
import Footer from "../pages/Components/Footer";
import Errorpage from "../pages/404ErrorPage/Errorpage";
import ProductDetail from "../pages/OurProducts/Components/ProductDetail";
import CartPage from "../pages/Cart/CartPage"


export default function App() {
  return (
    <>
      
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-products" element={<Products />} />
        <Route path="/our-products/:id" element={<ProductDetail />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </>
  );
}
