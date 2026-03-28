import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [category, setCategory] = useState("all");

  // Filtering
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((item) => item.category === category);

  const buttonStyle = (value) =>
    `px-4 py-2 rounded transition-all duration-300 cursor-pointer whitespace-nowrap ${
      category === value
        ? "bg-[#6a0610] text-white"
        : "bg-gray-200 hover:bg-[#6a0610] hover:text-white"
    }`;

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-[#6a0610] tracking-widest text-center sm:text-left">
        Our Products
      </h1>

      {/* Category Buttons (Scrollable on mobile) */}
      <div className="flex gap-3 sm:gap-4 mb-8 md:mb-10 overflow-x-auto pb-2 scrollbar-hide">

        <button onClick={() => setCategory("all")} className={buttonStyle("all")}>
          All
        </button>

        <button onClick={() => setCategory("men")} className={buttonStyle("men")}>
          Men
        </button>

        <button onClick={() => setCategory("women")} className={buttonStyle("women")}>
          Women
        </button>

        <button onClick={() => setCategory("kids")} className={buttonStyle("kids")}>
          Kids
        </button>

        <button
          onClick={() => setCategory("accessories")}
          className={buttonStyle("accessories")}
        >
          Accessories
        </button>

      </div>

      {/* No Products */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-base sm:text-lg mt-16">
          No products available in this category.
        </div>
      ) : (

        /* Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">

          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      )}
    </section>
  );
};

export default Products;