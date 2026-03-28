import React from "react";
import { motion } from "framer-motion";

const SaleBanner = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-10">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 bg-gradient-to-br from-[#f6b4b6] via-[#df8285] to-[#c55a5e] rounded-xl px-6 sm:px-8 md:px-10 py-6 md:py-8"
      >

        {/* LEFT */}
        <div className="text-center md:text-left">
          <span className="bg-[#6a0610] text-white px-3 py-1 text-sm sm:text-base md:text-lg font-bold rounded">
            SALE 40% OFF
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
            Today’s Collection
          </h2>
        </div>

        {/* CENTER */}
        <div className="text-center">
          <h1 className="text-[#2A7B9B] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Online <br /> Shopping
          </h1>

          <p className="text-gray-700 text-sm sm:text-base font-light font-serif mt-1">
            Best Offer For You
          </p>
        </div>

        {/* BUTTON */}
        <div className="w-full md:w-auto flex justify-center">
          <button className="w-full sm:w-auto rounded cursor-pointer text-white bg-[#6a0610] px-6 py-2 font-semibold hover:bg-white hover:text-[#6a0610] transition duration-300">
            SHOP NOW
          </button>
        </div>

      </motion.div>
    </section>
  );
};

export default SaleBanner;