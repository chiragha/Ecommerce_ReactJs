import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "WOMENS HANDBAG",
    type: "new",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    price: 21,
    oldPrice: 30,
  },
  {
    id: 2,
    title: "WOMENS GOGGLE",
    type: "new",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    price: 320,
    oldPrice: 410,
  },
  {
    id: 3,
    title: "PRODUCT TITLE 2",
    type: "new",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    price: 15,
    oldPrice: 40,
  },
  {
    id: 4,
    title: "PRODUCT TITLE 1",
    type: "new",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    price: 320,
    oldPrice: 410,
  },
];

const NewArrivals = () => {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20 bg-gray-100">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-[#6a0610] text-center sm:text-left">
          NEW ARRIVALS
        </h2>

        <Link
          to="/products"
          className="rounded border-2 border-[#6a0610] px-5 py-2 text-sm sm:text-base hover:bg-white hover:text-[#6a0610] transition bg-[#6a0610] text-white"
        >
          VIEW ALL →
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {products.map((product) => {
          const inCart = cart.find(
            (item) => item.id === product.id && item.type === product.type
          );

          return (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {/* SALE Tag */}
              <div className="absolute left-0 top-8 bg-white px-2 py-4">
                <p className="rotate-[-90deg] text-xs tracking-widest">SALE</p>
              </div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-sm sm:text-base tracking-wide text-[#6a0610]">
                  {product.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 mt-3">

                  {/* Button */}
                  <button
                    onClick={() =>
                      inCart ? navigate("/cart") : addToCart(product)
                    }
                    className={`p-3 rounded-full transition duration-300
                      ${
                        inCart
                          ? "bg-green-600 text-white"
                          : "bg-[#6a0610] text-white hover:bg-white hover:text-[#6a0610] border border-[#6a0610]"
                      }
                    `}
                  >
                    <FaShoppingCart size={16} />
                  </button>

                  {/* Prices */}
                  <span className="text-gray-400 line-through text-sm">
                    ${product.oldPrice}
                  </span>

                  <span className="font-semibold text-sm sm:text-base">
                    ${product.price}
                  </span>

                  {/* Go to Cart */}
                  {inCart && (
                    <span
                      onClick={() => navigate("/cart")}
                      className="text-green-600 text-sm font-bold cursor-pointer"
                    >
                      Go →
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default NewArrivals;