import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    type: "summer",
    price: "17.00",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
  },
  {
    id: 2,
    type: "summer",
    price: "245.00",
    image:
      "https://plus.unsplash.com/premium_photo-1705554519869-fdcebc4ba94b",
  },
  {
    id: 3,
    type: "summer",
    price: "19.00",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
  },
  {
    id: 4,
    type: "summer",
    price: "20.00",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
  },
  {
    id: 5,
    type: "summer",
    price: "7.00",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
  },
  {
    id: 6,
    type: "summer",
    price: "150.00",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
  },
];

const SummerCollection = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <section className="bg-gray-100 py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-[#6a0610] text-center sm:text-left">
          MOST SELLING PRODUCTS
        </h2>

        <Link
          to="/products"
          className="rounded border-2 border-[#6a0610] px-5 py-2 text-sm sm:text-base hover:bg-white hover:text-[#6a0610] transition bg-[#6a0610] text-white"
        >
          VIEW ALL →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
        {products.map((product) => {
          const inCart = cart.find(
            (item) => item.id === product.id && item.type === product.type
          );

          return (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="text-center bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {/* Image */}
              <div className="overflow-hidden cursor-pointer">
                <img
                  src={product.image}
                  alt="product"
                  className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Button */}
              <button
                onClick={() =>
                  inCart
                    ? removeFromCart(product.id, product.type)
                    : addToCart(product)
                }
                className={`mt-4 mx-4 py-2 w-[calc(100%-2rem)] rounded transition duration-300
                  ${
                    inCart
                      ? "bg-green-500 text-black hover:bg-green-600"
                      : "bg-[#6a0610] text-white hover:bg-white hover:text-[#6a0610] border border-[#6a0610]"
                  }
                `}
              >
                {inCart ? "In Cart ✓" : "Add To Cart →"}
              </button>

              {/* Price */}
              <p className="mt-3 mb-4 font-semibold text-sm sm:text-base">
                ${product.price}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SummerCollection;