import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {

  const [category, setCategory] = useState("all");

  // filtering logic
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((item) => item.category === category);

     const buttonStyle = (value) =>
  `px-4 py-2 rounded transition-all duration-300  cursor-pointer ${
    category === value
      ? "bg-[#6a0610] text-white"
      : "bg-gray-200 hover:bg-[#6a0910] hover:text-white"
  }`;

  return (
    <section className="px-16 py-20">

      <h1 className="text-4xl font-bold mb-10 text-[#6a0610] tracking-widest">
        Our Products
      </h1>

      {/* Category Buttons */}

      <div className="flex gap-4 mb-10 ">

  <button
    onClick={() => setCategory("all")}
    className={buttonStyle("all")}
  >
    All
  </button>

  <button
    onClick={() => setCategory("men")}
    className={buttonStyle("men")}
  >
    Men
  </button>

  <button
    onClick={() => setCategory("women")}
    className={buttonStyle("women")}
  >
    Women
  </button>

  <button
    onClick={() => setCategory("kids")}
    className={buttonStyle("kids")}
  >
    Kids
  </button>

  <button
    onClick={() => setCategory("accessories")}
    className={buttonStyle("accessories")}
  >
    Accessories
  </button>

</div>

      {/* If no products */}

      {filteredProducts.length === 0 ? (

        <div className="text-center text-gray-500 text-xl mt-20">
          No products available in this category.
        </div>

      ) : (

        <div className="grid grid-cols-4 gap-8 ">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      )}

    </section>
  );
};

export default Products;