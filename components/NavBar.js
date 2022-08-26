/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { BiSearchAlt2 } from 'react-icons/bi';
import { TbWorld } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { IoOptionsSharp } from 'react-icons/io5';
import Category from './Category';
const NavBar = ({ categories }) => {
  return (
    <>
      <div className=" bg-white sticky top-0 z-10">
        <div className="border-b border-red-100">
          <div className="mx-auto max-w-7xl py-5  px-4  ">
            <div className="grid grid-cols-12  ">
              {/* logo */}
              <div className="lg:col-span-4  flex items-center md:col-span-2 md:flex sm:hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                  alt="Airbnb logo"
                  className="object-cover   h-[30px]"
                />
              </div>
              {/* search component */}
              <div className="lg:col-span-4  md:col-span-5 sm:hidden md:block">
                <div className="rounded-full shadow-xl py-3 max-w-[350px] items-center  mx-auto flex px-3 space-x-1 text-sm justify-center">
                  <div className="align-middle font-semibold cursor-pointer py-1 border-r border-gray-200 px-3">
                    Anywhere
                  </div>
                  <div className="align-middle font-semibold cursor-pointer py-1 border-r border-gray-200 px-3">
                    Anyweek
                  </div>
                  <div className="align-middle font-thin text-xs lg:px-3 md:px-0 cursor-pointer py-1 px-3 text-gray-400 ">
                    Add Guests
                  </div>
                  <div>
                    <div className="w-[30px] h-[30px] rounded-full bg-red-500 flex items-center justify-center  ">
                      <BiSearchAlt2 color="white" size={15} />
                    </div>
                  </div>
                </div>
              </div>
              {/* User options */}
              <div className="flex space-x-5 items-center lg:col-span-4  md:col-span-5 sm:hidden md:flex justify-end">
                <span className="font-thin ">Become a host</span>
                <div>
                  <TbWorld size={20} />
                </div>
                <div className="flex space-x-3 px-3 rounded-full border py-3">
                  <span className="cursor-pointer">
                    <GiHamburgerMenu />
                  </span>
                  <span>
                    <FaUserCircle />
                  </span>
                </div>
              </div>
            </div>
            {/* for mobile resolution */}
            <div className="sm:block md:hidden">
              <div className="flex space-x-4 items-center rounded-full shadow-md py-2  px-3">
                <div>
                  <BiSearchAlt2 size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medoum">Where To?</p>
                  <p className="flex align-middle text-xs text-gray-500 ">
                    Anywhere . Anyweek . Add guests
                  </p>
                </div>
                <div className="rounded-full p-2 border border-gray-200">
                  <IoOptionsSharp size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Category categories={categories} />
      </div>
    </>
  );
};

export default NavBar;
