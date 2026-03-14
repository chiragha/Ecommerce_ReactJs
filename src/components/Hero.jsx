import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center px-16 py-10 overflow-hidden rounded-lg">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1682096559740-9a5e45ef54bd?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Optional Overlay
      <div className="absolute inset-0 bg-white/70"></div> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full">

        {/* LEFT SIDE */}

        <div className="max-w-xl">
  <p className="text-lg font-medium">
            Up to 70% Off <span className="ml-2">_________</span>
          </p>

          <h1 className="text-6xl font-bold leading-tight text-gray-900">
            New <span className="text-[#6a0610]">Season.</span> <br />
            New <span className="text-[#6a0610]">Mood.</span> <br />
            New <span className="text-[#6a0610]">You.</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            It's Time To Turn Over A New Leaf 🌿
          </p>
         

          <button className="mt-8  bg-[#6a0610] text-white cursor-pointer  hover:text-[#6a0620] hover:bg-white px-7 py-3 rounded-lg transition">
            Explore Now 🌿
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;