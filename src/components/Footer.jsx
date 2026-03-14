import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#f6b4b6] via-[#df8285] to-[#c55a5e] text-white py-16 px-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1 */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-6">
            🛒eComWeb.
          </h3>

          <ul className="space-y-3">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">Shop</li>
            <li className="hover:text-gray-400 cursor-pointer">About</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-6">
            EXPERIENCE
          </h3>

          <ul className="space-y-3">
            <li className="hover:text-gray-400 cursor-pointer">FAQ</li>
            <li className="hover:text-gray-400 cursor-pointer">
              Shipping & Returns
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              Store Policy
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              Payment Methods
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-6">
            FOLLOW US
          </h3>

          <ul className="space-y-3">
            <li className="hover:text-gray-400 cursor-pointer">Facebook</li>
            <li className="hover:text-gray-400 cursor-pointer">X</li>
            <li className="hover:text-gray-400 cursor-pointer">Instagram</li>
            <li className="hover:text-gray-400 cursor-pointer">Pinterest</li>
          </ul>
        </div>

        {/* Column 4 Newsletter */}
        <div>
          <h3 className="text-black text-xl font-semibold mb-6">
            JOIN OUR NEWSLETTER
          </h3>

          <input
            type="email"
            placeholder="Enter your email here *"
            className="w-full bg-transparent border-b border-gray-500 pb-2 outline-none text-white mb-6"
          />

          <div className="flex items-start gap-2 mb-6 text-sm">
            <input type="checkbox" />
            <p>Yes, subscribe me to your newsletter *</p>
          </div>

          <button className="w-full bg-[#6a0610] cursor-pointer hover:bg-[#b6060f] text-white py-3 font-medium">
            Submit
          </button>
        </div>

      </div>

    </footer>
  );
};

export default Footer;