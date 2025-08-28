import { Routes, Route } from "react-router-dom";
import Navbar from "../pages/Components/Navbar";
import Home from "../pages/Home/Home";
import About from "../pages/AboutUs/AboutUs";
import Products from "../pages/OurProducts/OurProducts";
import Contact from "../pages/ContactUs/ContactUs";
import Footer from "../pages/Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-products" element={<Products />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
