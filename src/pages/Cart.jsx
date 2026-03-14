import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();
  const { cart, setCart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const [loading, setLoading] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price) * item.qty,
    0
  );

  const removeAllItems = () => {
    setCart([]);
  };

  const handleCheckout = () => {

    if (cart.length === 0) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/thankyou");
    }, 2500);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10 relative">

      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-8 rounded-lg flex flex-col items-center gap-4">

            <div className="w-10 h-10 border-4 border-[#6a0610] border-t-transparent rounded-full animate-spin"></div>

            <p className="font-semibold text-gray-700">
              Processing your order...
            </p>

          </div>

        </div>
      )}

      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg">

        {/* Header */}
        <div className="flex justify-between mb-8">
          <h2 className="text-xl font-semibold text-[#6a0610]">Shopping cart</h2>

          <button className="text-blue-500 cursor-pointer" onClick={removeAllItems}>
            Remove All Items
          </button>
        </div>

        {/* Cart Items */}
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between border-b py-6"
          >

            <div className="flex items-center gap-5">

              <img src={product.image} className="w-16 h-16 object-contain" />

              <div>
                <h3 className="font-medium">{product.title}</h3>

                <div className="flex items-center gap-3 mt-2">

                  <span className="text-sm text-gray-500">Quantity:</span>

                  <div className="flex border">

                    <button
                      className="px-3"
                      onClick={() => decreaseQty(product.id)}
                    >
                      -
                    </button>

                    <span className="px-4 border-x">{product.qty}</span>

                    <button
                      className="px-3"
                      onClick={() => increaseQty(product.id)}
                    >
                      +
                    </button>

                  </div>

                </div>
              </div>
            </div>

            <div className="text-right">

              <p className="font-semibold">
                ${(product.price * product.qty).toFixed(2)}
              </p>

              <button
                onClick={() => removeFromCart(product.id)}
                className="text-blue-500 text-sm mt-2 cursor-pointer"
              >
                Remove
              </button>

            </div>

          </div>
        ))}

        {/* Grand Total */}
        <div className="mt-8">

          <div className="bg-orange-400 flex justify-between px-6 py-3 font-semibold rounded">
            <span>Grand Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="bg-gray-600 text-white text-sm px-6 py-2 mt-2 rounded">
            Shipping and taxes calculated at checkout.
          </div>

          <button
            disabled={cart.length === 0}
            onClick={handleCheckout}
            className={`w-full py-3 mt-6 rounded text-white
              ${cart.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#6a0610] hover:bg-[#6a0610]/90 cursor-pointer"}
            `}
          >
            Checkout
          </button>

          <Link
            to="/products"
            className="text-center block text-sm mt-4 text-gray-500"
          >
            or <span className="text-orange-600">Continue Shopping →</span>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Cart;