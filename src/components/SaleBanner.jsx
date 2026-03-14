import React from "react";

const SaleBanner = () => {
  return (
    <section className="px-16 py-10 ">
      <div className="flex h-42 items-center justify-between bg-gradient-to-br from-[#f6b4b6] via-[#df8285] to-[#c55a5e] rounded-lg px-10 py-6">

        {/* Left Section */}
        <div>
          <span className="bg-[#6a0610] text-white px-3 py-1 text-lg font-bold rounded">
            SALE 40% OFF
          </span>

          <h2 className="text-3xl font-semibold mt-2">
            Today’s Collection
          </h2>
        </div>

        {/* Center Image */}
        <div>
          <h1 className="text-[#2A7B9B] px-3 py-1 text-4xl font-bold">Online <br/> Shopping</h1>
          <p className="text-gray-600 px-3 py-1 text-[16px] font-light font-serif">Best Offer For You</p>
        </div>

        {/* Shop Now Button */}
        <button className="rounded cursor-pointer text-white bg-[#6a0610] px-6 py-2 font-semibold hover:bg-white hover:text-[#6a0610] transition">
          SHOP NOW
        </button>

        {/* Right Image */}
        {/* <div>
          <img
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
            alt="sunglasses"
            className="h-16 object-contain"
          />
        </div> */}

      </div>
    </section>
  );
};

export default SaleBanner;