import React from "react";

const TrendingSection = () => {
  return (
    <section className="px-16 py-20 bg-gray-100">
      <div className="grid grid-cols-4 gap-10">

        {/* Women */}
        <div className="relative group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-[80px] h-[260px] flex items-center justify-center shadow-md">
            <p className="rotate-[-90deg] text-lg font-semibold tracking-widest whitespace-nowrap text-[#6a0610] text-center">
              WOMEN COLLECTION
            </p>
          </div>
        </div>

        {/* Men */}
        <div className="relative group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce"
            className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-[80px] h-[260px] flex items-center justify-center shadow-md">
            <p className="rotate-[-90deg] text-lg font-semibold tracking-widest whitespace-nowrap text-[#6a0610] text-center">
              MEN COLLECTION
            </p>
          </div>
        </div>

        {/* Kids */}
        <div className="relative group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4"
            className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-[80px] h-[260px] flex items-center justify-center shadow-md">
            <p className="rotate-[-90deg] text-lg font-semibold tracking-widest whitespace-nowrap text-[#6a0610] text-center">
              KIDS COLLECTION
            </p>
          </div>
        </div>

        {/* Accessories */}
        <div className="relative group overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1681276169690-a22f1193c784?q=80&w=387&auto=format&fit=crop"
            className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-[80px] h-[260px] flex items-center justify-center shadow-md">
            <p className="rotate-[-90deg] text-lg font-semibold tracking-widest whitespace-nowrap text-[#6a0610] text-center">
              ACCESSORIES
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrendingSection;