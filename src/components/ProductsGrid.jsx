import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const products = [
  { id: 1, price: "17.00", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2" },
  { id: 2, price: "245.00", image: "https://plus.unsplash.com/premium_photo-1705554519869-fdcebc4ba94b?q=80&w=387&auto=format&fit=crop" },
  { id: 3, price: "19.00", image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb" },
  { id: 4, price: "20.00", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a" },
  { id: 5, price: "7.00", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db" },
  { id: 6, price: "150.00", image: "https://images.unsplash.com/photo-1560343090-f0409e92791a" },
];

const SummerCollection = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <section className="bg-gray-100 py-16 px-10">
      
      <div className="flex justify-between items-center mb-10">
         <h2 className="text-3xl font-bold tracking-widest text-[#6a0610] ">
        MOST SELLING PRODUCTS
      </h2>

       <Link
          to="/products"
          className="rounded border-2 border-[#6a0610] px-6 py-2 hover:bg-white hover:text-[#6a0610] transition bg-[#6a0610] text-white"
        >
          VIEW ALL →
        </Link>
      </div>
     

      <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">

        {products.map((product) => {

          const inCart = cart.find((item) => item.id === product.id);

          return (
            <div key={product.id} className="text-center">

              <div className=" cursor-pointer">
                <img
                  src={product.image}
                  alt="product"
                  className="w-full h-60 object-cover "
                />
              </div>

              <button
                onClick={() =>
                  inCart ? removeFromCart(product.id) : addToCart(product)
                }
                className={`mt-4 w-full py-2 rounded ${
                  inCart
                    ? "bg-green-500 text-black hover:bg-green-600 cursor-pointer"
                    : " hover:bg-white hover:text-[#6a0610] transition bg-[#6a0610] text-white cursor-pointer"
                }`}
              >
                {inCart ? "In Cart ✓" : "Add To Cart →"}
              </button>

              <p className="mt-2 font-semibold">${product.price}</p>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default SummerCollection;