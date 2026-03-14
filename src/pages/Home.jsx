import Hero from "../components/Hero";
import React from "react";
import ProductsGrid from "../components/ProductsGrid";
import Footer from "../components/Footer";
import SaleBanner from "../components/SaleBanner";
import TrendingSection from "../components/TrendingSection";
import NewArrivals from "../components/NewArrivals";



const Home = () => {

  return (
    <div>
      <Hero/>
      <SaleBanner />
      <NewArrivals />
      <ProductsGrid/>
      <TrendingSection />
      <Footer />
    </div>
  );
};

export default Home;