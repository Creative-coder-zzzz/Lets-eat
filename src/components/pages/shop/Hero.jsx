import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font border-lime-300 ">
            The <span className="text-orange-500 text-4xl">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text">
            Foods <span className="text-orange-500 ">Delivered</span>
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/20741663/pexels-photo-20741663/free-photo-of-burger-with-meat-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Burger and Bacon Sandwich"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
