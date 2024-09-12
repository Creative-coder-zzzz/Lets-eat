import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3  gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1278020/pexels-photo-1278020.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Foods</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/4765652/pexels-photo-4765652.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Best Omelets!</p>
          <p className="px-2">Served Here</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/6529924/pexels-photo-6529924.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
