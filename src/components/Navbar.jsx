import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-transparent text-black">
      <h1 className="text-2xl font-extrabold text-[#6a0610]">🛒eComWeb.</h1>

      <ul className="flex gap-8 cursor-pointer font-serif text-lg">
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

      <Link to="/cart" className="relative cursor-pointer">

      {/* Cart Icon */}
      <FaShoppingCart size={24} color="#6a0610" />

      {/* Cart Count */}
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {cart.length}
        </span>
      )}

    </Link>
    </nav>
  );
};

export default Navbar;
