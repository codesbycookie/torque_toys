import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../pages/Components/Navbar";
import Home from "../pages/Home/Home";
import About from "../pages/AboutUs/AboutUs";
import Products from "../pages/OurProducts/OurProducts";
import Contact from "../pages/ContactUs/ContactUs";
import Footer from "../pages/Components/Footer";
import Errorpage from "../pages/404ErrorPage/Errorpage";
import ProductDetail from "../pages/OurProducts/Components/ProductDetail";
import CartPage from "../pages/Cart/CartPage";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../pages/TermsConditons/TermsConditons";
import { CartProvider } from "../context/CartContext.jsx";
import FloaterCart from "../pages/Components/FloaterCart";

export default function AppRoutes() {
  const MainLayout = ({ children }) => (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );

  return (
    <>
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
                <FloaterCart />
              </MainLayout>
            }
          />
          <Route
            path="/about-us"
            element={
              <MainLayout>
                <About />
                <FloaterCart />
              </MainLayout>
            }
          />
          <Route
            path="/our-products"
            element={
              <MainLayout>
                <Products />
                <FloaterCart />
              </MainLayout>
            }
          />
          <Route
            path="/our-products/:id"
            element={
              <MainLayout>
                <ProductDetail />
                <FloaterCart />
              </MainLayout>
            }
          />
          <Route
            path="/contact-us"
            element={
              <MainLayout>
                <Contact />
                <FloaterCart />
              </MainLayout>
            }
          />
          <Route
            path="/cart"
            element={
              <MainLayout>
                <CartPage />
              </MainLayout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <MainLayout>
                <PrivacyPolicy />
              </MainLayout>
            }
          />
          <Route
            path="/terms-conditions"
            element={
              <MainLayout>
                <TermsOfService />
              </MainLayout>
            }
          />
          <Route path="/*" element={<Errorpage />} />
        </Routes>
      </CartProvider>
    </>
  );
}
