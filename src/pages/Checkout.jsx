import React, { useState,useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const { cart } = useContext(CartContext);
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

   const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      navigate("/thankyou");
    }, 2500);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-10">

        {/* Spinner */}
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-8 rounded-lg flex flex-col items-center gap-4">

            <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

            <p className="font-semibold text-gray-700">
              Processing your order...
            </p>

          </div>

        </div>
      )}


      <div className="bg-white p-10 rounded-lg w-[600px]">

        <h2 className="text-2xl font-bold text-center">Checkout</h2>

        <p className="text-center font-semibold mt-2">
          Grand Total : ${totalPrice.toFixed(2)}
        </p>

        <p className="text-center text-gray-500 mb-8">
          Enter details for shipment.
        </p>

        <form  onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-2 gap-4">
            <input placeholder="First name" className="border p-2 rounded" />
            <input placeholder="Last name" className="border p-2 rounded" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input placeholder="Card number" className="border p-2 rounded" />
            <input type="date" className="border p-2 rounded" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input placeholder="CVC/CVV" className="border p-2 rounded" />
            <input placeholder="Country" className="border p-2 rounded" />
          </div>

          <input placeholder="Email" className="border p-2 rounded w-full" />

          <input placeholder="Address" className="border p-2 rounded w-full" />

          <input placeholder="Phone Number" className="border p-2 rounded w-full" />

          <div className="grid grid-cols-2 gap-4">
            <input placeholder="Area Pincode" className="border p-2 rounded" />
            <input placeholder="Landmark" className="border p-2 rounded" />
          </div>

          <textarea
            placeholder="Message"
            className="border p-2 rounded w-full"
          />

          <button className="bg-[#df8285] text-white w-full py-3 rounded hover:bg-[#df8595] cursor-pointer">
            Submit →
          </button>

        </form>

      </div>

    </div>
  );
};

export default Checkout;