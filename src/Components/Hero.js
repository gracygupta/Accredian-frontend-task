import React from "react";
import Example from "./Header";

function Hero({ onOpenModal }) {
  return (
    <div className="hero min-h-screen bg-cover bg-center flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-white mb-8">Let's Learn & Earn</h1>
      <p className="text-xl text-white text-center mb-10">
        Get a chance to win up-to Rs. 15,000
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-sm"
        onClick={onOpenModal}
      >
        Refer Now
      </button>
    </div>
  );
}

export default Hero;
