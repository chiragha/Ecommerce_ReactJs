import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <section className="px-16 py-20 grid grid-cols-2 gap-16">

      {/* Product Image */}

      <img
        src={product.image}
        className="w-full h-[450px] object-contain"
      />

      {/* Product Info */}

      <div>

        <p className="text-gray-500 mb-2">
          {product.category}
        </p>

        <h1 className="text-4xl font-bold mb-4 text-[#6a0610]">
          {product.title}
        </h1>

        <p className="text-orange-500 text-xl mb-4">
          ⭐ {product.rating}
        </p>

        <p className="text-3xl font-semibold mb-6">
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-[#6a0610] text-white px-8 py-3 rounded hover:bg-orange-600"
        >
          Add To Cart
        </button>

      </div>

    </section>
  );
};

export default ProductDetail;