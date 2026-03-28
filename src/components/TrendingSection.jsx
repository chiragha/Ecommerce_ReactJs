import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "WOMEN COLLECTION",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    title: "MEN COLLECTION",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
  },
  {
    title: "KIDS COLLECTION",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
  },
  {
    title: "ACCESSORIES",
    image:
      "https://plus.unsplash.com/premium_photo-1681276169690-a22f1193c784",
  },
];

const TrendingSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20 bg-gray-100">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">

        {categories.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative group overflow-hidden rounded-lg"
          >

            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Vertical Label (Desktop) */}
            <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white w-[70px] h-[220px] items-center justify-center shadow-md">
              <p className="rotate-[-90deg] text-sm md:text-base font-semibold tracking-widest whitespace-nowrap text-[#6a0610] text-center">
                {item.title}
              </p>
            </div>

            {/* Bottom Label (Mobile) */}
            <div className="md:hidden absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm py-2 text-center">
              <p className="text-sm font-semibold tracking-wide text-[#6a0610]">
                {item.title}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default TrendingSection;