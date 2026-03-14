import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const inCart = cart.find((item) => item.id === product.id);

  const handleCart = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">

      <img
        src={product.image}
        className="w-full h-60 object-cover rounded"
      />

      <div className="mt-3">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <p className="font-semibold">
          ${product.price}
        </p>

        <p className="text-yellow-500">
          ⭐ {product.rating}
        </p>

      </div>

      <button
         onClick={() => addToCart(product)}
        className={`mt-4 w-full py-2 rounded ${
          inCart
            ? "bg-green-500 text-black cursor-pointer hover:bg-green-600"
            : "bg-[#6a0610] text-white hover:bg-[#6a0620] cursor-pointer"
        }`}
      >
        {inCart ? "In Cart ✓" : "Add To Cart →"}
      </button>

    </div>
  );
};

export default ProductCard;