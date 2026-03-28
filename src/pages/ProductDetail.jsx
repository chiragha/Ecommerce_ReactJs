import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-lg sm:text-xl">
        Product not found
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-contain"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >

          <p className="text-gray-500 mb-2 text-sm sm:text-base">
            {product.category}
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#6a0610] leading-tight">
            {product.title}
          </h1>

          <p className="text-orange-500 text-lg sm:text-xl mb-4">
            ⭐ {product.rating}
          </p>

          <p className="text-2xl sm:text-3xl font-semibold mb-6">
            ${product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="w-full sm:w-auto bg-[#6a0610] text-white px-6 sm:px-8 py-3 rounded hover:bg-orange-600 transition duration-300"
          >
            Add To Cart
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default ProductDetail;