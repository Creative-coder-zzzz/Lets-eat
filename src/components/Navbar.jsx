import { React, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mac-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side  */}
      <div className="flex items-center">
        <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Lets <span className="font-bold">Eat</span>
        </h1>

        <img
          src="https://assets.dryicons.com/uploads/icon/preview/6893/small_1x_f4503e49-d9e6-43b5-9eb1-3ac86ecc95b5.png"
          alt="logo"
          className="w-11"
        />
        <div className="hidden lg:flex items-centr bg-gray-100 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* search input */}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w=[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          className="bg-transparent p-2 focus:outline-none"
          placeholder="Search Foods"
        />
      </div>

      {/* cart buton */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* mobille menu */}
      {/*  Overlay */}
      {toggle ? (
        <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : null}

      {/* side bar menu */}
      <div
        className={
          toggle
            ? "fixed top-0 left-0 w-[300px] bg-white h-screen z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] bg-white h-screen z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setToggle(!toggle)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className=" flex flex-col p-4 text-gray-800  ">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4 " />
              orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4 " />
              Favourites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4  " />
              Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4 " />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4 " />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4 " />
              Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4 " />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
