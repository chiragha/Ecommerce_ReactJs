import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20 bg-white min-h-screen">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left"
      >

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
          You are one in a million ❤️
        </h1>

        <p className="text-[#6a0610] text-base sm:text-lg md:text-xl mb-6 md:mb-10">
          ...Thank you so much :)
        </p>

        <Link
          to="/products"
          className="inline-block bg-[#6a0610] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#6a0620] transition duration-300"
        >
          Continue Shopping
        </Link>

      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <img
          src="https://m.media-amazon.com/images/I/617iiZpq8hL._AC_UF1000,1000_QL80_.jpg"
          alt="Thank you"
          className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[420px] object-contain"
        />
      </motion.div>

    </div>
  );
};

export default ThankYou;