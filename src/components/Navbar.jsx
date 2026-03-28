import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-transparent text-black relative z-50">

      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-extrabold text-[#6a0610]">
        🛒eComWeb.
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 cursor-pointer font-serif text-lg">
        <li className="hover:text-[#d81009]">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-[#d81009]">
          <Link to="/products">Products</Link>
        </li>
        <li className="hover:text-[#d81009]">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-[#d81009]">
          <Link to="/contact">Contact-us</Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Cart */}
        <Link to="/cart" className="relative cursor-pointer">
          <FaShoppingCart size={22} color="#6a0610" />

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Hamburger */}
        <div
          className="md:hidden text-[#6a0610] text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 font-serif text-lg">
              <li onClick={() => setIsOpen(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link to="/products">Products</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link to="/contact">Contact-us</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;