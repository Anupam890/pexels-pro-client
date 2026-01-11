import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import ImageToImage from "../../components/ImageToImage";
import Discover from "../../components/Discover";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f1016] text-white selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ImageToImage />
        <Discover />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
