import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { CartProvider } from "./context/CartContext";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import About from "./pages/About";

function App() {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <h1 className="text-4xl font-bold text-center mt-20">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
