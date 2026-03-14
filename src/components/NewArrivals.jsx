import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";


const products = [
  {
    id: 1,
    title: "WOMENS HANDBAG",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    price: 21,
    oldPrice: 30,
  },
  {
    id: 2,
    title: "WOMENS GOGGLE",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    price: 320,
    oldPrice: 410,
  },
  {
    id: 3,
    title: "PRODUCT TITLE 2",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    price: 15,
    oldPrice: 40,
  },
  {
    id: 4,
    title: "PRODUCT TITLE 1",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    price: 320,
    oldPrice: 410,
  },
];

const NewArrivals = () => {

  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <section className="px-16 py-20 bg-gray-100">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold tracking-widest text-[#6a0610]">
          NEW ARRIVALS
        </h2>

        <Link
          to="/products"
          className="rounded border-2 border-[#6a0610] px-6 py-2 hover:bg-white hover:text-[#6a0610] transition bg-[#6a0610] text-white"
        >
          VIEW ALL →
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-10">

        {products.map((product) => {

          const inCart = cart.find((item) => item.id === product.id);

          return (
            <div key={product.id} className="relative group">

              {/* SALE Tag */}
              <div className="absolute left-0 top-10 bg-white px-3 py-6">
                <p className="rotate-[-90deg] text-sm tracking-widest">
                  SALE
                </p>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                className="w-full h-[320px] object-cover"
                alt={product.title}
              />

              {/* Product Info */}
              <div className="mt-4">

                <h3 className="font-semibold tracking-wide text-[#6a0610]">
                  {product.title}
                </h3>

                <div className="flex items-center gap-3 mt-2">

                  {/* Button */}
                  <button
                    onClick={() =>
                      inCart
                        ? navigate("/cart")
                        : addToCart(product)
                    }
                    className={`p-4 rounded-full transition duration-300
                      ${
                        inCart
                          ? "bg-green-600 text-white cursor-pointer"
                          : "bg-[#6a0610] text-white hover:bg-white hover:text-[#6a0610] border border-[#6a0610] cursor-pointer"
                      }
                    `}
                  >
                    <FaShoppingCart size={18} />
                  </button>

                  {/* Price */}
                  <span className="text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>

                  <span className="font-semibold">
                    ${product.price}
                  </span>

                  {/* Text Change */}
                  {inCart && (
                    <span
                      onClick={() => navigate("/cart")}
                      className="text-green-600 text-lg font-bold cursor-pointer"
                    >
                      Go to Cart →
                    </span>
                  )}

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default NewArrivals;