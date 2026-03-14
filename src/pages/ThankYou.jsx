import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex items-center justify-between px-20 py-20 bg-white min-h-screen">

      <div>

        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          You are one in a million ❤️
        </h1>

        <p className="text-[#6a0610] text-xl mb-10">
          ...Thanks you so much :)
        </p>

        <Link
          to="/products"
          className="bg-[#6a0610] text-white px-8 py-3 rounded-lg hover:bg-[#6a0620]"
        >
          Continue Shopping
        </Link>

      </div>

      <img
        src="https://m.media-amazon.com/images/I/617iiZpq8hL._AC_UF1000,1000_QL80_.jpg"
        className="w-[450px]"
      />

    </div>
  );
};

export default ThankYou;